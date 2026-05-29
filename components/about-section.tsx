import { MapPin, GraduationCap, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Area */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden border border-border">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-accent">A</span>
                </div>
                <p className="text-sm text-muted-foreground">Akil</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Grade 12 student from Kanyakumari, Tamil Nadu, India. I&apos;m
                  self-taught and passionate about Android development, IPTV &
                  streaming systems, and modern web design.
                </p>
                <p>
                  I build real projects — from native Kotlin Android apps and
                  custom ExoPlayer pipelines to responsive web interfaces. I
                  learn by building, and I love pushing the boundaries of what a
                  student can create.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-sm font-medium">Grade 12</span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  TAMIL NADU, INDIA
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent">
                  <Code2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Self-taught</span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  ANDROID & WEB DEVELOPER
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Kanyakumari, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
