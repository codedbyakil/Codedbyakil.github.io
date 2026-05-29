import { Palette, Layers, Radio, Smartphone } from "lucide-react"

const technologies = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Learning to design clean interfaces, layout systems, and responsive grids. Inspired by modern design tools and minimalist visual aesthetics.",
  },
  {
    icon: Layers,
    title: "Frontend Experiences",
    description:
      "Building responsive web pages with HTML, CSS, JavaScript, and exploring Tailwind CSS. Focused on good layouts, hover effects, and clean visual structure.",
  },
  {
    icon: Radio,
    title: "Streaming Technologies",
    description:
      "Exploring HLS/DASH streaming protocols, M3U8 playlist parsing, and ExoPlayer integration. Working on understanding IPTV systems and live stream playback.",
  },
  {
    icon: Smartphone,
    title: "Android Systems",
    description:
      "Writing native Android apps in Kotlin using Android Studio. Building media player UIs with ExoPlayer and experimenting with Android TV layouts.",
  },
]

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Areas I&apos;m actively learning, building, and exploring as a
            self-taught developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <article
              key={tech.title}
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                  <tech.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
