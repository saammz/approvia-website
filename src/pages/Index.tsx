import HeroSection from "@/components/HeroWithHeaderAndPartners";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import SecuritySection from "@/components/SecuritySection";
import TrySearchSection from "@/components/TrySearchSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroWithHeaderAndPartners from "@/components/HeroWithHeaderAndPartners";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroWithHeaderAndPartners />
      <HowItWorksSection />
      <FeaturesSection />
      <SecuritySection />
      <TrySearchSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
