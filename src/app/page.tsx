import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeBuilt from "@/components/HowWeBuilt";
import BestSeller from "@/components/BestSeller";
import ProductCards from "@/components/ProductCards";
import QualityCertified from "@/components/QualityCertified";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <HowWeBuilt />
        <BestSeller />
        <ProductCards />
        <QualityCertified />
        <FAQ />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
