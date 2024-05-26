import Image from "next/image";
import { montserrat } from '../../fonts';


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
                I have built a bunch of cool stuff overtime, here is a few I&apos;m proud of
                You can go through my github profile for more projects and landing pages

            </p>
            <Image
                src="/dark-thin.png"
                alt="tush coding"
                width={300}
                height={300}
            />

        </section>
    );
}