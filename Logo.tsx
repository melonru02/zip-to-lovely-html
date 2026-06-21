import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";
import { Logo } from "@/components/Logo";


export function SiteFooter() {
  return (
    <footer className="surface-dark mt-24">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="mb-5">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="text-sm text-white/70 leading-relaxed">

            <strong className="text-white">Vision:</strong> MarktMap wird das digitale Betriebssystem
            des Einzelhandels — und verbindet Kunden, Mitarbeiter und Märkte in einem einzigen,
            intelligenten Ökosystem.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-teal mb-4">Navigation</h4>
          <ul className="grid gap-2 text-sm text-white/70">
            <li><Link to="/loesung" className="hover:text-white">Lösung</Link></li>
            <li><Link to="/technologie" className="hover:text-white">Technologie</Link></li>
            <li><Link to="/business" className="hover:text-white">Business Model</Link></li>
            <li><Link to="/roi" className="hover:text-white">ROI</Link></li>
            <li><Link to="/roadmap" className="hover:text-white">Roadmap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-teal mb-4">Kontakt</h4>
          <ul className="grid gap-2 text-sm text-white/70">
            <li><a href="mailto:info@marktmap.de" className="hover:text-white">info@marktmap.de</a></li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" className="p-2 rounded-md border border-white/10 hover:border-teal hover:text-teal text-white/70 transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-md border border-white/10 hover:border-teal hover:text-teal text-white/70 transition" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-md border border-white/10 hover:border-teal hover:text-teal text-white/70 transition" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="mailto:info@marktmap.de" className="p-2 rounded-md border border-white/10 hover:border-teal hover:text-teal text-white/70 transition" aria-label="Mail"><Mail className="h-4 w-4" /></a>
          </div>

        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} MarktMap. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
