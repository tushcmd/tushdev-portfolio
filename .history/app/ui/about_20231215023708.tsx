import Image from 'next/image';
import { comfortaa } from '@/app/ui/fonts';
import about from '@/constants/about';

export default async function About() {
  return (
    <section className='relative justify-center h-screen items-center py-6'>
      <div className='md:max-w-3xl'>
        <h6
          className={`${comfortaa.className} text-white text-xl hover:border-0 hover:text-[#142c3e]`}
        >
          01.About Me
        </h6>
        <div>
          <div className='flex flex-col pb-16 items-start'>
            <div>
            <p className='text-base text-white'>
              I&apos;m {about.paragraph} <br />
              {about.paragraph2}
            </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}



//
//
<//div className='md:max-w-3xl'>
 //       <h6
 //         className={`${comfortaa.className} text-white text-bold text-xl hover:border-0 hover:text-[#142c3e]`}
 //       >
 //         01.About Me
 //       </h6>
 //       <div className='flex flex-col pb-16 items-start'>
 //         <p className='text-base text-white'>
 //           I&apos;m {about.paragraph} <br />
 //           {about.paragraph2}
 //         </p>
 //       </div>
 //       <div className='flex flex-col items-center'>
 //           <Image
 //             src='/images/Coder.jpg'
 //             alt='Coder behind a desk'
 //             width={200}
 //             height={200}
 //             layout='responsive'
 //             className='block'
 //           />
 //           <div className='flex items-center gap-2'>
 //             <a
 //               href='mailto:muturidavid854@gmail.com'
 //               target='_blank'
 //               rel='_noreferrer'
 //               className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-5 bg-white text-black font-medium py-[0.45rem]'
 //             >
 //               <svg
 //                 xmlns='http://www.w3.org/2000/svg'
 //                 width='16'
 //                 height='16'
 //                 viewBox='0 0 24 24'
 //                 fill='none'
 //                 stroke='currentColor'
 //                 stroke-width='2'
 //                 stroke-linecap='round'
 //                 stroke-linejoin='round'
 //                 className='lucide lucide-mail'
 //               >
 //                 <rect width='20' height='16' x='2' y='4' rx='2' />
 //                 <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
 //               </svg>
 //               Get In Touch
 //             </a>
 //           </div>
 //         </div>
 //       </>