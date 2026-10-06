import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Services() {
  return (
    <section id="especialidades" className="border-y border-border bg-ink text-ink-foreground">
      <div className="page-shell section-space">
        <div className="section-grid">
          <p className="eyebrow text-accent">Expertise / 02</p>
          <div>
            <h2 className="section-title max-w-3xl">From domain model to running system.</h2>
            <div className="mt-10 border-t border-white/15">
              {siteConfig.services.map((service) => (
                <article key={service.title} className="group grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[3rem_1fr_1.2fr_auto] sm:items-start">
                  <span className="font-mono text-xs text-white/45">{service.number}</span>
                  <h3 className="text-xl font-medium tracking-tight">{service.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-white/60">{service.description}</p>
                  <ArrowUpRight className="hidden size-5 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
