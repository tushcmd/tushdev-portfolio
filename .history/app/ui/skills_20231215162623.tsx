import { comfortaa } from './fonts';

export default async function About() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3'>
      <div className='flex items-start flex-col md:max-w-3xl py-10 w-full md:px-5 px-5 justify-between'>
        <h6
          className={`${comfortaa.className} text-[#142c3e] font-bold text-3xl md:text-4xl pb-6`}
        >
          02.Skills
        </h6>
        <p className={`${comfortaa.className} text-white text-base md:text-2xl`}>
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className='grid-cols-4'>
          <div></div>
        </div>
      </div>
    </section>
  );
}
