import { pinnedRepositories, siteConfig } from "@/lib/site-config";
import type { GitHubRepo, PortfolioProject } from "@/types/github";

const REVALIDATE_SECONDS = 3600;

function toPortfolioProject(repo: GitHubRepo): PortfolioProject {
  const details = siteConfig.projectDetails[repo.name as keyof typeof siteConfig.projectDetails];

  return {
    id: repo.id,
    name: details?.displayName ?? repo.name,
    description: details?.description ?? repo.description ?? "Open-source software project.",
    url: repo.html_url,
    demoUrl: repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage : null,
    language: repo.language,
    topics: details ? [...details.highlights] : repo.topics,
    stars: repo.stargazers_count,
    updatedAt: repo.pushed_at,
  };
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&sort=pushed`,
      {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      console.error(`GitHub API responded with ${response.status} while listing repositories.`);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    const reposByName = new Map(
      repos.filter((repo) => !repo.fork && !repo.archived).map((repo) => [repo.name, repo]),
    );

    return pinnedRepositories.flatMap((name) => {
      const repo = reposByName.get(name);
      return repo ? [toPortfolioProject(repo)] : [];
    });
  } catch (error) {
    console.error("Failed to fetch repositories from GitHub:", error);
    return [];
  }
}
