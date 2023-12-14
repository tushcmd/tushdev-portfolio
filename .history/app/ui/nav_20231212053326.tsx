import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <div id='__next'>
      <div className='fixed top-0 left-0 right-0 z-40 transition-shadow duration-1000 bg-light-100 dark:bg-dark-900'>
        <nav className='custom-container px-5 flex items-center justify-between py-3'>
          <a className='family-comfortaa' href='/'>
            tush<span>.</span>
          </a>
          <div className='flex items-center gap-2'>
            <a
              href='https://www.linkedin.com/in/yazdun-fadali/'
              target='_blank'
              rel='_noreferrer'
              className='flex items-center gap-1 bg-black md:hover:bg-blue-900 transition-colors dark:md:hover:bg-slate-200 text-white rounded-md px-5 dark:bg-white dark:text-black font-medium py-[0.45rem]'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 448 512'
                className='mt-[0.03rem]'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
              </svg>
              Connect
            </a>
          </div>
        </nav>
      </div>
    </div>

    //<div className='fixed container z-10 p-3 w-full flex justify-center items-center flex-row border-b-0'>
    //  <nav className='max-w-3xl left-0 top-0 flex w-full border-b pb-6 pt-8 backdrop-blur-2xl justify-between text-sm'>
    //    <Link href="/" className='py-1.5 text-[20px] text-[#FFF0C1]'>
    //        tush<span>.</span>
    //    </Link>
    //
    //    <a href="https://twitter.com/skrr8p" className='connect border-gray-300 '>
    //      <button type='button'>
    //        <Image
    //          src='/public/linkedin.svg'
    //          width='24'
    //          height='24'
    //          alt='LinkedIn Icon'
    //        />
    //        Connect
    //      </button>
    //    </a>
    //  </nav>
    //</div>

    // <div className='z-10 max-w-5xl w-full it
    //   <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30ems-center justify-between font-mono text-sm lg:flex'>'>
    //     Get started by editing&nbsp;
    //     <code className='font-mono font-bold'>app/page.tsx</code>
    //   </p>
    //   <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
    //     <a
    //       className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
    //       href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       By{' '}
    //       <Image
    //         src='/vercel.svg'
    //         alt='Vercel Logo'
    //         className='dark:invert'
    //         width={100}
    //         height={24}
    //         priority
    //       />
    //     </a>
    //   </div>
    // </div>
  );
}
