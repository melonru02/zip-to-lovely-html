import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Users, BarChart3, ArrowRight, Check, MapPin, ListChecks, Route as RouteIcon, Tag, ClipboardList, Boxes, GraduationCap, Truck, Activity, Flame, Footprints, Leaf } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/loesung")({
  head: () => ({
    meta: [
      { title: "Lösung – MarktMap" },
      { name: "description", content: "Eine digitale Infrastruktur für den Einzelhandel: Kunden-App, Mitarbeiter-System und Marktmanagement in einer Plattform." },
    ],
  }),
  component: LoesungPage,
});

const pillars = [
  {
    n: "01", icon: Smartphone, title: "Kunden-App", result: "Bis zu 50 % schneller einkaufen",
    features: [
      { icon: MapPin, t: "Digitale Marktkarte" },
      { icon: MapPin, t: "Produktstandortsuche" },
      { icon: ListChecks, t: "Intelligente Einkaufsliste" },
      { icon: RouteIcon, t: "Automatische Routenplanung" },
      { icon: Tag, t: "Aktuelle Angebote" },
    ],
  },
  {
    n: "02", icon: Users, title: "Mitarbeiter-System", result: "Bis zu 40 % effizientere Prozesse",
    features: [
      { icon: ClipboardList, t: "Digitale Aufgaben" },
      { icon: Boxes, t: "Warenbestand jederzeit sichtbar" },
      { icon: GraduationCap, t: "Schnellere Einarbeitung" },
      { icon: Truck, t: "Optimierte Warenverräumung" },
    ],
  },
  {
    n: "03", icon: BarChart3, title: "Marktmanagement", result: "Datengetriebene Entscheidungen",
    features: [
      { icon: Activity, t: "Analytics Dashboard" },
      { icon: Flame, t: "Heatmaps" },
      { icon: Footprints, t: "Kundenlaufwege" },
      { icon: BarChart3, t: "Produktplatzierungsanalyse" },
      { icon: Leaf, t: "Nachhaltigkeitsoptimierung" },
    ],
  },
];

function LoesungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Die Lösung"
        title={<>Eine <span className="text-gradient-teal">digitale Infrastruktur</span> für den Einzelhandel.</>}
        description="MarktMap verbindet Kunden, Mitarbeiter und Marktmanagement auf einer Plattform — drei Ebenen, ein Betriebssystem."
      />

      <section className="container-page py-24 grid gap-16">
        {pillars.map((p, i) => (
          <div key={p.n} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-5 card-elevated p-8 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-teal/15 blur-3xl" />
              <div className="relative">
                <div className="font-mono text-xs text-muted-foreground">{p.n}</div>
                <p.icon className="h-10 w-10 mt-4 text-navy-deep" />
                <h2 className="mt-5 text-3xl font-semibold">{p.title}</h2>
                <div className="mt-8 rounded-2xl bg-primary text-primary-foreground p-6">
                  <div className="text-xs uppercase tracking-widest text-teal">Ergebnis</div>
                  <div className="mt-2 text-2xl font-semibold">{p.result}</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {p.features.map((f) => (
                  <div key={f.t} className="flex items-start gap-3 p-5 rounded-2xl border border-border hover:border-teal hover:bg-secondary/50 transition">
                    <f.icon className="h-5 w-5 text-navy-deep mt-0.5 shrink-0" />
                    <div className="font-medium text-sm">{f.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl surface-dark p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative max-w-3xl">
            <p className="chip-dark">Alles verbunden</p>
            <h2 className="mt-5 text-3xl lg:text-5xl font-semibold">Eine Plattform, ein Datenmodell.</h2>
            <p className="mt-5 text-white/70 text-lg">
              App, Mitarbeiter-System und Management-Dashboard teilen denselben digitalen Zwilling des Marktes —
              live, synchron, in Echtzeit.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {["App ↔ Kasse", "Bestand ↔ Regal", "Daten ↔ Entscheidung"].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal" /> {t}
                </div>
              ))}
            </div>
            <Link to="/technologie" className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal text-navy-deep font-semibold px-6 py-3.5">
              Technologie ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
