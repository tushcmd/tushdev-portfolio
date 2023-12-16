import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';
import About from './ui/about';
import Skills from '@/app/ui/skills'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

