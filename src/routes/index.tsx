import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Check,
  Clock,
  Heart,
  MapPin,
  Navigation,
  Route as RouteIcon,
  Search,
  ShoppingCart,
  Sparkles,
  Tag,
  Mail,
  Menu,
  Cpu,
  Database,
  Satellite,
  Map as MapIcon,
  X,
  Play,
  RotateCcw,
} from "lucide-react";
import { useMemo, useState } from "react";
import heroApp from "../assets/hero-app.jpg";
import { ContrastInspector } from "../components/ContrastInspector";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MarktMap – Effizient Einkaufen mit der interaktiven Marktkarte" },
      {
        name: "description",
        content:
          "MarktMap zeigt dir jedes Produkt im Supermarkt – mit interaktiver Karte, smarter Einkaufsliste und optimaler Route. Bis zu 50% schneller einkaufen.",
      },
      { property: "og:title", content: "MarktMap – Effizient Einkaufen" },
      { property: "og:description", content: "Die interaktive Marktkarte für jeden Supermarkt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MarktMapPage,
});

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};
const fadeUpProps = {
  variants: fadeUp,
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

function MarktMapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <CompatibleChains />
        <Problem />
        <Features />
        <HowItWorks />
        <Tech />
        <Contact />
      </main>
      <Footer />
      <ContrastInspector />
    </div>
  );
}

/* ------------------------------- Header -------------------------------- */
function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="MarktMap Logo">
      <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
        <MapPin className="size-4" strokeWidth={2.5} />
      </span>
      <span className="text-base font-black tracking-tight">MarktMap</span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "So funktioniert's" },
    { href: "#tech", label: "Technologie" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" aria-label="MarktMap Startseite" className="focus:outline-none">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#kontakt"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            Demo anfragen <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            className="grid size-9 place-items-center rounded-lg border border-border bg-card text-foreground md:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Hero -------------------------------- */
function Hero() {
  const stats = [
    { v: "40h", l: "pro Jahr eingespart" },
    { v: "35k+", l: "Geschäfte in DE" },
    { v: "204 Mrd.€", l: "LEH-Marktvolumen" },
  ];
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Bis zu 50% schneller einkaufen
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Finde jedes Produkt.
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              In jedem Supermarkt.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            MarktMap ist die interaktive Marktkarte für jeden Supermarkt – mit
            zentimetergenauen Produkt­standorten, smarter Liste und optimaler Route.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Pilot starten <ArrowRight className="size-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Wie es funktioniert
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8 text-left">
            {stats.map((e) => (
              <div key={e.l}>
                <dt className="text-2xl font-black tracking-tight sm:text-3xl">{e.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{e.l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-30 blur-2xl"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <img
              src={heroApp}
              alt="MarktMap App – interaktive Marktkarte mit optimaler Einkaufsroute"
              className="block h-auto w-full"
              loading="eager"
            />
          </div>
          <div className="absolute -left-4 top-10 flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-[var(--shadow-soft)]">
            <RouteIcon className="size-5 text-primary" />
            <div className="text-xs">
              <div className="font-semibold">2 Stopps · 4 Min</div>
              <div className="text-muted-foreground">Route aktiv</div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-12 flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-[var(--shadow-soft)]">
            <Tag className="size-5 text-primary" />
            <div className="text-xs">
              <div className="font-semibold">-28%</div>
              <div className="text-muted-foreground">Aktuelle Angebote</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------- Compatible chains ----------------------- */
function CompatibleChains() {
  const chains = ["Lidl", "Aldi", "REWE", "Edeka", "Kaufland", "Netto", "Penny", "dm"];
  return (
    <section aria-label="Kompatible Märkte" className="border-y border-border bg-muted/40 py-10">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Kettenübergreifend kompatibel
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {chains.map((c) => (
            <li
              key={c}
              className="text-xl font-black tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- Problem ----------------------------- */
function Problem() {
  const groups = [
    {
      who: "Kunden",
      pain: "30–50 % der Einkaufszeit für Suchen verschwendet, Frust, unvollständiger Einkauf.",
      fix: "Genaue Produkt­standorte & smarte Route – findet alles auf Anhieb.",
    },
    {
      who: "Mitarbeiter",
      pain: "Ständige Beratung trotz eigener Unsicherheit, ineffizientes Arbeiten, Stress.",
      fix: "Digitale Lagerübersicht entlastet das Team und macht Bestände sichtbar.",
    },
    {
      who: "Märkte",
      pain: "Überfüllte Gänge, schlechter Lauffluss, Umsatzverlust, sinkende Zufriedenheit.",
      fix: "Echtzeitdaten, B2B-Analytics und gezielte In-App-Werbung.",
    },
  ];
  return (
    <section id="problem" className="mx-auto max-w-6xl px-5 py-24">
      <motion.div {...fadeUpProps} className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Problem &amp; Lösung
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
          Einkaufen kostet zu viel Zeit. Wir geben sie zurück.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Deutsche verbringen über{" "}
          <strong className="text-foreground">40 Stunden im Jahr</strong> mit der Produktsuche.
          MarktMap löst dieses Problem für Kunden, Mitarbeiter und Märkte gleichzeitig.
        </p>
      </motion.div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {groups.map((g, i) => (
          <motion.article
            key={g.who}
            {...fadeUpProps}
            transition={{ ...fadeUpProps.transition, delay: i * 0.1 }}
            className="group relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold">{g.who}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{g.pain}</p>
            <div className="mt-5 flex items-start gap-2 rounded-xl bg-primary/5 p-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-foreground">{g.fix}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Features ----------------------------- */
function Features() {
  const items = [
    {
      icon: Search,
      title: "Produktsuche",
      desc: "Tippe ein Produkt – sieh sofort, in welchem Markt und in welchem Regal es steht.",
    },
    {
      icon: MapIcon,
      title: "Interaktive Karte",
      desc: "Marktgrundriss mit Abteilungen, Regalen und einzelnen Sektoren – live aktualisiert.",
    },
    {
      icon: ShoppingCart,
      title: "Smarte Einkaufslisten",
      desc: "Listen verknüpfen sich automatisch mit dem nächstgelegenen Markt und Preisen.",
    },
    {
      icon: Navigation,
      title: "Optimale Route",
      desc: "Die kürzeste Strecke vom Eingang bis zur Kasse – ohne Doppelwege.",
    },
    {
      icon: Tag,
      title: "Aktuelle Angebote",
      desc: "Wochenangebote aller Ketten an einem Ort – mit einem Tap in die Liste.",
    },
    {
      icon: Sparkles,
      title: "B2B Insights",
      desc: "Werbung, Datenanalyse, Mitarbeiter­assistenz und nachhaltige Lager­optimierung.",
    },
  ];
  return (
    <section id="features" className="border-y border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div {...fadeUpProps} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Features</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Alles, was effizientes Einkaufen braucht.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => (
            <motion.div
              key={e.title}
              {...fadeUpProps}
              transition={{ ...fadeUpProps.transition, delay: i * 0.06 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <span className="inline-grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <e.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- How it works --------------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Filiale wählen", d: "Standort, Entfernung und Favoriten im Überblick." },
    { n: "02", t: "Karte erkunden", d: "Abteilungen antippen, Regalaufteilung sehen, Produkt finden." },
    { n: "03", t: "Route starten", d: "Liste laden, Route aktivieren, direkt zur Kasse." },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUpProps}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Produkt-Demo
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Von der Liste zur Kasse in drei Schritten.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tippe rechts auf Abteilungen, um sie zur Liste hinzuzufügen – MarktMap
            berechnet sofort die kürzeste Route.
          </p>
          <ol className="mt-10 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-base font-black text-primary">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          {...fadeUpProps}
          transition={{ ...fadeUpProps.transition, delay: 0.15 }}
        >
          <InteractiveDemo />
        </motion.div>
      </div>
    </section>
  );
}

type Section = { name: string; product: string; col: number; row: number };

const DEMO_SECTIONS: Section[] = [
  { name: "Obst & Gemüse", product: "Bananen", col: 0, row: 0 },
  { name: "Backwaren", product: "Vollkornbrot", col: 1, row: 0 },
  { name: "Molkerei", product: "Joghurt", col: 2, row: 0 },
  { name: "Fleisch", product: "Hähnchen", col: 0, row: 1 },
  { name: "Getränke", product: "Mineralwasser", col: 1, row: 1 },
  { name: "Tiefkühl", product: "Pizza", col: 2, row: 1 },
  { name: "Snacks", product: "Schokolade", col: 0, row: 2 },
  { name: "Konserven", product: "Tomaten", col: 1, row: 2 },
  { name: "Hygiene", product: "Shampoo", col: 2, row: 2 },
];

const ENTRY = { col: 0, row: -0.6, label: "Eingang" };
const CASHIER = { col: 2, row: 2.6, label: "Kasse" };

function InteractiveDemo() {
  const [selected, setSelected] = useState<string[]>(["Molkerei", "Getränke"]);
  const [routeActive, setRouteActive] = useState(true);

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  // Order selected stops via nearest-neighbor starting at ENTRY
  const ordered = useMemo(() => {
    const picks = DEMO_SECTIONS.filter((s) => selected.includes(s.name));
    const result: Section[] = [];
    const remaining = [...picks];
    let cur = { col: ENTRY.col, row: ENTRY.row };
    while (remaining.length) {
      let bestIdx = 0;
      let bestDist = Infinity;
      remaining.forEach((s, i) => {
        const d = (s.col - cur.col) ** 2 + (s.row - cur.row) ** 2;
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      const next = remaining.splice(bestIdx, 1)[0];
      result.push(next);
      cur = { col: next.col, row: next.row };
    }
    return result;
  }, [selected]);

  const minutes = selected.length === 0 ? 0 : 1 + selected.length * 1.5;
  const showRoute = routeActive && ordered.length > 0;

  // Map a (col,row) on the 3x3 grid to SVG coords (0..100)
  const toXY = (col: number, row: number) => ({
    x: 16 + col * 34,
    y: 8 + (row + 0.6) * 26,
  });
  const points = [
    toXY(ENTRY.col, ENTRY.row),
    ...ordered.map((s) => toXY(s.col, s.row)),
    toXY(CASHIER.col, CASHIER.row),
  ];
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="rounded-2xl bg-muted p-5">
        {/* Header */}
        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" /> Lidl Landsberg
          </span>
          <AnimatePresence mode="wait">
            {showRoute ? (
              <motion.span
                key="active"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-1 text-primary"
              >
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                Route aktiv
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-full bg-card px-2 py-1 text-muted-foreground"
              >
                Wähle Abteilungen
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Grid with route overlay */}
        <div className="relative mt-4">
          <div className="grid grid-cols-3 gap-2 text-[10px] font-medium">
            {DEMO_SECTIONS.map((s) => {
              const active = selected.includes(s.name);
              const order = ordered.findIndex((o) => o.name === s.name);
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => toggle(s.name)}
                  className={`relative rounded-lg border px-2 py-3 text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    active
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_0_3px_oklch(52%_0.22_260/0.08)]"
                      : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  {s.name}
                  {active && showRoute && order >= 0 && (
                    <motion.span
                      layout
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-primary text-[10px] font-black text-primary-foreground shadow-[var(--shadow-soft)]"
                    >
                      {order + 1}
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Route SVG overlay */}
          <svg
            viewBox="0 0 100 90"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full"
            aria-hidden
          >
            <AnimatePresence>
              {showRoute && (
                <motion.path
                  key={pathD}
                  d={pathD}
                  fill="none"
                  stroke="oklch(52% 0.22 260)"
                  strokeWidth={0.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 1.6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </svg>
        </div>

        {/* Entry / Cashier labels */}
        <div className="mt-2 flex items-center justify-between text-[10px] font-semibold text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-foreground/60" /> Eingang
          </span>
          <span className="flex items-center gap-1">
            Kasse <span className="size-1.5 rounded-full bg-primary" />
          </span>
        </div>

        {/* Shopping list */}
        <div className="mt-4 rounded-xl bg-card p-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <ShoppingCart className="size-3.5 text-primary" /> Einkaufsliste
            </span>
            <span className="text-muted-foreground">
              {selected.length} {selected.length === 1 ? "Artikel" : "Artikel"}
            </span>
          </div>
          <div className="mt-2 min-h-[2.25rem]">
            <AnimatePresence initial={false}>
              {ordered.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[11px] text-muted-foreground"
                >
                  Wähle oben eine Abteilung, um sie zur Liste hinzuzufügen.
                </motion.p>
              ) : (
                <ul className="flex flex-wrap gap-1.5">
                  {ordered.map((s, i) => (
                    <motion.li
                      key={s.name}
                      layout
                      initial={{ opacity: 0, y: 6, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.18 }}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(s.name)}
                        className="group flex items-center gap-1.5 rounded-full border border-border bg-muted px-2 py-1 text-[11px] font-medium text-foreground hover:border-destructive/40 hover:text-destructive"
                      >
                        <span className="grid size-4 place-items-center rounded-full bg-primary text-[9px] font-black text-primary-foreground">
                          {i + 1}
                        </span>
                        {s.product}
                        <X className="size-3 opacity-50 group-hover:opacity-100" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer stats + actions */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-card px-3 py-2 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold">
              <Clock className="size-4 text-primary" />
              {minutes === 0 ? "—" : `${minutes.toFixed(1).replace(".", ",")} Min`}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <RouteIcon className="size-4 text-primary" />
              {ordered.length} Stopps
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {selected.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSelected([]);
                  setRouteActive(false);
                }}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="size-3" /> Reset
              </button>
            )}
            <button
              type="button"
              disabled={selected.length === 0}
              onClick={() => setRouteActive((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            >
              {showRoute ? (
                <>
                  <Heart className="size-3" /> Route aus
                </>
              ) : (
                <>
                  <Play className="size-3" /> Route starten
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- Tech ------------------------------ */
function Tech() {
  const items = [
    {
      icon: Cpu,
      t: "RFID + Kamera",
      d: "RFID + Kamera für autonome Bestandserfassung nach Ladenschluss.",
    },
    {
      icon: Database,
      t: "Cloud",
      d: "Sichere Datenspeicherung & Verarbeitung in Echtzeit.",
    },
    {
      icon: Satellite,
      t: "Galileo HAS",
      d: "GPS zentimetergenau für präzise Standortbestimmung.",
    },
    {
      icon: MapIcon,
      t: "Live-Karte",
      d: "Akkurate Marktkarten & exakte Produktstandorte – sofort verfügbar.",
    },
  ];
  return (
    <section id="tech" className="relative overflow-hidden border-y border-border bg-muted/40 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div {...fadeUpProps} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Tech-Pipeline
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
            Hardware, Cloud, GPS – ein nahtloses System.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((e, i) => (
            <motion.div
              key={e.t}
              {...fadeUpProps}
              transition={{ ...fadeUpProps.transition, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <span className="inline-grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <e.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{e.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact ----------------------------- */
function Contact() {
  const [store, setStore] = useState("");
  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Kontakt</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Lass uns deinen Markt digitalisieren.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wir starten Pilotprojekte mit Märkten in ganz Deutschland. Sag uns, was du brauchst –
            wir melden uns innerhalb von 24h.
          </p>
          <a
            href="mailto:hello@marktmap.app"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Mail className="size-4" /> hello@marktmap.app
          </a>
        </div>
        <form
          className="grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:hello@marktmap.app?subject=Pilotanfrage%20${encodeURIComponent(
              store
            )}`;
          }}
        >
          <label className="text-sm font-semibold text-foreground">
            Markt / Filiale
            <input
              required
              value={store}
              onChange={(e) => setStore(e.target.value)}
              placeholder="z. B. REWE Berlin-Mitte"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <label className="text-sm font-semibold text-foreground">
            Nachricht
            <textarea
              rows={4}
              placeholder="Erzähl uns von deinem Markt…"
              className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
          >
            Anfrage senden <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

/* --------------------------------- Footer ----------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MarktMap. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Impressum</a>
          <a href="#" className="hover:text-foreground">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
