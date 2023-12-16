import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';


export default async function Footer() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3'>
      <div className='flex items-center flex-col md:max-w-3xl md:flex-row-reverse py-10 w-full md:px-5 px-5 justify-between border-t-0'>
        <div className='flex space-x-4 py-5 flex-row'>
          <a
            href='#'
            className='w-[21px] h-[21px] object-contain cursor-pointer fill-[]'
          >
            <Github />
          </a>
          <a
            href='#'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Linkedin />
          </a>
          <a
            href='#'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Instagram />
          </a>
          <a
            href='#'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Twitter />
          </a>
        </div>
        <div>
          <p className='text-white text-base '>
            <span>&copy;</span> 2023 Muturi David · All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
