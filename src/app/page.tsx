import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import StatsSection from "@/sections/StatsSection";
import AchievementsSection from "@/sections/AchievementsSection";
import ContactSection from "@/sections/ContactSection";

/**
 * Main portfolio page — assembles all sections
 */
export default function Home() {
  return (
    <>
      {/* Global UI chrome */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <StatsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
