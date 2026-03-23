import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Challenge from "@/components/Challenge";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import WhyCascadian from "@/components/WhyCascadian";
import AIOperatingSystem from "@/components/AIOperatingSystem";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Challenge />
        <Process />
        <Capabilities />
        <WhyCascadian />
        <AIOperatingSystem />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
