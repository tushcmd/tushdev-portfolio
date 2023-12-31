import { montserrat } from './fonts';

export default async function Skills() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3'>
      <div className='flex items-start flex-col md:max-w-3xl py-10 w-full md:px-5 px-5 justify-between'>
        <h6
          className={`${montserrat.className} text-gray-400 text-2xl md:text-3xl pb-6`}
        >
          02.SKILLS &#x26; TOOLS
        </h6>
        <p
          className={`${montserrat.className} text-gray-400 text-base md:text-2xl`}
        >
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className='px-5 mb-20'>
          <ul className='grid grid-cols-2 gap-1 mt-5 md:grid-cols-4'>
            <li className='flex flex-col items-center gap-2 p-5 font-semibold text-gray-500 bg-gray-200 rounded-md dark:text-gray-400 dark:bg-dark-800 opacity-0 transform scale-0 translate-x-0 translate-y-0'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                role='img'
                viewBox='0 0 24 24'
                className='text-3xl'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                                  <title></title>                 {' '}
                <path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z'></path>
                               {' '}
              </svg>
                              HTML5              {' '}
            </li>
            <li className='flex flex-col items-center gap-2 p-5 font-semibold text-gray-500 bg-gray-200 rounded-md dark:text-gray-400 dark:bg-dark-800 opacity-0 transform scale-0 translate-x-0 translate-y-0'>
                             {' '}
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                role='img'
                viewBox='0 0 24 24'
                className='text-3xl'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                                  <title></title>                 {' '}
                <path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z'></path>
                               {' '}
              </svg>
                              CSS3              {' '}
            </li>
            <li
              className='flex flex-col items-center gap-2 p-5 font-semibold text-gray-500 bg-gray-200 rounded-md dark:text-gray-400 dark:bg-dark-800 opacity-0 transform scale-0 translate-x-0 translate-y-0'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                role='img'
                viewBox='0 0 24 24'
                className='text-3xl'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title></title>
                <path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'></path>
              </svg>
              JavaScript
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
