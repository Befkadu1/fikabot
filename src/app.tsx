import { Nav } from '@components/nav';
import { Hero } from '@components/hero';
import { Benefits } from '@components/benefits';
import { Locations } from '@components/locations';
import { Sectors } from '@components/sectors';
import { About } from '@components/about';
import { Faq } from '@components/faq';
import { Cta } from '@components/cta';
import { Footer } from '@components/footer';
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
