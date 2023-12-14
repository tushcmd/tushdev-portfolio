import { opensans } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';
import hero from '@/constants/hero';
import { Terminal } from 'lucide-react';

export default async function Hero() {
  return (
    <section className='relative flex flex-col justify-center items-center md:py-16 py-6'>
      <div className='flex items-start flex-col md:max-w-3xl pb-3 w-full md:px-5 px-5 justify-between'>
        <p className={`{opensans.className} text-3xl text-white`}>
          {hero.greet}
        </p>
        <h6
          className={`{opensans.className} text-5xl md:text-8xl text-[#D1D5DB] text-bold pb-3`}
        >
          {hero.name}
        </h6>
        <p className={`{opensans.className} text-4xl md:text-6xl text-white`}>
          {hero.paragraph}
        </p>
      </div>
      <div className='flex flex-row md:max-w-3xl pb-3 w-full md:px-5 px-5 justify-center space-x-6'>
        <div className='h-[24px] w-[24px]'>
          <Terminal />
        </div>
        <div className='flex items-center gap-2'>
          <a
            href='https://www.linkedin.com/in/muturi-david-44b505208/'
            target='_blank'
            rel='_noreferrer'
            className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-5 bg-white text-black font-medium py-[0.45rem]'
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
