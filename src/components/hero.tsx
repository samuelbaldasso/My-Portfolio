import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="hero-orb" aria-hidden />
      <div className="page-shell relative py-14 sm:py-20 lg:py-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_17rem] lg:gap-20">
          <div>
            <p className="eyebrow animate-in">{siteConfig.role} / IBM / Brazil</p>
            <h1 className="animate-in mt-6 max-w-4xl text-[clamp(3.25rem,9vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Reliable systems.
              <span className="block text-accent">Clear thinking.</span>
            </h1>
            <p className="animate-in mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {siteConfig.tagline}
            </p>

            <div className="animate-in mt-9 flex flex-wrap gap-3">
              <Link href="#projetos" className="button-primary">
                Explore selected work <ArrowDownRight className="size-4" />
              </Link>
              <a href="/Samuel_Baldasso_Resume_Java.pdf" download className="button-secondary">
                <Download className="size-4" /> Resume
              </a>
            </div>
          </div>

          <aside className="animate-in relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-2xl shadow-black/5">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.4rem] bg-surface">
              <Image
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width: 1024px) 272px, 272px"
                className="object-cover grayscale transition duration-500 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16 text-white">
                <p className="font-semibold">{siteConfig.name}</p>
                <p className="mt-1 text-xs text-white/70">{siteConfig.specialty}</p>
              </div>
            </div>
            <a
              href={siteConfig.emailHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-between rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </a>
          </aside>
        </div>

        <div className="mt-14 grid border-y border-border sm:grid-cols-3 lg:mt-20">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-4 border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <strong className="text-3xl font-semibold tracking-tight">{stat.value}</strong>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
