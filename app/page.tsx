import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { CostOfInactionSection } from "@/components/cost-of-inaction-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ValuePillarsSection } from "@/components/value-pillars-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { IntegrationSection } from "@/components/integration-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { PilotProgramSection } from "@/components/pilot-program-section";
import { Footer } from "@/components/footer";
<!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/245092976.js"></script>
<!-- End of HubSpot Embed Code -->

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <CostOfInactionSection />
        <HowItWorksSection />
        <ValuePillarsSection />
        <TestimonialsSection />
        <IntegrationSection />
        <FAQSection />
        <CTASection />
        <PilotProgramSection />
      </main>
      <Footer />
    </div>
  );
}
