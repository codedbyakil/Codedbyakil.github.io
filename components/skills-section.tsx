import { Code2, Layers, Terminal, Video, Radio, Palette, Server, GitBranch } from "lucide-react"

const skills = [
  { icon: Code2, name: "Kotlin", level: "LEARNING" },
  { icon: Layers, name: "React / Next.js", level: "EXPLORING" },
  { icon: Terminal, name: "HTML / CSS / JS", level: "COMFORTABLE" },
  { icon: Video, name: "FFmpeg", level: "LEARNING" },
  { icon: Radio, name: "HLS / DASH", level: "EXPLORING" },
  { icon: Palette, name: "UI Design", level: "IMPROVING" },
  { icon: Server, name: "Node.js", level: "EXPLORING" },
  { icon: GitBranch, name: "Git & GitHub", level: "COMFORTABLE" },
]

const levelColors: Record<string, string> = {
  LEARNING: "text-amber-500",
  EXPLORING: "text-blue-500",
  COMFORTABLE: "text-accent",
  IMPROVING: "text-emerald-500",
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Languages, frameworks, and tools I actively learn and build with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                <skill.icon className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-foreground">
                  {skill.name}
                </p>
                <p className={`text-xs ${levelColors[skill.level] || "text-muted-foreground"}`}>
                  {skill.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
