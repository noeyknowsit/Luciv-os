import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import SelectedWork from "@/components/SelectedWork";
import WhyLuciv from "@/components/WhyLuciv";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhatWeDo />
        <SelectedWork />
        <WhyLuciv />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
