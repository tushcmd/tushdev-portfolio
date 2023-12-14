import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero';
import styles from './ui/styles';

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1>This is my Portfolio</h1>
        </div>
      </div>
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
