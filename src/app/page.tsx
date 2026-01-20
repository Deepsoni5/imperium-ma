import { Hero } from "@/components/landing/Hero";
import { LogoWall } from "@/components/landing/LogoWall";
import { Stats } from "@/components/landing/Stats";
import { Services } from "@/components/landing/Services";
import { OperationalFramework } from "@/components/landing/OperationalFramework";
import { SectoralDeepDives } from "@/components/landing/SectoralDeepDives";
import { Process } from "@/components/landing/Process";
import { Expertise } from "@/components/landing/Expertise";
import { Testimonials } from "@/components/landing/Testimonials";
import { FoundersQuotes } from "@/components/landing/FoundersQuotes";
import { RiskManagement } from "@/components/landing/RiskManagement";
import { ContactCTA } from "@/components/landing/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <LogoWall />
      <Stats />
      <Services />

      <SectoralDeepDives />
      <OperationalFramework />
      <Process />
      <Expertise />
      <RiskManagement />
      <Testimonials />
      <FoundersQuotes />
      <ContactCTA />
    </div>
  );
}
