import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';
import About from './ui/about';
import Skills from '@/app/ui/skills'
import Footer from './ui/footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}

