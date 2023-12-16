import { opensans } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';
import { comfortaa } from '@/app/ui/fonts';
import { montserrat } from '@/app/ui/fonts';
import hero from '@/constants/hero';
import { Terminal } from 'lucide-react';

export default async function Hero() {
  return (
    <section className='relative flex flex-col justify-center items-center h-screen md:py-16 py-6 overflow-auto'>
      <div className='flex items-start flex-col md:max-w-3xl py-6 w-full md:px-5 px-5 justify-between'>
        <p className={`${montserrat.className} text-3xl text-white py-6`}>
          Hi there, I&apos;m
        </p>
        <h6
          className={`${comfortaa.className} text-5xl md:text-8xl text-[#D1D5DB] text-bold pb-3`}
        >
          {hero.name}
        </h6>
        <p
          className={`${montserrat.className} text-4xl md:text-6xl text-white`}
        >
          {hero.paragraph}
        </p>
      </div>
      <div className='flex flex-row md:max-w-3xl pt-3 md:py-5 py-10 w-full md:px-5 px-5 justify-center space-x-12 md:space-x-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='60'
          height='60'
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
            className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-12 bg-gray-400 text-black font-medium py-[1.08rem]'
          >
            View Resume
          </a>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='lucide lucide-brain-circuit'
        >
          <path d='M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z' />
          <path d='M16 8V5c0-1.1.9-2 2-2' />
          <path d='M12 13h4' />
          <path d='M12 18h6a2 2 0 0 1 2 2v1' />
          <path d='M12 8h8' />
          <path d='M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' />
          <path d='M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' />
          <path d='M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' />
          <path d='M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' />
        </svg>
      </div>
    </section>
  );
}
