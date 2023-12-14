import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <div className='fixed container z-10 p-6 max-w-3xl w-full flex justify-center items-center flex-row'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <Link href="/" className='py-1.5text-[#FFF0C1]'>
            tush<span>.</span>
        </Link>
    
        <a href="https://twitter.com/skrr8p" className='connect'>
          <button type='button'>
            <Image
              src='/public/linkedin.svg'
              width='24'
              height='24'
              alt='LinkedIn Icon'
            />
            Connect
          </button>
        </a>
      </nav>
    </div>

   // <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
   //   <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
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
