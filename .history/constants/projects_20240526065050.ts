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
    img: '/next-dev-starter.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Next Dev Starter',
    text: 'A startertemplate: The Ultimate NextJS Starter App for Efficient Development'
  },
  {
    id: nanoid(),
    img: '/car-inventory.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Car Inventory',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'raZZo',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/puns-dark.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Puns AI',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/tushdev.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/localhost8080.png',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ips'
  },
]

export default Projects;