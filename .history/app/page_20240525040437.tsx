import Navbar from './components/shared/nav';
import Hero from '@/app/components/hero';
import About from './components/about';
import Skills from '@/app/components/Skills/skills'

import GetInTouch from './components/getintouch';
import Footer from './components/shared/footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <GetInTouch />
      <Footer />
    </main>
  );
}

