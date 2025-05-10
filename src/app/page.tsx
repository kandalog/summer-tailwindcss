import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LandScape from "@/components/LandScape";
import Navigation from "@/components/Navigation";
import Tour from "@/components/Tour";
import Voice from "@/components/Voice";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <LandScape />
      <Tour />
      <Voice />
      <Contact />
      <Footer />
    </>
  );
}
