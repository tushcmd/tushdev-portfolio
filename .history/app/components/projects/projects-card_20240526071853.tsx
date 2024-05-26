import { Github, Eye } from 'lucide-react'
import Image from 'next/image'
import Projects from '../../../constants/projects';

export default function ProjectsCard({ url, img, github, title, text }: Projects) {
    return (
        <article className="rounded-md text-gray-400 bg-[#202020] shadow-md hover:shadow-xl duration-300">

            <Image
                src={img}
                alt={title}
                width={350}
                height={153}
            />

            <div className='px-2'>
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 leading-loose'>{text}</p>
                <div className='mt-4 flex gap-x-4 pb-4 pl-4'>
                    <a href={url} target='_blank'>
                        <Eye className='h-5 w-5 text-gray-400 hover:text-black duration-300' />
                    </a>
                    <a href={github} target='_blank'>
                        <Github className='h-5 w-5 text-gray-400 hover:text-black duration-300' />
                    </a>
                </div>
            </div>
        </article>
    )
}