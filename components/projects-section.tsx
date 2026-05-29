import Link from "next/link"
import { ExternalLink, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "Yogi",
    language: "KOTLIN",
    description: "Public Kotlin repository with Android or media-focused source files.",
    tags: ["Android"],
    stars: 0,
    forks: 0,
    updated: "Updated today",
    url: "https://github.com/codedbyakil/Yogi",
  },
  {
    name: "JioTV",
    language: "M3U",
    description: "Public IPTV or streaming project maintained by codedbyakil.",
    tags: ["M3U", "IPTV"],
    stars: 2,
    forks: 3,
    updated: "Updated today",
    url: "https://github.com/codedbyakil/JioTV",
  },
  {
    name: "Codedbyakil.github.io",
    language: "HTML",
    description: "Public portfolio website and web assets maintained by codedbyakil.",
    tags: ["HTML"],
    stars: 0,
    forks: 0,
    updated: "Updated recently",
    url: "https://github.com/codedbyakil/Codedbyakil.github.io",
  },
  {
    name: "Files",
    language: "KOTLIN",
    description: "Public Kotlin repository with Android or media-focused source files.",
    tags: ["Android"],
    stars: 0,
    forks: 0,
    updated: "May 17, 2026",
    url: "https://github.com/codedbyakil/Files",
  },
  {
    name: "ATVL",
    language: "KOTLIN",
    description: "Public Kotlin repository with Android or media-focused source files.",
    tags: ["Kotlin", "Android"],
    stars: 0,
    forks: 0,
    updated: "May 10, 2026",
    url: "https://github.com/codedbyakil/ATVL",
  },
  {
    name: "Tamil-TV",
    language: "M3U",
    description: "Public IPTV or streaming project maintained by codedbyakil.",
    tags: ["M3U", "IPTV"],
    stars: 1,
    forks: 0,
    updated: "May 2, 2026",
    url: "https://github.com/codedbyakil/Tamil-TV",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real repositories from GitHub, refreshed directly from the
            codedbyakil account. Each card reflects repository metadata and
            technologies detected from the live repo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded">
                  {project.language}
                </span>
                <span className="text-xs text-accent">LIVE REPO</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                {project.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {project.forks}
                  </span>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground/70 mt-2">
                {project.updated}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/codedbyakil"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
