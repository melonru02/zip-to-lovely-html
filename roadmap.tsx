import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, AlertTriangle, TrendingDown, Users, Package, ShoppingCart, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "Problem – MarktMap" },
      { name: "description", content: "Wo Kunden Zeit verlieren, Mitarbeiter gestresst sind und Märkte Umsatz einbüßen — die Pain Points im Einzelhandel." },
    ],
  }),
  component: ProblemPage,
});

function ProblemPage() {
  return (
    <>
      <PageHeader
        eyebrow="Das Problem"
        title={<>Der Einkauf ist langsam.<br /><span className="text-gradient-teal">Der Markt verliert Geld.</span></>}
        description="Drei Akteure mit drei Reibungsverlusten — die zusammen jedem Standardmarkt jährlich bis zu 135.000 € kosten."
      />

      <section className="container-page py-24">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: ShoppingCart, who: "Kunden", color: "text-teal",
              big: "30–50 %", bigLabel: "der Einkaufszeit entstehen durch Produktsuche",
              points: ["Zeitverlust beim Einkauf", "Frustration vor leeren Regalen", "Unvollständige Einkäufe", "Geringere Kaufbereitschaft"] },
            { icon: Users, who: "Mitarbeiter", color: "text-teal",
              big: "100+", bigLabel: "Suchfragen pro Tag pro Markt",
              points: ["Viele Unterbrechungen", "Ineffizientes Arbeiten", "Höherer Stresslevel", "Langsame Warenverräumung"] },
            { icon: Package, who: "Märkte", color: "text-teal",
              big: "8 %", bigLabel: "Umsatzverlust durch Out-of-Stock",
              points: ["Schlechte Laufwege", "Unentdeckte Regallücken", "Umsatzverluste", "Geringe Kundenzufriedenheit"] },
          ].map((c) => (
            <div key={c.who} className="card-elevated p-8">
              <c.icon className="h-8 w-8 text-navy-deep" />
              <h3 className="mt-6 text-2xl font-semibold">{c.who}</h3>
              <div className="mt-6 pb-6 border-b border-border">
                <div className="text-4xl font-semibold text-navy-deep">{c.big}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.bigLabel}</div>
              </div>
              <ul className="mt-6 grid gap-3">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <AlertTriangle className="h-4 w-4 text-teal mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Big loss */}
      <section className="container-page pb-24">
        <div className="rounded-3xl surface-dark relative overflow-hidden p-10 lg:p-16">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <p className="chip-dark"><TrendingDown className="h-3.5 w-3.5" /> Wirtschaftlicher Schaden</p>
              <h2 className="mt-5 text-3xl lg:text-5xl font-semibold">
                Ein Markt verliert jährlich bis zu
              </h2>
              <div className="mt-6 text-7xl lg:text-9xl font-semibold tracking-tight text-gradient-teal">
                <AnimatedCounter end={135000} suffix=" €" />
              </div>
              <p className="mt-6 text-white/70 max-w-xl">
                Hochgerechnet aus Effizienzverlusten, Lohnkosten ineffektiver Suchprozesse und
                Umsatzausfällen durch Out-of-Stock — pro Standardmarkt, pro Jahr.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-4">
              {[
                { icon: Clock, v: 120000, s: " €", l: "Personalineffizienz" },
                { icon: Package, v: 15000, s: " €", l: "Out-of-Stock Verluste" },
              ].map((m) => (
                <div key={m.l} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <m.icon className="h-5 w-5 text-teal" />
                  <div className="mt-3 text-3xl font-semibold">
                    <AnimatedCounter end={m.v} suffix={m.s} />
                  </div>
                  <div className="text-sm text-white/60 mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border p-8">
          <div>
            <h3 className="text-xl font-semibold">Wir lösen das Problem an einer Stelle.</h3>
            <p className="text-sm text-muted-foreground mt-1">Eine Plattform für Kunden, Mitarbeiter und Marktleitung.</p>
          </div>
          <Link to="/loesung" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium">
            Zur Lösung <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
