import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Process />
      <FAQ />
      <Contact />
    </main>
  );
}
