import { Hero } from "@/components/landing/Hero";
import { LogoWall } from "@/components/landing/LogoWall";
import { Stats } from "@/components/landing/Stats";
import { Services } from "@/components/landing/Services";
import { Transactions } from "@/components/landing/Transactions";
import { RollupDeals } from "@/components/landing/RollupDeals";
import { Process } from "@/components/landing/Process";
import { Expertise } from "@/components/landing/Expertise";
import { Industries } from "@/components/landing/Industries";
import { Testimonials } from "@/components/landing/Testimonials";
import { FoundersQuotes } from "@/components/landing/FoundersQuotes";
import { StrategicInsights } from "@/components/landing/StrategicInsights";
import { ContactCTA } from "@/components/landing/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <LogoWall />
      <Stats />
      <Services />
      <Industries />
      <Transactions />
      <RollupDeals />
      <Process />
      <Expertise />
      <Testimonials />
      <FoundersQuotes />
      <StrategicInsights />
      <ContactCTA />
    </div>
  );
}
