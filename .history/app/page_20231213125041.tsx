import Navbar from '@/app/ui/nav';
import Hero from '@/app/ui/hero'
import styles from './ui/styles';

export default function Page() {
  return (
    <main>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    </main>
  );
}
