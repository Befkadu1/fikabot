import { Nav } from '@components/nav';
import { Hero } from '@components/hero';
import { Benefits } from '@components/benefits';
import { Locations } from '@components/locations';
import { Gallery } from '@components/gallery';
import { Sectors } from '@components/sectors';
import { About } from '@components/about';
import { Faq } from '@components/faq';
import { Cta } from '@components/cta';
import { Footer } from '@components/footer';
import { useReveal } from '@hooks/useReveal';
import { useLocale } from './i18n';

export function App() {
  const { locale } = useLocale();
  useReveal(locale);
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
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
