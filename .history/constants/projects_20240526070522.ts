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
    url: 'https://next-dev-starter.vercel.app/',
    github: 'https://github.com/tushcmd/next-dev-starter',
    title: 'Next Dev Starter',
    text: 'The Ultimate NextJS Starter App for Efficient Development'
  },
  {
    id: nanoid(),
    img: '/car-inventory.png',
    url: 'https://car-inventory-livid.vercel.app/',
    github: 'https://github.com/tushcmd/car-inventory',
    title: 'Car Inventory',
    text: ''
  },
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://razzo-zeta.vercel.app/',
    github: 'https://github.com/john-smilga',
    title: 'raZZo',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/puns-dark.png',
    url: 'https://next-puns-ai.vercel.app/',
    github: 'https://github.com/tushcmd/next-puns-ai',
    title: 'Puns AI',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/tushdev.png',
    url: 'https://tushdev.co/',
    github: 'https://github.com/tushcmd/tushdev-portfolio',
    title: 'Portfolio Website',
    text: 'Lorem ips'
  },
  {
    id: nanoid(),
    img: '/localhost8080.png',
    url: 'https://garage-server-4ypk.onrender.com/',
    github: 'https://github.com/tushcmd/garage-server',
    title: 'first project',
    text: 'This is a RESTful API built with Node.js, Express, and MongoDB for managing car repair data. It allows you to create, read, update, and delete car repair records.'
  },
]

export default Projects;