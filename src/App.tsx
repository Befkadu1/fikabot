import { Nav } from '@components/Nav';
import { Hero } from '@components/Hero';
import { Benefits } from '@components/Benefits';
import { Locations } from '@components/Locations';
import { Sectors } from '@components/Sectors';
import { About } from '@components/About';
import { Faq } from '@components/Faq';
import { Cta } from '@components/Cta';
import { Footer } from '@components/Footer';
import { useReveal } from '@hooks/useReveal';

export function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Locations />
        <Sectors />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
