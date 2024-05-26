import { Github, Eye } from 'lucide-react'

export default function ProjectsCard({ url, img, github, title, text }) {
    return (
        <article className="rounded-md text-gray-400 bg-[#202020] shadow-md hover:shadow-xl duration-300">
            <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <Eye className='h-8 w-8 text-slate-500 hover:text-black duration-300 border rounded-sm' />
          </a>
          <a href={github}>
            <Github className='h-8 w-8 text-slate-500 hover:text-black duration-300 border rounded-sm' />
          </a>
        </div>
        </article>
    )
}