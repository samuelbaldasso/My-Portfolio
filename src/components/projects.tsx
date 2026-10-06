import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { getPortfolioProjects } from "@/lib/github";
import { siteConfig } from "@/lib/site-config";

export async function Projects() {
  const projects = await getPortfolioProjects();

  return (
    <section id="projetos" className="page-shell section-space">
      <div className="section-grid">
        <p className="eyebrow">Selected work / 03</p>
        <div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Pinned on GitHub.</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">Six hands-on case studies in backend architecture, selected directly from my public profile.</p>
            </div>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="button-secondary shrink-0">
              All repositories <ArrowUpRight className="size-4" />
            </a>
          </div>

          {projects.length === 0 ? (
            <p className="mt-10 rounded-2xl border border-border bg-surface p-6 text-sm text-muted-foreground">GitHub is temporarily unavailable. Visit the profile above to see the selected work.</p>
          ) : (
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
