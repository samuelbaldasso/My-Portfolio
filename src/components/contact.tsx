import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contato" className="border-t border-border">
      <div className="page-shell section-space">
        <p className="eyebrow">{siteConfig.contact.eyebrow}</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">{siteConfig.contact.heading}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{siteConfig.contact.description}</p>
          </div>
          <a
            href={siteConfig.emailHref}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-52 flex-col justify-between rounded-[2rem] bg-accent p-7 text-accent-foreground transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20 sm:p-8"
            aria-label={`Send an email to ${siteConfig.email}`}
          >
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent-foreground/10">
                <Mail className="size-5" />
              </span>
              <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-65">Direct contact</span>
              <span className="mt-2 block text-2xl font-semibold tracking-tight">Email me</span>
              <span className="mt-1 block break-all text-xs opacity-70">{siteConfig.email}</span>
            </div>
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
