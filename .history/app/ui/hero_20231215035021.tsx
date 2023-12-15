import { opensans } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';
import { comfortaa } from '@/app/ui/fonts';
import hero from '@/constants/hero';
import { Terminal } from 'lucide-react';

export default async function Hero() {
  return (
    <section className='relative flex flex-col justify-center md:h-screen items-center md:py-16 py-6 overflow-auto'>
      <div className='flex items-start flex-col md:max-w-3xl pb-6 w-full md:px-5 px-5 justify-between'>
        <p className={`${comfortaa.className} text-3xl text-white pb-3`}>
          Hi there, I&apos;m
        </p>
        <h6
          className={`${comfortaa.className} text-5xl md:text-8xl text-[#D1D5DB] text-bold pb-3`}
        >
          {hero.name}
        </h6>
        <p className={`${comfortaa.className} text-4xl md:text-6xl text-white`}>
          {hero.paragraph}
        </p>
      </div>
      <div className='flex flex-row md:max-w-3xl pt-3 md:pt-5 pb-3 w-full md:px-5 px-5 justify-center space-x-12 md:space-x-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='52'
          height='52'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#142c3e'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='lucide lucide-terminal'
        >
          <polyline points='4 17 10 11 4 5' />
          <line x1='12' x2='20' y1='19' y2='19' />
        </svg>
        <div className='flex items-center gap-2'>
          <a
            href='/'
            target='_blank'
            rel='_noreferrer'
            className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-12 bg-white text-black font-medium py-[1.08rem]'
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
