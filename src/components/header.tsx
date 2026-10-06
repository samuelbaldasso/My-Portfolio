import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "#sobre", label: "Profile" },
  { href: "#especialidades", label: "Expertise" },
  { href: "#projetos", label: "Work" },
  { href: "#contato", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between">
        <Link href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-[10px] font-black tracking-tight text-background transition-transform group-hover:rotate-6">
            SB
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="button-secondary hidden sm:inline-flex"
          >
            LinkedIn <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
