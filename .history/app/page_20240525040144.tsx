import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';
import About from './components/about';
import Skills from '@/app/components/Skills/skills'
import Footer from './ui/footer';
import ScrollHeader from '@/app/ui/nav';
import GetInTouch from './components/getintouch';

export default function Page() {
  return (
    <main>
      <ScrollHeader />
      <Hero />
      <About />
      <Skills />
      <GetInTouch />
      <Footer />
    </main>
  );
}

