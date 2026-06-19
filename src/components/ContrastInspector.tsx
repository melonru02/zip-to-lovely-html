import { useEffect, useRef, useState } from "react";
import { Contrast, X } from "lucide-react";

type RGB = { r: number; g: number; b: number; a: number };

function parseColor(input: string): RGB | null {
  if (!input) return null;
  const m = input.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
  if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return null;
  return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
}

function blend(fg: RGB, bg: RGB): RGB {
  const a = fg.a;
  return {
    r: Math.round(fg.r * a + bg.r * (1 - a)),
    g: Math.round(fg.g * a + bg.g * (1 - a)),
    b: Math.round(fg.b * a + bg.b * (1 - a)),
    a: 1,
  };
}

function relLum({ r, g, b }: RGB) {
  const toLin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
}

function contrastRatio(a: RGB, b: RGB) {
  const l1 = relLum(a);
  const l2 = relLum(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

function toHex({ r, g, b }: RGB) {
  return (
    "#" +
    [r, g, b]
      .map((n) => n.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function effectiveBg(el: Element): RGB {
  let node: Element | null = el;
  let acc: RGB = { r: 255, g: 255, b: 255, a: 1 };
  const stack: RGB[] = [];
  while (node) {
    const c = parseColor(getComputedStyle(node).backgroundColor);
    if (c && c.a > 0) stack.push(c);
    node = node.parentElement;
  }
  // Walk from root (last) to leaf (first), blending
  for (let i = stack.length - 1; i >= 0; i--) {
    acc = blend(stack[i], acc);
  }
  return acc;
}

function fontInfo(el: Element) {
  const cs = getComputedStyle(el);
  const px = parseFloat(cs.fontSize);
  const weight = parseInt(cs.fontWeight, 10) || 400;
  const large = px >= 24 || (px >= 18.66 && weight >= 700);
  return { px, weight, large };
}

export function ContrastInspector() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState<null | {
    fg: RGB;
    bg: RGB;
    ratio: number;
    large: boolean;
    fontPx: number;
    tag: string;
    x: number;
    y: number;
  }>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setData(null);
      return;
    }
    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (!el || el.closest("[data-contrast-overlay]")) return;
        const fg = parseColor(getComputedStyle(el).color);
        const bg = effectiveBg(el);
        if (!fg) return;
        const finalFg = fg.a < 1 ? blend(fg, bg) : fg;
        const ratio = contrastRatio(finalFg, bg);
        const { px, large } = fontInfo(el);
        setData({
          fg: finalFg,
          bg,
          ratio,
          large,
          fontPx: px,
          tag: el.tagName.toLowerCase(),
          x: e.clientX,
          y: e.clientY,
        });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  const aaMin = data ? (data.large ? 3 : 4.5) : 4.5;
  const aaaMin = data ? (data.large ? 4.5 : 7) : 7;
  const passAA = data ? data.ratio >= aaMin : false;
  const passAAA = data ? data.ratio >= aaaMin : false;

  return (
    <div data-contrast-overlay className="pointer-events-none fixed inset-0 z-[9999]">
      <button
        type="button"
        onClick={() => setActive((v) => !v)}
        className={`pointer-events-auto fixed bottom-5 right-5 flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-[var(--shadow-soft)] transition ${
          active
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card text-foreground hover:bg-muted"
        }`}
        aria-pressed={active}
        aria-label="Kontrast-Inspektor umschalten"
      >
        {active ? <X className="h-4 w-4" /> : <Contrast className="h-4 w-4" />}
        Kontrast {active ? "aus" : "prüfen"}
      </button>

      {active && data && (
        <div
          className="fixed min-w-[240px] rounded-xl border border-border bg-card p-3 text-xs shadow-[var(--shadow-elegant)]"
          style={{
            left: Math.min(data.x + 16, window.innerWidth - 280),
            top: Math.min(data.y + 16, window.innerHeight - 200),
          }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              &lt;{data.tag}&gt; · {Math.round(data.fontPx)}px
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                passAA
                  ? "bg-emerald-500/15 text-emerald-700"
                  : "bg-red-500/15 text-red-700"
              }`}
            >
              {data.ratio.toFixed(2)}:1
            </span>
          </div>

          <div className="space-y-1.5">
            <Row label="Vordergrund" rgb={data.fg} />
            <Row label="Hintergrund" rgb={data.bg} />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px]">
            <Badge ok={passAA} label={`AA (${aaMin})`} />
            <Badge ok={passAAA} label={`AAA (${aaaMin})`} />
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">
            {data.large ? "Großer Text" : "Normaler Text"} · Hover auf andere Elemente bewegen.
          </p>
        </div>
      )}
    </div>
  );
}

function Row({ label, rgb }: { label: string; rgb: RGB }) {
  const hex = toHex(rgb);
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-5 w-5 shrink-0 rounded border border-border"
        style={{ background: `rgb(${rgb.r} ${rgb.g} ${rgb.b})` }}
      />
      <span className="w-20 text-muted-foreground">{label}</span>
      <span className="font-mono">{hex}</span>
    </div>
  );
}

function Badge({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`rounded-md px-2 py-1 text-center font-semibold ${
        ok ? "bg-emerald-500/15 text-emerald-700" : "bg-red-500/15 text-red-700"
      }`}
    >
      {ok ? "✓" : "✗"} {label}
    </span>
  );
}
