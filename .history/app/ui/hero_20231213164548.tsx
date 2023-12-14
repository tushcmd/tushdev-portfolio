import { opensans } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';
import hero from '@/constants/hero';

export default async function Hero() {
  return (
    <section className='relative flex md:flex-row justify-center items-center md:py-16 py-6'>
      <div className='flex items-start flex-col md:max-w-3xl py-3 w-full md:px-5 px-5 justify-between'>
        <p className={`{opensans.className} text-xl text-white`}>{hero.greet}</p>
        <h6
          className={`{opensans.className} text-3xl text-[#D1D5DB] text-bold py-6`}
        >
          {hero.name}
        </h6>
        <p className={`{opensans.className} text-white`}>{hero.paragraph}</p>
      </div>
    </section>
  );
}
