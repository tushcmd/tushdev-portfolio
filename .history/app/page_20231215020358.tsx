import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';
import About from './ui/about';

export default function Page() {
  return (
    <main className='overflow:scroll'>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

