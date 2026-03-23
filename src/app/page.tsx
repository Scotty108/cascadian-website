import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Industries from "@/components/Industries";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Team />
        <Industries />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
