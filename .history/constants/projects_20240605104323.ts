import Projects from "@/app/_components/projects/projects";
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
    text: 'An interface to record data about car repairs: garage reception'
  },
  {
    id: nanoid(),
    img: '/raZZo.png',
    url: 'https://razzo-zeta.vercel.app/',
    github: '/',
    title: 'raZZo',
    text: 'A next.js sleek futuristic mlti-page car hire landing'
  },
  {
    id: nanoid(),
    img: '/next-puns-ai.png',
    url: 'https://next-puns-ai.vercel.app/',
    github: 'https://github.com/tushcmd/next-puns-ai',
    title: 'Puns AI',
    text: 'Uses next api handlers and openai api to give puns from a topic entered'
  },
  {
    id: nanoid(),
    img: '/tushdev.png',
    url: 'https://tushdev.co/',
    github: 'https://github.com/tushcmd/tushdev-portfolio',
    title: 'Portfolio Website',
    text: ' This is my personal website which features my portfolio.'
  },
  {
    id: nanoid(),
    img: '/localhost8080.png',
    url: 'https://garage-server-4ypk.onrender.com/',
    github: 'https://github.com/tushcmd/garage-server',
    title: 'Garage API',
    text: 'This is a RESTful API built with Node.js, Express, and MongoDB.'
  },
]

export default Projects;