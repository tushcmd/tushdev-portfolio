
import Hero from '@/app/components/hero';
import About from './components/about';
import Skills from '@/app/components/Skills/skills'

import GetInTouch from './components/getintouch';

import Projects from './components/projects/projects';

export default function Page() {
  return (
    <main>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <GetInTouch />

    </main>
  );
}

