import Image from 'next/image';
import { comfortaa } from '@/app/ui/fonts';
import about from '@/constants/about';

export default async function About() {
  return (
    <section className='relative flex flex-col justify-center items-center py-6 overflow-visible'>
      <div className='flex items-start flex-col md:max-w-3xl pb-6 w-full md:px-5 px-5 justify-between'>
        <h6
          className={`${comfortaa.className} text-white font-bold text-4xl hover:border-0 hover:text-[#142c3e]`}
        >
          01.About Me
        </h6>
        <p className='text-2xl text-white'>
          I&apos;m {about.paragraph} <br />
          {about.paragraph2}
        </p>
        <p className='text-2xl text-white font-mono'>
          Here are a few technologies I&apos;ve been working with recently:
        </p>
      </div>
    </section>
  );
}
