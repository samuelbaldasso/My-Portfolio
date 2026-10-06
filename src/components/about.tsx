import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="sobre" className="page-shell section-space">
      <div className="section-grid">
        <p className="eyebrow">{siteConfig.about.eyebrow}</p>
        <div>
          <h2 className="section-title max-w-3xl">{siteConfig.about.heading}</h2>
          <div className="mt-8 grid gap-5 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {siteConfig.stack.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
