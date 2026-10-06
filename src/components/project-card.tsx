import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { PortfolioProject } from "@/types/github";

export function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <a href={project.url} target="_blank" rel="noreferrer" className="project-card group">
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
        <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-all group-hover:rotate-6 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="mt-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <GithubIcon className="size-3.5" /> {project.language ?? "Open source"}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.topics.map((topic) => <span key={topic} className="tech-pill">{topic}</span>)}
        </div>
      </div>
    </a>
  );
}
