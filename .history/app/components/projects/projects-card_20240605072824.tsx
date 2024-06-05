import { Github, Eye } from 'lucide-react'
import Image from 'next/image'
import Projects from '../../../constants/projects';


export default function ProjectsCard({ url, img, github, title, text }: Projects) {
    return (
        <div className="rounded-md text-gray-400 bg-[#202020] shadow-md hover:shadow-xl duration-300">

            <Image
                src={img}
                alt={title}
                width={1366}
                height={633}
            />
            
            <div className='p-2'>
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 leading-loose'>{text}</p>
                <div className='mt-4 flex gap-x-4 pb-4'>
                    <a href={url} target='_blank' className='rounded-sm border border-[#142c3e]'>
                        <Eye className='h-7 w-7 text-gray-400 hover:text-[#142c3e] duration-300 p-1' />
                    </a>
                    <a href={github} target='_blank'className='rounded-sm border border-[#142c3e]'>
                        <Github className='h-7 w-7 text-gray-400 hover:text-[#142c3e]  duration-300 p-1' />
                    </a>
                </div>
            </div>
            
        </div>
    )
}