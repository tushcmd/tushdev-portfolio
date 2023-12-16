import { montserrat } from '@/app/ui/fonts'
import about from '@/constants/about';

export default async function About() {
  return (
    <section className='relative flex flex-col justify-center items-center'>
      <div className='flex items-start flex-col md:max-w-3xl pb-10 w-full md:px-5 px-5 justify-between'>
        <h2
          className={`${montserrat.className} text-gray-400 text-2xl md:text-3xl pb-6`}
        >
          About Me
        </h2>
        <p className={`${montserrat.className} text-gray-400 text-base md:text-xl`}>
          I&apos;m {about.paragraph} <br />
          {about.paragraph2}
        </p>
        <i className={`${montserrat.className} text-gray-400 text-base md:text-xl py-6 items-center}`}>ⓘ this dev is subscribed to fireship on YouTube </i>
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
            className='lucide lucide-plug'
          >
            <path d='M12 22v-5' />
            <path d='M9 8V2' />
            <path d='M15 8V2' />
            <path d='M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z' />
          </svg>
          <div className='flex items-center gap-2'>
            <a
              href='mailto:muturidavid854@gmail.com'
              target='_blank'
              rel='_noreferrer'
              className='flex items-center gap-1 md:hover:bg-slate-200 text-xm md:text-base rounded-md px-12 bg-gray-400 text-black font-medium py-[1.08rem]'
            >
              Mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
