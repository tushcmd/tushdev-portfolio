import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { montserrat } from '../../fonts';

// Extracted styles
const textStyles = {
  montserrat: `${montserrat.className} text-gray-400`,
};

const textClasses = {
  text: `${textStyles.montserrat} text-xl pt-3`,
  copyright: `${textStyles.montserrat} text-base`,
};

const containerClasses = 'max-w-3xl mx-auto px-5 md:px-5';

export default async function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <section className='relative flex flex-col justify-center items-center pt-16'>
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center ${containerClasses}`}>
        <p className={textClasses.text}>Made with</p>
        <svg
          height='92.7'
          preserveAspectRatio='xMidYMid'
          viewBox='0 0 512 309'
          width='153.6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m120.81043 80.5613102h96.567895v7.6753487h-87.715838v57.7670991h82.485077v7.675348h-82.485077v63.422619h88.721754v7.675348h-97.573811zm105.21877 0h10.260338l45.467384 63.4226188 46.4733-63.4226188 63.211264-80.5613102-103.850254 150.649363 53.514709 74.12771h-10.662704l-48.686315-67.462275-48.887497 67.462275h-10.461521l53.917074-74.12771zm118.899221 7.6753486v-7.6753486h110.047164v7.6753487h-50.698145v136.5404141h-8.852058v-136.5404141zm-344.928421-7.6753486h11.0650714l152.5808586 228.3226968-63.054372-84.106934-91.33713469-133.3086883-.40236623 133.3086883h-8.85205708zm454.083705 134.2241588c-1.808538 0-3.164943-1.401289-3.164943-3.212184 0-1.810897 1.356405-3.212186 3.164943-3.212186 1.830069 0 3.164943 1.401289 3.164943 3.212186 0 1.810895-1.334874 3.212184-3.164943 3.212184zm8.69821-8.450851h4.736648c.06459 2.565437 1.937721 4.290101 4.693588 4.290101 3.078821 0 4.822769-1.854014 4.822769-5.324899v-21.989457h4.82277v22.011016c0 6.251906-3.617077 9.852139-9.602478 9.852139-5.619388 0-9.473297-3.492442-9.473297-8.8389zm25.38413-.280256h4.779709c.409074 2.953486 3.294124 4.829057 7.449457 4.829057 3.875441 0 6.717429-2.004921 6.717429-4.764383 0-2.371411-1.808538-3.794259-5.920812-4.764383l-4.004619-.970122c-5.619389-1.315057-8.181486-4.031402-8.181486-8.601759 0-5.540482 4.521348-9.226949 11.303367-9.226949 6.308355 0 10.915822 3.686467 11.195715 8.925132h-4.693588c-.452134-2.867252-2.949641-4.65659-6.566718-4.65659-3.810849 0-6.351414 1.832454-6.351414 4.635033 0 2.220503 1.636295 3.492442 5.683978 4.441008l3.423305.840772c6.372946 1.487524 8.999632 4.074517 8.999632 8.752668 0 5.950089-4.607467 9.679672-11.970803 9.679672-6.889671 0-11.518667-3.557118-11.863152-9.119156z' />
        </svg>
      </div>
      <div className={`flex items-center flex-col md:flex-row-reverse pt-5 pb-2 w-full justify-between border-t-0 ${containerClasses}`}>
        <div className='flex space-x-4 py-8 flex-row text-gray-400'>
          <a
            href='https://github.com/tushcmd'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
            target='_blank'
          >
            <Github />
          </a>
          <a
            href='https://www.linkedin.com/in/tushdev/'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
            target='_blank'
          >
            <Linkedin />
          </a>
          <a
            href='mailto:muturidavid854@gmail.com'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
            target='_blank'
          >
            <Mail />
          </a>
          <a
            href='https://twitter.com/0xtush'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
            target='_blank'
          >
            <svg xmlns="http://www.w3.org/2000/svg" role='img' viewBox="0 0 24 24" fill="currentColor" ><title>X / Twitter Icon</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
          </a>
          <a
            href='https://www.instagram.com/6eingtush/'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
            target='_blank'
          >
            <Instagram />
          </a>
        </div>
        <div>
          <strong className={textClasses.copyright}>
            <span>&copy;</span> {currentYear} Muturi David · All Rights Reserved
          </strong>
        </div>
      </div>
    </section>
  );
}

{/*

  import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Mail } from 'lucide-react'
import { montserrat } from '../../fonts';

export default async function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <section className='relative flex flex-col justify-center items-center pt-16'>
      <div className='flex flex-col md:flex-row md:max-w-3xl items-center gap-8 md:gap-16 justify-center'>
        <p className={`${montserrat.className} text-gray-400 text-xl pt-3`}>Made with</p>
        <svg
          height='92.7'
          preserveAspectRatio='xMidYMid'
          viewBox='0 0 512 309'
          width='153.6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m120.81043 80.5613102h96.567895v7.6753487h-87.715838v57.7670991h82.485077v7.675348h-82.485077v63.422619h88.721754v7.675348h-97.573811zm105.21877 0h10.260338l45.467384 63.4226188 46.4733-63.4226188 63.211264-80.5613102-103.850254 150.649363 53.514709 74.12771h-10.662704l-48.686315-67.462275-48.887497 67.462275h-10.461521l53.917074-74.12771zm118.899221 7.6753486v-7.6753486h110.047164v7.6753487h-50.698145v136.5404141h-8.852058v-136.5404141zm-344.928421-7.6753486h11.0650714l152.5808586 228.3226968-63.054372-84.106934-91.33713469-133.3086883-.40236623 133.3086883h-8.85205708zm454.083705 134.2241588c-1.808538 0-3.164943-1.401289-3.164943-3.212184 0-1.810897 1.356405-3.212186 3.164943-3.212186 1.830069 0 3.164943 1.401289 3.164943 3.212186 0 1.810895-1.334874 3.212184-3.164943 3.212184zm8.69821-8.450851h4.736648c.06459 2.565437 1.937721 4.290101 4.693588 4.290101 3.078821 0 4.822769-1.854014 4.822769-5.324899v-21.989457h4.82277v22.011016c0 6.251906-3.617077 9.852139-9.602478 9.852139-5.619388 0-9.473297-3.492442-9.473297-8.8389zm25.38413-.280256h4.779709c.409074 2.953486 3.294124 4.829057 7.449457 4.829057 3.875441 0 6.717429-2.004921 6.717429-4.764383 0-2.371411-1.808538-3.794259-5.920812-4.764383l-4.004619-.970122c-5.619389-1.315057-8.181486-4.031402-8.181486-8.601759 0-5.540482 4.521348-9.226949 11.303367-9.226949 6.308355 0 10.915822 3.686467 11.195715 8.925132h-4.693588c-.452134-2.867252-2.949641-4.65659-6.566718-4.65659-3.810849 0-6.351414 1.832454-6.351414 4.635033 0 2.220503 1.636295 3.492442 5.683978 4.441008l3.423305.840772c6.372946 1.487524 8.999632 4.074517 8.999632 8.752668 0 5.950089-4.607467 9.679672-11.970803 9.679672-6.889671 0-11.518667-3.557118-11.863152-9.119156z' />
        </svg>
      </div>
      <div className='flex items-center flex-col md:max-w-3xl md:flex-row-reverse pt-5 pb-2 w-full md:px-5 px-5 justify-between border-t-0'>
        <div className='flex space-x-4 py-8 flex-row text-gray-400'>
          <a
            href='https://github.com/tushcmd'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Github />
          </a>
          <a
            href='https://www.linkedin.com/in/tushdev/'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Linkedin />
          </a>
          <a
            href='mailto:muturidavid854@gmail.com'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Mail />
          </a>
          <a
            href='https://twitter.com/00tush_'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Twitter />
          </a>
          <a
            href='https://www.instagram.com/6eingtush/'
            className='w-[21px] h-[21px] object-contain cursor-pointer'
          >
            <Instagram />
          </a>
        </div>
        <div>
          <strong className='text-gray-400 text-base '>
            <span>&copy;</span> {currentYear} Muturi David · All Rights Reserved
          </strong>
        </div>
      </div>
    </section>
  );
}

*/}