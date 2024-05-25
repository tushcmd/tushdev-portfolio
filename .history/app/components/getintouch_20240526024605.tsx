import { montserrat } from '@/app/fonts';
import Scribble from '/public/ssscribble.svg'

export default async function GetInTouch() {
  return (
    <section
      className='relative flex flex-col justify-center items-center'>
      <div className='flex items-start flex-col md:max-w-3xl pb-10 w-full md:px-5 px-5 justify-between'>
        <div className='flex items-center'>
          <h6
            className={`${montserrat.className} text-gray-400 text-2xl md:text-3xl pb-6 inline-flex`}
          >
            Shoot me a message
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-send ml-10'
              >
                <path d='m22 2-7 20-4-9-9-4Z' />
                <path d='M22 2 11 13' />
              </svg>
            </span>
          </h6>
        </div>
        <p
          className={`${montserrat.className} text-gray-400 text-base md:text-xl`}
        >
          My inbox is always open. If you have an interesting project idea, a
          question or just want to say hi, feel free to <span className='font-bold text-[#142c3e]'>get in touch</span>. I typically respond as
          fast as my next nearest break.
        </p>
        <div className='flex flex-row md:max-w-3xl md:py-8 py-10 w-full md:px-5 px-5 justify-center space-x-12 md:space-x-20'>
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#142c3e'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-message-square-code'
          >
            <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
            <path d='m10 8-2 2 2 2' />
            <path d='m14 8 2 2-2 2' />
          </svg>
        </div>
      </div>
    </section>
  );
}
