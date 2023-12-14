import Navbar from '@/app/ui/nav';
import styles from './ui/styles'

export default function Page() {
  return (
    <main>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div></div>
    </main>
  );
}