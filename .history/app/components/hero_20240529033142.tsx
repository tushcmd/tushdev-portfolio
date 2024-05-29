import { comfortaa } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import hero from '@/constants/hero';
import Image from "next/image";

// Extracted styles
const textStyles = {
  montserrat: `${montserrat.className} text-white`,
  comfortaa: `${comfortaa.className} text-[#D1D5DB] md:animated-gradient font-bold`,
};

const heroTextClasses = {
  heading: `${textStyles.montserrat} text-2xl py-6`,
  name: `${textStyles.comfortaa} text-5xl md:text-5xl pb-3`,
  paragraph: `${textStyles.montserrat} text-4xl md:text-4xl`,
};

const containerClasses = 'max-w-3xl mx-auto px-5 md:px-5';

export default function Hero() {
  return (
    <div className={containerClasses}>
      <section className='relative flex flex-col-reverse md:flex-row justify-center items-center h-screen md:py-16 py-6 overflow-auto'>
        <div>
          <div className='flex flex-col items-start justify-between py-6 w-full'>
            <p className={heroTextClasses.heading}>Hi there, I&apos;m</p>
            <h6 className={heroTextClasses.name}>{hero.name}</h6>
            <p className={heroTextClasses.paragraph}>{hero.paragraph}</p>
          </div>
          <div className='flex flex-row pt-3 md:py-5 py-5 w-full justify-center space-x-12 md:space-x-20'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='60'
              height='60'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#142c3e'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-terminal'
            >
              <polyline points='4 17 10 11 4 5' />
              <line x1='12' x2='20' y1='19' y2='19' />
            </svg>
            <div className='flex items-center gap-2'>
              <a
                href='https://drive.google.com/file/d/1Fc9oeqVXjbyWMcWTrOqMmTOxY1JUjsOX/view?usp=sharing'
                target='_blank'
                rel='_noreferrer'
                className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-12 bg-gray-400 text-black font-medium py-[1.08rem]'
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
        <div>
          <Image src="/dark-thin.png" alt="tush coding" width={300} height={300} />
        </div>
      </section>
    </div>
  );
}

{/*

import { comfortaa } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import hero from '@/constants/hero';
import Image from "next/image";

export default async function Hero() {
  return (
    <section className='relative flex flex-col-reverse md:flex-row justify-center items-center h-screen md:py-16 py-6 overflow-auto'>
      <div>
        <div className='flex items-start flex-col max-w-3xl py-6 w-full md:px-5 px-5 justify-between'>
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
              href='https://drive.google.com/file/d/1Fc9oeqVXjbyWMcWTrOqMmTOxY1JUjsOX/view?usp=sharing'
              target='_blank'
              rel='_noreferrer'
              className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-12 bg-gray-400 text-black font-medium py-[1.08rem]'
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/dark-thin.png"
          alt="tush coding"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

*/}