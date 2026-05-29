import Link from "next/link"
import { ArrowRight, Github, Star, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"

const repoStats = {
  repos: 10,
  stars: 3,
}

const recentRepos = [
  {
    name: "Yogi",
    description: "Public Kotlin repository with Android or media-focused source files.",
    updated: "Updated today",
  },
  {
    name: "JioTV",
    description: "Public IPTV or streaming project maintained by codedbyakil.",
    updated: "Updated today",
  },
  {
    name: "Codedbyakil.github.io",
    description: "Public portfolio website and web assets maintained by codedbyakil.",
    updated: "Updated recently",
  },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                AKIL
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="text-accent">ANDROID DEVELOPER</span>
                <span className="text-muted-foreground/50">•</span>
                <span>WEB DESIGNER</span>
                <span className="text-muted-foreground/50">•</span>
                <span>STREAMING SYSTEMS BUILDER</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
              Grade 12 student from Tamil Nadu, India — building Android apps,
              IPTV platforms, and modern web experiences. Self-taught developer
              passionate about streaming technology and clean UI systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#connect">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/codedbyakil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:pl-8">
            <div className="rounded-xl border border-border bg-card p-6 space-y-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded">Overview</span>
                <span className="hover:text-foreground cursor-pointer transition-colors">Android</span>
                <span className="hover:text-foreground cursor-pointer transition-colors">Streaming</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">LIVE REPOS</p>
                  <p className="text-3xl font-bold text-foreground">{repoStats.repos}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">STARS</p>
                  <p className="text-3xl font-bold text-foreground">{repoStats.stars}</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">LATEST ACTIVITY</p>
                <div className="space-y-3">
                  {recentRepos.map((repo) => (
                    <div key={repo.name} className="group">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            {repo.name}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {repo.description}
                          </p>
                        </div>
                        <Link
                          href={`https://github.com/codedbyakil/${repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-accent transition-colors shrink-0 ml-4"
                        >
                          OPEN →
                        </Link>
                      </div>
                      <p className="text-xs text-muted-foreground/70 mt-1">{repo.updated}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
