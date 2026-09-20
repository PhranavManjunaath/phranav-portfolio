import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechnicalJournal from "@/components/TechnicalJournal";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <ScrollAnimations />
      <Header />
      <Hero />
      <SelectedWork />
      <ArchitectureSection />
      <TechnicalJournal />
      <Footer />
    </main>
  );
}
