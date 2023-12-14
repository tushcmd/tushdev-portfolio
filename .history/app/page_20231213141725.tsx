import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';
import styles from './ui/styles';

export default function Page() {
  return (
    <main>
      <div className='fixed'>
        <Navbar />
      </div>
      <Hero />
    </main>
  );
}

//<div className='w-full flex items-center'>
//<div className={`${styles.flexCenter} px-[12px] py-[20]`}>
//<div className={`${styles.boxWidth}`}>
//<Navbar />
//</div>
//</div>
//
