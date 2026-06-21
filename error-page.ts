import logoUrl from "@/assets/marktmap-logo.png";

export function Logo({ className }: { className?: string }) {
  return <img src={logoUrl} alt="MarktMap Logo" className={className} />;
}
