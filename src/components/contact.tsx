import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contato" className="border-t border-border">
      <div className="page-shell section-space">
        <p className="eyebrow">{siteConfig.contact.eyebrow}</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">{siteConfig.contact.heading}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{siteConfig.contact.description}</p>
          </div>
          <a href={`mailto:${siteConfig.email}`} className="group flex size-40 shrink-0 flex-col justify-between rounded-full bg-accent p-7 text-accent-foreground transition-transform hover:rotate-3 sm:size-48">
            <Mail className="size-6" />
            <span className="flex items-center justify-between text-sm font-semibold">Email me <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
          </a>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="contact-link"><GithubIcon className="size-5" /><span>GitHub</span><ArrowUpRight className="ml-auto size-4" /></a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="contact-link"><LinkedinIcon className="size-5" /><span>LinkedIn</span><ArrowUpRight className="ml-auto size-4" /></a>
          <div className="contact-link"><MapPin className="size-5" /><span>{siteConfig.location}</span></div>
        </div>
      </div>
    </section>
  );
}
