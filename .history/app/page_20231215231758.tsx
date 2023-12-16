import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';
import About from './ui/about';
import Skills from '@/app/ui/skills'
import Footer from './ui/footer';
import ScrollHeader from '@/app/ui/nav';

export default function Page() {
  return (
    <main>
      <ScrollHeader />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}

