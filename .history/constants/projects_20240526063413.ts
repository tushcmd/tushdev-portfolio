import Projects from "@/app/components/projects/projects";
import { nanoid } from "nanoid";

interface Projects {
  id: string;
  url: string;
  github: string;
  img: string;
  title: string;
  text: string;
}

export const projects = [
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/car-inventory.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
]

export default Projects;