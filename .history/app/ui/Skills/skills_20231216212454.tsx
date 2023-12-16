import { montserrat } from '../fonts';
import { skills } from './SkillsList.js';

export default async function Skills() {
  return (
    <section className='relative flex flex-col justify-center items-center pt-3'>
      <div className='flex items-start flex-col md:max-w-3xl py-10 w-full md:px-5 px-5 justify-between'>
        <h2
          className={`${montserrat.className} text-gray-400 text-2xl md:text-3xl pb-6`}
        >
          Skills &#x26; tools
        </h2>
        <p
          className={`${montserrat.className} text-gray-400 text-base md:text-2xl`}
        >
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className='px-5 mb-20 '>
          <ul className='grid grid-cols-2 gap-1 mt-5 md:grid-cols-4'>
            {skills.map((skill) => {
              const { title, icon } = skill;
              return (
                <li
                  key={skill.id}
                  className='flex flex-col items-center gap-2 p-5 font-semibold rounded-md text-gray-400 bg-gray-800 opacity-0 transform scale-0 translate-x-0 translate-y-0'
                >
                  {icon}
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
