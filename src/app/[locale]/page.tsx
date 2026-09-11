import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

/**
 * Main landing page for Salameen Corporation.
 * 
 * Assembles all sections in order. Each section is a client component
 * that uses useTranslations() to fetch localized text. The layout
 * (app/[locale]/layout.tsx) wraps everything with NextIntlClientProvider
 * and sets the correct dir attribute on <html>.
 * 
 * CSS logical properties throughout all components ensure the layout
 * automatically flips when switching between LTR (English) and RTL (Arabic).
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
