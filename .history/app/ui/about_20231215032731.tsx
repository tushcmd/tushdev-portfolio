import Image from 'next/image';
import { comfortaa } from '@/app/ui/fonts';
import about from '@/constants/about';

export default async function About() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3 overflow-visible'>
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
        <div className='flex items-center gap-2'>
          <a
            href='/'
            target='_blank'
            rel='_noreferrer'
            className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-20 bg-white text-black font-medium py-[1.8rem]'
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
