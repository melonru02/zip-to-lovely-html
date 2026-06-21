import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="container-page relative py-24 lg:py-32">
        <span className="chip-dark animate-fade-up">{eyebrow}</span>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-white/70 max-w-2xl animate-fade-up">{description}</p>
        )}
      </div>
    </section>
  );
}
