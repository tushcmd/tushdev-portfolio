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
                    I have built a bunch of cool stuff overtime, here is a few I&apos;m proud of:
                </p>
                <div className='px-5 mb-5 w-full'>
                    <div className='py-16 md:grid md:grid-cols-2 flex flex-col gap-8'>
                        {projects.map((project) => (
                            <ProjectsCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-row pt-3 md:py-5 py-10 w-full justify-center space-x-12 md:space-x-20'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='60'
                    height='60'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#142c3e'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-terminal'
                >
                    <polyline points='4 17 10 11 4 5' />
                    <line x1='12' x2='20' y1='19' y2='19' />
                </svg>
                <div className='flex items-center gap-2'>
                    <a
                        href='https://drive.google.com/file/d/1Fc9oeqVXjbyWMcWTrOqMmTOxY1JUjsOX/view?usp=sharing'
                        target='_blank'
                        rel='_noreferrer'
                        className='flex items-center gap-1 md:hover:bg-slate-200 rounded-md px-12 bg-gray-400 text-black font-medium py-[1.08rem]'
                    >
                        View Resume
                    </a>
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