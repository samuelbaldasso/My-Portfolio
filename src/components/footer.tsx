import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-shell flex flex-col gap-3 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>Backend engineering from {siteConfig.location}</p>
        <Link href="#top" className="font-semibold text-foreground hover:text-accent">Back to top ↑</Link>
      </div>
    </footer>
  );
}
