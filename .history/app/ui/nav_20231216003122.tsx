'use client'

import Link from 'next/link';
import { comfortaa } from '@/app/ui/fonts';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');

      if (header && window.scrollY > 250) {
        header.classList.add('border-b bg-black');
        header.classList.add('fixed');
        header.classList.add('shadow-after-3');
      } else if (header) {
        header.classList.remove('borderClass');
        header.classList.remove('fixed');
        header.classList.remove('shadow-after-3');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <header id='header' className='flex justify-center items-center w-full z-1000 t-0'>
      <div className='flex items-start md:max-w-3xl py-3 w-full md:px-5 px-5 justify-between'>
        <Link
          href='/'
          className={`${comfortaa.className} antialiased font-bold text:2xl md:text-3xl text-logo`}
        >
          david<span>.</span>
        </Link>
        <div className='flex items-center gap-2'>
          <a
            href='https://www.linkedin.com/in/muturi-david-44b505208/'
            target='_blank'
            rel='_noreferrer'
            className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-5 bg-white text-black font-medium py-[0.45rem]'
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
      </div>
    </header>
  );
}
