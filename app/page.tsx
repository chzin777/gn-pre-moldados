import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import NormasBand from "@/components/sections/NormasBand";
import Products from "@/components/sections/Products";
import Differentials from "@/components/sections/Differentials";
import Obras from "@/components/sections/Obras";
import Depoimentos from "@/components/sections/Depoimentos";
import About from "@/components/sections/About";
import Atuacao from "@/components/sections/Atuacao";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import WhatsAppFab from "@/components/sections/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NormasBand />
        <Products />
        <Differentials />
        <Obras />
        <Depoimentos />
        <About />
        <Atuacao />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
