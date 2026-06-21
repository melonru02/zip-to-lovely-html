import { createFileRoute } from "@tanstack/react-router";
import { Search, MapPin, Heart, Navigation, Tag, ListChecks, Store } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "App Experience – MarktMap" },
      { name: "description", content: "Die MarktMap App: Filialsuche, interaktive Marktkarte, smarte Produktsuche und optimaler Einkaufspfad." },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  return (
    <>
      <PageHeader
        eyebrow="App Experience"
        title={<>Einkaufen, <span className="text-gradient-teal">neu gedacht.</span></>}
        description="Vom Suchen zum Finden — in Sekunden. Die MarktMap-App führt dich auf dem schnellsten Weg durch jeden Markt."
      />

      <section className="container-page py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="chip">Beispiel-Flow</span>
          <h2 className="mt-5 text-3xl lg:text-5xl font-semibold">Du suchst „Milch".</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Die App zeigt dir Position, beste Route, passende Angebote und ergänzt deine Einkaufsliste —
            in einem einzigen Tap.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              { icon: MapPin, t: "Position im Markt", d: "Gang 4 · Regal B · Augenhöhe" },
              { icon: Navigation, t: "Route", d: "Optimaler Pfad inkl. weiterer Listenartikel" },
              { icon: Tag, t: "Angebote", d: "3 aktuelle Aktionen im selben Gang" },
              { icon: ListChecks, t: "Einkaufsliste", d: "Automatisch nach Route sortiert" },
            ].map((s, i) => (
              <div key={s.t} className="flex items-start gap-4 p-5 rounded-2xl border border-border">
                <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
                  <span className="text-xs font-mono">0{i + 1}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 font-semibold">
                    <s.icon className="h-4 w-4 text-navy-deep" /> {s.t}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PhoneMock />
      </section>

      <section className="container-page pb-24">
        <h2 className="text-3xl lg:text-4xl font-semibold">Alle Funktionen.</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Store, t: "Filialsuche", d: "Standort, Entfernung, Lieblingsmärkte." },
            { icon: MapPin, t: "Interaktive Karte", d: "Abteilungen, Regale, Produktpositionen." },
            { icon: Search, t: "Smarte Suche", d: "Findet jedes Produkt in Sekunden." },
            { icon: Navigation, t: "Routenplanung", d: "Kürzester Weg durch deine gesamte Liste." },
            { icon: Heart, t: "Favoriten", d: "Märkte, Listen und Produkte speichern." },
            { icon: Tag, t: "Angebote", d: "Personalisiert, live, in deiner Filiale." },
            { icon: ListChecks, t: "Einkaufsliste", d: "Automatisch nach Marktlayout sortiert." },
            { icon: MapPin, t: "Live-Position", d: "Indoor-Tracking ohne GPS." },
          ].map((f) => (
            <div key={f.t} className="card-elevated p-6">
              <f.icon className="h-6 w-6 text-navy-deep" />
              <div className="mt-4 font-semibold">{f.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-10 bg-teal/20 blur-3xl rounded-full" />
      <div className="relative rounded-[2.5rem] bg-navy-deep border-[10px] border-navy p-4 shadow-elegant aspect-[9/19]">
        <div className="rounded-[1.8rem] bg-white h-full p-5 flex flex-col gap-4 overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>9:41</span>
            <span>MarktMap</span>
          </div>

          <div className="rounded-xl bg-secondary p-3 flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Milch</span>
          </div>

          <div className="rounded-2xl bg-primary text-primary-foreground p-4">
            <div className="text-[10px] uppercase tracking-widest text-teal">Gefunden</div>
            <div className="mt-1 font-semibold">Bio Vollmilch 1L</div>
            <div className="text-xs text-white/70 mt-1">Gang 4 · Regal B · 24 m entfernt</div>
          </div>

          {/* Map */}
          <div className="relative flex-1 rounded-2xl bg-secondary overflow-hidden border border-border">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 220" preserveAspectRatio="none">
              {[20, 60, 100, 140, 180].map((x) => (
                <rect key={x} x={x} y="30" width="20" height="80" fill="oklch(0.92 0.008 230)" />
              ))}
              {[20, 60, 100, 140, 180].map((x) => (
                <rect key={x} x={x} y="130" width="20" height="60" fill="oklch(0.92 0.008 230)" />
              ))}
              <path d="M 10 200 L 10 70 L 100 70 L 100 30" stroke="oklch(0.24 0.04 225)" strokeWidth="3" fill="none" strokeDasharray="5 4" />
              <circle cx="10" cy="200" r="5" fill="oklch(0.24 0.04 225)" />
              <circle cx="100" cy="30" r="6" fill="oklch(0.86 0.16 200)" className="animate-pulse" />
            </svg>
            <div className="absolute bottom-2 left-2 right-2 text-[10px] text-muted-foreground bg-background/80 backdrop-blur px-2 py-1 rounded">
              Route · 24 m · 2 weitere Artikel auf dem Weg
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <div className="font-semibold">Einkaufsliste</div>
            <div className="text-muted-foreground">3 / 8</div>
          </div>
        </div>
      </div>
    </div>
  );
}
