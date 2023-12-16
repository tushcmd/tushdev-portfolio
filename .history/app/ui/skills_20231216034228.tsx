import { montserrat } from './fonts';

export default async function About() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3'>
      <div className='flex items-start flex-col md:max-w-3xl py-10 w-full md:px-5 px-5 justify-between'>
        <h6
          className={`${montserrat.className} text-gray-400 text-2xl md:text-3xl pb-6`}
        >
          02.SKILLS &#x26; TOOLS
        </h6>
        <p className={`${montserrat.className} text-gray-400 text-base md:text-2xl`}>
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className='grid-cols-4'>
          <div></div>
        </div>
      </div>
    </section>
  );
}
