import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';

export default function Page() {
  return (
    <main>
      <div className='fixed'>
        <Navbar/>
      </div>
      <Hero />
    </main>
  );
}

