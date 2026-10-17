import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statement from "@/components/Statement";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <LanguageSelector />
      <Hero />
      <Stats />
      <Features />
      <Statement />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
