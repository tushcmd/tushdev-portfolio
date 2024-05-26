import { montserrat } from '../../fonts';
import { skills } from './SkillsList.js';

// Extracted styles
const textStyles = {
  montserrat: `${montserrat.className} text-gray-400`,
};

const textClasses = {
  heading: `${textStyles.montserrat} text-2xl md:text-3xl pb-6`,
  paragraph: `${textStyles.montserrat} text-base md:text-xl`,
};

const containerClasses = 'max-w-4xl mx-auto px-5 md:px-5';

export default async function Skills() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3 md:py-6'>
      <div className={`flex flex-col items-start justify-between py-10 w-full ${containerClasses}`}>
        <h2 className={textClasses.heading}>Skills &#x26; tools</h2>
        <p className={textClasses.paragraph}>
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className='px-5 mb-5 w-full'>
          <ul className='grid grid-cols-2 gap-1 mt-5 md:grid-cols-4'>
            {skills.map((skill) => {
              const { title, icon } = skill;
              return (
                <li
                  key={skill.id}
                  className='flex flex-col items-center gap-2 p-5 font-semibold rounded-md text-gray-400 bg-[#202020] opacity-1 transform scale-100 translate-x-0 translate-y-0'
                >
                  {icon}
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='justify-center flex w-full py-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='72'
            height='72'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#142c3e'
            strokeWidth='1'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-chevrons-down'
          >
            <path d='m7 6 5 5 5-5' />
            <path d='m7 13 5 5 5-5' />
          </svg>
        </div>
      </div>
    </section>
  );
}

{/*


  import { montserrat } from '../../fonts';
import { skills } from './SkillsList.js';

export default async function Skills() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3 md:py-6'>
      <div className='flex items-start flex-col md:max-w-3xl py-10 w-full md:px-5 px-5 justify-between'>
        <h2
          className={`${montserrat.className} text-gray-400 text-2xl md:text-3xl pb-6`}
        >
          Skills &#x26; tools
        </h2>
        <p
          className={`${montserrat.className} text-gray-400 text-base md:text-xl`}
        >
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className='px-5 mb-5 w-full'>
          <ul className='grid grid-cols-2 gap-1 mt-5 md:grid-cols-4'>
            {skills.map((skill) => {
              const { title, icon } = skill;
              return (
                <li
                  key={skill.id}
                  className='flex flex-col items-center gap-2 p-5 font-semibold rounded-md text-gray-400 bg-[#202020] opacity-1 transform scale-100 translate-x-0 translate-y-0'
                >
                  {icon}
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='justify-center flex w-full py-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='72'
            height='72'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#142c3e'
            stroke-width='1'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-chevrons-down'
          >
            <path d='m7 6 5 5 5-5' />
            <path d='m7 13 5 5 5-5' />
          </svg>
        </div>
      </div>
    </section>
  );
}

*/}