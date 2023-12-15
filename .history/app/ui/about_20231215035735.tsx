import Image from 'next/image';
import { comfortaa } from '@/app/ui/fonts';
import about from '@/constants/about';

export default async function About() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3'>
      <div className='flex items-start flex-col md:max-w-3xl pb-6 w-full md:px-5 px-5 justify-between'>
        <h6
          className={`${comfortaa.className} text-white font-bold text-4xl hover:border-0 hover:text-[#142c3e] pb-6`}
        >
          01.About Me
        </h6>
        <p className={`${comfortaa.className} text-white text-2xl`}>
          I&apos;m {about.paragraph} <br />
          {about.paragraph2}
        </p>
        <p className={`${comfortaa.className} text-white text-2xl`}>
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className='flex flex-row md:max-w-3xl pt-3 md:pt-5 py-6 w-full md:px-5 px-5 justify-center space-x-12 md:space-x-20'>
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
            className='lucide lucide-plug'
          >
            <path d='M12 22v-5' />
            <path d='M9 8V2' />
            <path d='M15 8V2' />
            <path d='M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z' />
          </svg>
          <div className='flex items-center gap-2'>
            <a
              href='/'
              target='_blank'
              rel='_noreferrer'
              className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-12 bg-white text-black font-medium py-[1.08rem]'
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
