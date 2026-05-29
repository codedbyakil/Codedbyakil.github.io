const experiences = [
  {
    period: "2024 — PRESENT",
    title: "Android & Streaming Experiments",
    company: "GitHub: codedbyakil",
    description:
      "Building open-source Android and IPTV-focused experiments, including Kotlin-based media apps, Android TV layouts, and streaming-related project work that is published directly to GitHub.",
  },
  {
    period: "2023 — 2024",
    title: "Web Design & Frontend Learning",
    company: "Self-taught - HTML, CSS, JavaScript",
    description:
      "Built personal web projects using vanilla HTML, CSS, and JavaScript. Learned responsive layout design, glassmorphism UI patterns, and modern design systems inspired by Linear, Vercel, and Apple.",
  },
  {
    period: "2022 — 2023",
    title: "Started Android Development",
    company: "Self-taught - Kotlin & Android Studio",
    description:
      "Began learning Android development through tutorials, documentation, and hands-on experiments. Explored Kotlin fundamentals, Android Studio setup, and building simple media player apps.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My learning journey as a self-taught developer — projects, skills,
            and milestones.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full md:-translate-x-1/2 mt-2" />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-xs font-medium text-accent">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
