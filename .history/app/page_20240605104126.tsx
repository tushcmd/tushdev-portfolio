
import Hero from '@/app/_components/hero';
import About from './_components/about';
import Skills from '@/app/_components/Skills/skills'

import GetInTouch from './_components/getintouch';

import Projects from './_components/projects/projects';

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

