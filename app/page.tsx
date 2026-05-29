import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ConnectSection } from "@/components/connect-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  )
}
