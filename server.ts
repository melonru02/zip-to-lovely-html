import { createFileRoute } from "@tanstack/react-router";
import { Plane, Cloud, Map, Camera, Radio, Compass, Shield, Moon, Database, Box, Boxes, Link2, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/technologie")({
  head: () => ({
    meta: [
      { title: "Technologie – MarktMap" },
      { name: "description", content: "Wie MarktMap den digitalen Zwilling eines Supermarktes erstellt — autonome Drohnen, Cloud-Verarbeitung und Echtzeit-Marktkarte." },
    ],
  }),
  component: TechPage,
});

const steps = [
  {
    n: "01", icon: Plane, title: "Autonome Micro-Drohne",
    desc: "Erfasst nach Ladenschluss autonom jeden Quadratmeter des Marktes — ohne GPS, ohne Personal vor Ort.",
    chips: [
      { icon: Camera, t: "Kamera" },
      { icon: Radio, t: "RFID" },
      { icon: Compass, t: "LiDAR" },
      { icon: Shield, t: "Propellerschutz" },
      { icon: Moon, t: "Nach Ladenschluss" },
    ],
  },
  {
    n: "02", icon: Cloud, title: "Cloud Verarbeitung",
    desc: "Rohdaten werden in der Cloud zu einem strukturierten Marktmodell — Regale, Produkte, Bestände, Layout.",
    chips: [
      { icon: Database, t: "Datenanalyse" },
      { icon: Box, t: "Produkterkennung" },
      { icon: Boxes, t: "Regalstruktur" },
      { icon: Database, t: "Bestandsdaten" },
    ],
  },
  {
    n: "03", icon: Map, title: "Digitale Marktkarte",
    desc: "Der Markt existiert als digitaler Zwilling — verbunden mit App, Kassensystem und Verwaltungssystem.",
    chips: [
      { icon: Link2, t: "App-Integration" },
      { icon: Link2, t: "Kassensystem" },
      { icon: Link2, t: "Verwaltungssystem" },
    ],
  },
];

function TechPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technologie"
        title={<>Wir bauen den <span className="text-gradient-teal">digitalen Zwilling</span> jedes Supermarktes.</>}
        description="MarktMap kombiniert autonome Mikro-Drohnen, Cloud-KI und ein Live-Datenmodell zu einer Echtzeit-Marktkarte."
      />

      <section className="container-page py-24">
        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-24 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((s) => (
              <div key={s.n} className="card-elevated p-8 relative">
                <div className="absolute -top-4 left-8 chip">Step {s.n}</div>
                <s.icon className="h-10 w-10 mt-4 text-navy-deep" />
                <h3 className="mt-5 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span key={c.t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium">
                      <c.icon className="h-3.5 w-3.5 text-navy-deep" /> {c.t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process diagram */}
        <div className="mt-20 rounded-3xl surface-dark p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative">
            <p className="chip-dark">Datenpipeline</p>
            <h3 className="mt-5 text-2xl lg:text-3xl font-semibold">Vom physischen Regal zum digitalen Modell.</h3>

            <div className="mt-10 grid lg:grid-cols-7 gap-4 items-center">
              {[
                { icon: Plane, t: "Drohne erfasst" },
                null,
                { icon: Cloud, t: "Cloud verarbeitet" },
                null,
                { icon: Map, t: "Marktkarte entsteht" },
                null,
                { icon: Link2, t: "Live in allen Systemen" },
              ].map((node, i) =>
                node ? (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <node.icon className="h-6 w-6 mx-auto text-teal" />
                    <div className="mt-3 text-sm font-medium">{node.t}</div>
                  </div>
                ) : (
                  <ArrowRight key={i} className="h-5 w-5 mx-auto text-teal hidden lg:block" />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
