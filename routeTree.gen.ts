import { createFileRoute } from "@tanstack/react-router";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Rocket, Building2, Target, Globe, CircleDot } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap & Finanzen – MarktMap" },
      { name: "description", content: "Gesamtbudget 400.000 €, Break-Even nach 15 Monaten, Go-to-Market in drei Phasen bis 200+ Märkte." },
    ],
  }),
  component: RoadmapPage,
});

const data = [
  { name: "Technologie & Entwicklung", value: 60, color: "oklch(0.86 0.16 200)" },
  { name: "Operations", value: 15, color: "oklch(0.7 0.12 220)" },
  { name: "Marketing & Vertrieb", value: 11, color: "oklch(0.55 0.08 230)" },
  { name: "Betriebskapital", value: 10, color: "oklch(0.4 0.05 235)" },
  { name: "Reserve", value: 4, color: "oklch(0.3 0.04 240)" },
];

function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Umsetzung · Finanzen · Go-to-Market"
        title={<>Vom Pilot zur <span className="text-gradient-teal">nationalen Plattform</span>.</>}
        description="400.000 € Gesamtbudget, Break-Even nach ca. 15 Monaten, danach skalieren wir in drei klaren Phasen."
      />

      {/* Budget */}
      <section className="container-page py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip">Investment-Allokation</span>
          <h2 className="mt-5 text-3xl lg:text-4xl font-semibold">Gesamtbudget</h2>
          <div className="mt-4 text-6xl lg:text-7xl font-semibold tracking-tight text-navy-deep">
            <AnimatedCounter end={400000} suffix=" €" />
          </div>
          <div className="mt-8 grid gap-3">
            {data.map((d) => (
              <div key={d.name} className="flex items-center justify-between gap-4 p-4 rounded-xl border border-border">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ background: d.color }} />
                  <span className="font-medium text-sm">{d.name}</span>
                </div>
                <span className="font-semibold tabular-nums">{d.value} %</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[400px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={90} outerRadius={150} paddingAngle={2}>
                {data.map((d) => <Cell key={d.name} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => `${v} %`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="text-center">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Budget</div>
              <div className="text-3xl font-semibold">400 k€</div>
            </div>
          </div>
        </div>
      </section>

      {/* Break Even */}
      <section className="container-page pb-24">
        <div className="rounded-3xl surface-dark p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative">
            <p className="chip-dark">Break-Even Pfad</p>
            <h3 className="mt-5 text-3xl lg:text-4xl font-semibold">Break-Even nach ca. 15 Monaten.</h3>
            <p className="mt-4 text-white/70 max-w-2xl">
              Ab diesem Zeitpunkt decken die Lizenzumsätze die laufenden Kosten — danach skaliert das Modell profitabel.
            </p>

            <div className="mt-12 relative">
              <div className="absolute top-6 left-0 right-0 h-px bg-white/15" />
              <div className="grid grid-cols-4 gap-4 relative">
                {[
                  { l: "Launch", s: "M0" },
                  { l: "Pilotmärkte", s: "M3" },
                  { l: "15 Märkte", s: "M9" },
                  { l: "Break-Even", s: "M15", highlight: true },
                ].map((p) => (
                  <div key={p.l} className="flex flex-col items-center text-center">
                    <div className={`h-12 w-12 rounded-full grid place-items-center border ${p.highlight ? "bg-teal border-teal text-navy-deep" : "border-white/20 bg-navy"}`}>
                      <CircleDot className="h-5 w-5" />
                    </div>
                    <div className="mt-4 font-semibold">{p.l}</div>
                    <div className="text-xs text-white/60">{p.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go-to-Market */}
      <section className="container-page pb-24">
        <span className="chip">Go-to-Market</span>
        <h2 className="mt-5 text-3xl lg:text-5xl font-semibold">Drei Phasen. Eine Mission.</h2>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Rocket, n: "Phase 1", t: "10 Pilotmärkte", g: "Erste Nutzer · Feedback · Optimierung", k: "Validierung & Refinement" },
            { icon: Building2, n: "Phase 2", t: "50 Märkte", g: "Regionaler Ausbau · Multi-Standort-Rollout", k: "Operativer Hebel" },
            { icon: Globe, n: "Phase 3", t: "200+ Märkte", g: "Nationale Expansion · Plattform-Skalierung", k: "Marktführerschaft DACH" },
          ].map((p, i) => (
            <div key={p.n} className="card-elevated p-8 relative">
              <div className="absolute top-6 right-6 chip">{p.n}</div>
              <p.icon className="h-8 w-8 text-navy-deep mt-2" />
              <h3 className="mt-5 text-2xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.g}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Ziel</div>
                <div className="mt-1 font-semibold flex items-center gap-2">
                  <Target className="h-4 w-4 text-teal" /> {p.k}
                </div>
              </div>
              <div className="mt-6 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal to-navy-deep" style={{ width: `${(i + 1) * 33}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
