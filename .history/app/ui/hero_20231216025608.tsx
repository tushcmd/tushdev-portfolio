import { opensans } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';
import { comfortaa } from '@/app/ui/fonts';
import { montserrat } from '@/app/ui/fonts';
import hero from '@/constants/hero';
import { Terminal } from 'lucide-react';

export default async function Hero() {
  return (
    <section className='relative flex flex-col justify-center items-center h-screen md:py-16 py-6 overflow-auto'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='75'
          height='75'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#FFFFFF'
          stroke-width='0.9'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='lucide lucide-git-commit-horizontal'
        >
          <circle cx='12' cy='12' r='3' />
          <line x1='3' x2='9' y1='12' y2='12' />
          <line x1='15' x2='21' y1='12' y2='12' />
        </svg>
      </div>
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
      </div>
    </section>
  );
}
