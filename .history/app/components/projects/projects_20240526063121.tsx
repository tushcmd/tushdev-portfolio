import Image from "next/image";
import { montserrat } from '../../fonts';
import ProjectsCard from "./projects-card";
import { projects } from '../../../constants/projects';

// Extracted styles
const textStyles = {
  montserrat: `${montserrat.className} text-gray-400`,
};

const textClasses = {
  heading: `${textStyles.montserrat} text-2xl md:text-3xl pb-6`,
  paragraph: `${textStyles.montserrat} text-base md:text-xl`,
};

const containerClasses = 'max-w-3xl mx-auto px-5 md:px-5';

export default function Projects() {
  return (
    <section className='relative flex flex-col justify-center items-center py-20'>
      <div className={containerClasses}>
        <h2 className={textClasses.heading}>Projects</h2>
        <p className={textClasses.paragraph}>
          I have built a bunch of cool stuff overtime, here is a few I&apos;m proud of: You can go through my github profile for more projects and landing pages
        </p>
        <div className='px-5 mb-5 w-full'>
          <div className='py-16 md:grid md:grid-cols-2 flex flex-col gap-8'>
            {projects.map((project) => (
              <ProjectsCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
      <Image src="/dark-thin.png" alt="tush coding" width={300} height={300} />
    </section>
  );
}

{/*
    
    import Image from "next/image";
import { montserrat } from '../../fonts';
import ProjectsCard from "./projects-card";
import { projects } from '../../../constants/projects'


const textStyles = {
    montserrat: `${montserrat.className} text-gray-400`,
};

const textClasses = {
    heading: `${textStyles.montserrat} text-2xl md:text-3xl pb-6`,
    paragraph: `${textStyles.montserrat} text-base md:text-xl`,
};

export default function Projects() {
    return (
        <section className='relative flex flex-col justify-center items-center py-20'>
            <h2 className={textClasses.heading}>Projects</h2>
            <p className={textClasses.paragraph}>
                I have built a bunch of cool stuff overtime, here is a few I&apos;m proud of:
                You can go through my github profile for more projects and landing pages
            </p>
            <div className='px-5 mb-5 w-full'>
                <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {projects.map((project) => {
                        return <ProjectsCard key={project.id} {...project} />;
                    })}
                </div>
            </div>
            <Image
                src="/dark-thin.png"
                alt="tush coding"
                width={300}
                height={300}
            />

        </section>
    );
}

*/}