import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Smartphone, Store, BarChart3, MapPin, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MarktMap – Das digitale Betriebssystem für Supermärkte" },
      { name: "description", content: "Wir verbinden Kunden, Mitarbeiter und Märkte durch intelligente digitale Lösungen — und verwandeln Einkauf und Verwaltung in ein effizientes Erlebnis." },
      { property: "og:title", content: "MarktMap – Das digitale Betriebssystem für Supermärkte" },
      { property: "og:description", content: "Digitale Infrastruktur für den Einzelhandel — App, Marktkarte, Analytics." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative surface-dark overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-teal/25 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[24rem] w-[24rem] rounded-full bg-teal/10 blur-[120px]" />

        <div className="container-page relative pt-16 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="chip-dark"><Sparkles className="h-3.5 w-3.5" /> Retail Operating System</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              MarktMap –<br />
              <span className="text-gradient-teal">Das digitale Betriebssystem</span><br />
              für Supermärkte.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
              Wir verbinden Kunden, Mitarbeiter und Märkte durch intelligente digitale Lösungen
              und verwandeln Einkauf und Verwaltung in ein effizientes Erlebnis.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/roi" className="group inline-flex items-center gap-2 rounded-full bg-teal text-navy-deep font-semibold px-6 py-3.5 hover:opacity-90 transition shadow-[0_0_40px_-8px_oklch(0.86_0.16_200/0.6)]">
                Für Märkte – ROI entdecken
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </Link>
              <Link to="/app" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3.5 hover:bg-white/5 transition">
                Für Kunden – App erleben
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { v: "50%", l: "Schnellerer Einkauf" },
                { v: "40%", l: "Effizientere Prozesse" },
                { v: "135K€", l: "Effekt pro Markt / Jahr" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl lg:text-3xl font-semibold text-teal">{s.v}</div>
                  <div className="text-xs text-white/60 mt-1 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="lg:col-span-5 relative animate-fade-up">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="container-page py-24 lg:py-32">
        <div className="max-w-3xl">
          <span className="chip">Das Problem</span>
          <h2 className="mt-5 text-3xl lg:text-5xl font-semibold tracking-tight">
            Der Einkauf ist langsam.<br />
            Der Markt verliert Geld.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Drei Akteure — drei Reibungsverluste. Wir machen sie sichtbar und lösen sie an einer Stelle.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: Smartphone, who: "Kunden",
              problem: "30–50 % der Einkaufszeit entstehen durch Produktsuche.",
              points: ["Zeitverlust beim Einkauf", "Frustration im Markt", "Unvollständige Einkäufe"],
            },
            {
              icon: Store, who: "Mitarbeiter",
              problem: "Ständige Suchfragen blockieren operatives Arbeiten.",
              points: ["Viele Unterbrechungen", "Höherer Stresslevel", "Langsame Warenverräumung"],
            },
            {
              icon: BarChart3, who: "Märkte",
              problem: "Unentdeckte Regallücken kosten Umsatz.",
              points: ["Schlechte Laufwege", "Umsatzverluste", "Geringe Kundenzufriedenheit"],
            },
          ].map((c) => (
            <div key={c.who} className="card-elevated p-7 hover:translate-y-[-4px] transition-transform">
              <c.icon className="h-7 w-7 text-navy-deep" />
              <h3 className="mt-5 text-xl font-semibold">{c.who}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
              <ul className="mt-5 grid gap-2 text-sm">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big number */}
        <div className="mt-16 relative overflow-hidden rounded-3xl surface-dark p-10 lg:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-teal">Jährlicher Verlust pro Markt</p>
              <div className="mt-4 text-6xl lg:text-8xl font-semibold tracking-tight">
                <AnimatedCounter end={135000} prefix="" suffix=" €" />
              </div>
              <p className="mt-5 text-white/70 max-w-md">
                Ein durchschnittlicher Supermarkt verliert durch ineffiziente Prozesse, Out-of-Stock
                und schlechte Laufwege bis zu <strong className="text-white">135.000 €</strong> jedes Jahr.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { v: 50, s: "%", l: "Suchzeit" },
                { v: 40, s: "%", l: "Effizienzverlust" },
                { v: 15, s: "k€", l: "Out-of-Stock" },
              ].map((m) => (
                <div key={m.l} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-semibold text-teal">
                    <AnimatedCounter end={m.v} suffix={m.s} />
                  </div>
                  <div className="text-xs text-white/60 mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars teaser */}
      <section className="container-page pb-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="chip">Die Lösung</span>
            <h2 className="mt-4 text-3xl lg:text-5xl font-semibold">Eine Plattform. Drei Ebenen.</h2>
          </div>
          <Link to="/loesung" className="text-sm font-medium text-navy-deep inline-flex items-center gap-1 hover:gap-2 transition-all">
            Lösung im Detail <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: Smartphone, t: "Kunden-App", d: "Marktkarte, Routenplanung, smarte Einkaufsliste, aktuelle Angebote.", k: "50 % schneller" },
            { icon: Store, t: "Mitarbeiter-System", d: "Digitale Aufgaben, Bestandsübersicht, optimierte Warenverräumung.", k: "40 % effizienter" },
            { icon: BarChart3, t: "Marktmanagement", d: "Heatmaps, Laufwege, Platzierungsanalyse, Nachhaltigkeit.", k: "Datenbasiert" },
          ].map((p, i) => (
            <div key={p.t} className="group card-elevated p-7 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-teal/0 group-hover:bg-teal/15 blur-2xl transition-all" />
              <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
              <p.icon className="h-7 w-7 mt-4 text-navy-deep" />
              <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep">
                <span className="h-2 w-2 rounded-full bg-teal" /> {p.k}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl surface-dark relative overflow-hidden p-10 lg:p-16">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="chip-dark">Vision</p>
            <h2 className="mt-5 text-3xl lg:text-5xl font-semibold tracking-tight">
              Die Zukunft des Einkaufens beginnt<br />mit einer <span className="text-gradient-teal">digitalen Karte</span>.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/business" className="inline-flex items-center gap-2 rounded-full bg-teal text-navy-deep font-semibold px-6 py-3.5">
                Geschäftsmodell ansehen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/technologie" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3.5 hover:bg-white/5">
                Technologie verstehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] max-w-md mx-auto">
      {/* Dashboard card */}
      <div className="absolute top-0 right-0 w-[78%] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-widest text-teal">Live Analytics</div>
          <div className="h-2 w-2 rounded-full bg-teal animate-pulse-glow" />
        </div>
        <div className="text-3xl font-semibold text-white">+ 38 %</div>
        <div className="text-[11px] text-white/60 mt-1">Effizienz vs. Vorwoche</div>
        <div className="mt-4 flex items-end gap-1.5 h-16">
          {[40, 55, 35, 65, 50, 78, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-teal/30 to-teal" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 left-0 w-[58%] rounded-[2rem] bg-navy border border-white/10 p-3 shadow-2xl rotate-[-6deg]">
        <div className="rounded-[1.5rem] bg-gradient-to-b from-navy-deep to-navy p-4 aspect-[9/16] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-widest text-teal">MarktMap</div>
            <div className="mt-2 text-white font-semibold text-sm">Milch finden</div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2 text-white/80 text-xs">
                <MapPin className="h-3 w-3 text-teal" /> Gang 4 · Regal B
              </div>
            </div>
            <div className="mt-3 space-y-1.5">
              {[60, 80, 45].map((w, i) => (
                <div key={i} className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-teal" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
            {/* Mini map */}
            <div className="mt-4 rounded-xl border border-white/10 aspect-square relative bg-navy-deep/50">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 10 90 L 10 50 L 50 50 L 50 20 L 80 20" stroke="oklch(0.86 0.16 200)" strokeWidth="2" fill="none" strokeDasharray="3 3" />
                <circle cx="10" cy="90" r="3" fill="oklch(0.86 0.16 200)" />
                <circle cx="80" cy="20" r="4" fill="oklch(0.86 0.16 200)" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
