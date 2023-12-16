import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';

export const skills = [
  {
    title: 'HTML5',
    icon: <SiHtml5 />,
    id: 0,
  },
  {
    title: 'CSS3',
    icon: <SiCss3 />,
    id: 1,
  },
  {
    title: 'TailwindCSS',
    icon: <SiTailwindcss />,
    id: 2,
  },
  {
    title: 'Javascript',
    icon: <SiJavascript />,
    id: 3,
  },
  {
    title: 'React.JS',
    icon: <SiReact />,
    id: 4,
  },
  {
    title: 'Next.JS',
    icon: <SiNextdotjs />,
    id: 5,
  },
  {
    title: 'React-Native',
    icon: (
      <svg
        height='24'
        viewBox='0 0 24 24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m18.48 7-.67-.21c0-.15.07-.31.11-.46.5-2.46.17-4.44-1-5.09s-2.85 0-4.65 1.59c-.17.15-.35.31-.51.47l-.3-.3c-1.88-1.71-3.76-2.42-4.89-1.76s-1.41 2.49-1 4.82q.06.35.15.69c-.26.07-.52.15-.77.24-2.2.76-3.78 2-3.78 3.22s1.68 2.58 4 3.36l.56.18c-.06.25-.11.49-.16.74-.43 2.29-.1 4.11 1 4.73s3 0 4.81-1.61l.43-.4c.18.18.37.34.56.51 1.77 1.52 3.52 2.13 4.6 1.51s1.47-2.6 1-5c0-.19-.08-.37-.12-.56l.39-.12c2.38-.79 4.1-2.06 4.1-3.37s-1.61-2.44-3.86-3.18zm-5.58-3.53c1.53-1.34 3-1.87 3.62-1.49s1 2 .53 4.14c0 .14-.06.28-.1.42a20.1 20.1 0 0 0 -2.78-.44 19.39 19.39 0 0 0 -1.76-2.19c.16-.16.32-.3.49-.44zm-4.78 8.88c.21.36.43.72.65 1.07-.64-.07-1.28-.18-1.91-.31.18-.6.41-1.21.67-1.84.19.36.38.72.59 1.08zm-1.25-5c.59-.13 1.23-.24 1.88-.32q-.33.51-.63 1c-.21.35-.4.71-.59 1.07a18 18 0 0 1 -.66-1.8zm1.13 2.88c.27-.57.57-1.13.88-1.68s.66-1.08 1-1.6c.62 0 1.25-.07 1.9-.07s1.28 0 1.89.07c.35.52.69 1 1 1.59s.62 1.11.9 1.67c-.28.57-.57 1.13-.89 1.68s-.68 1.11-.99 1.61c-.62.05-1.26.07-1.9.07s-1.28 0-1.89-.06c-.36-.52-.69-1.06-1-1.61s-.62-1.1-.9-1.67zm7.46 2.11c.21-.36.4-.73.6-1.1.26.6.49 1.2.7 1.83-.64.14-1.29.25-1.94.33.22-.35.43-.7.64-1.06zm.59-3.16q-.29-.54-.6-1.08c-.2-.35-.41-.7-.63-1a17.87 17.87 0 0 1 1.9.33 18.27 18.27 0 0 1 -.67 1.75zm-4.26-4.64a15.82 15.82 0 0 1 1.21 1.46q-1.21 0-2.44 0a18.93 18.93 0 0 1 1.23-1.46zm-4.79-2.54c.69-.41 2.23.17 3.85 1.61l.32.29a20.76 20.76 0 0 0 -1.77 2.2 21.83 21.83 0 0 0 -2.77.43c0-.21-.1-.43-.14-.64-.39-2-.14-3.51.51-3.89zm-1 10.89-.51-.16a8.55 8.55 0 0 1 -2.6-1.29 1.8 1.8 0 0 1 -.77-1.23c0-.76 1.3-1.72 3.18-2.38l.7-.23a22 22 0 0 0 1 2.63 22.51 22.51 0 0 0 -1 2.66zm4.82 4.05a7.61 7.61 0 0 1 -2.33 1.45 1.85 1.85 0 0 1 -1.49.06c-.65-.38-.93-1.84-.56-3.8 0-.23.1-.46.16-.69a20.3 20.3 0 0 0 2.8.4 22.34 22.34 0 0 0 1.78 2.21l-.39.37zm1-1a19.46 19.46 0 0 1 -1.25-1.5h1.22s.84 0 1.25 0c-.38.56-.79 1.01-1.22 1.49zm5.39 1.24a1.8 1.8 0 0 1 -.68 1.29c-.65.38-2.05-.11-3.56-1.41l-.53-.47a19.54 19.54 0 0 0 1.74-2.22 19.21 19.21 0 0 0 2.82-.44c0 .17.08.34.11.5a7.42 7.42 0 0 1 .1 2.74zm.79-4.45-.36.11a19.22 19.22 0 0 0 -1.05-2.63 20.55 20.55 0 0 0 1-2.6l.62.19c1.93.66 3.28 1.65 3.28 2.4s-1.49 1.85-3.49 2.53zm-6.18-.62a1.89 1.89 0 1 0 -1.92-1.89 1.89 1.89 0 0 0 1.89 1.89zm-9.54 9.72a.9.9 0 0 0 .61-.9.94.94 0 0 0 -1-1h-1.29v3.16h.49v-1.18h.69l.64 1.21h.58zm-.49-.34h-.7v-1.1h.69a.54.54 0 0 1 .61.55.53.53 0 0 1 -.6.55zm3.39.56v-.16c0-.75-.4-1.21-1.07-1.21a1.11 1.11 0 0 0 -1.11 1.25 1.09 1.09 0 0 0 1.11 1.23 1 1 0 0 0 1-.69h-.41a.58.58 0 0 1 -.57.29.63.63 0 0 1 -.64-.68zm-1.07-1a.57.57 0 0 1 .59.61h-1.21a.61.61 0 0 1 .62-.57zm2.23-.41c-.54 0-.93.27-1 .68h.46c0-.17.23-.27.5-.27s.48.15.48.4v.2h-.64c-.57 0-.89.28-.89.71a.73.73 0 0 0 .8.72.79.79 0 0 0 .71-.38v.34h.45v-1.55c.06-.49-.28-.81-.87-.81zm.46 1.56a.56.56 0 0 1 -.61.52c-.26 0-.45-.13-.45-.34s.15-.32.48-.34h.58zm2.37-.73a.54.54 0 0 0 -.57-.4c-.39 0-.63.3-.63.81s.24.82.63.82a.52.52 0 0 0 .57-.39h.46a.94.94 0 0 1 -1 .81 1.09 1.09 0 0 1 -1.12-1.24 1.09 1.09 0 0 1 1.09-1.2 1 1 0 0 1 1 .83zm1.33-1.37v.6h.5v.4h-.5v1.23c0 .24.1.35.34.35h.16v.39a1 1 0 0 1 -.25 0c-.52 0-.73-.18-.73-.64v-1.29h-.37v-.4h.35v-.6zm1.68 3v-3.1h.44l1.62 2.24v-2.24h.47v3.16h-.44l-1.62-2.25v2.25zm3.91-2.44c-.54 0-.93.27-1 .68h.46c0-.17.23-.27.5-.27s.48.15.48.4v.2h-.64c-.57 0-.89.28-.89.71a.73.73 0 0 0 .8.72.79.79 0 0 0 .71-.38v.34h.49v-1.57c0-.49-.31-.81-.91-.81zm.46 1.56a.56.56 0 0 1 -.61.52c-.26 0-.45-.13-.45-.34s.15-.32.48-.34h.58zm1.45-2.08v.6h.52v.4h-.52v1.23c0 .24.11.35.34.35h.18v.39a1 1 0 0 1 -.26 0c-.52 0-.73-.18-.73-.64v-1.33h-.38v-.4h.38v-.6zm.68-.11a.31.31 0 1 1 .3.28.29.29 0 0 1 -.31-.31zm.07.7h.47v2.39h-.47zm2 2.39h-.5l-.86-2.39h.5l.59 1.88.59-1.88h.5zm3-1.07v-.16a1.06 1.06 0 0 0 -1.07-1.21 1.11 1.11 0 0 0 -1.1 1.25 1.08 1.08 0 0 0 1.1 1.23 1 1 0 0 0 1-.69h-.46a.55.55 0 0 1 -.56.29.63.63 0 0 1 -.64-.68zm-1.07-1a.58.58 0 0 1 .59.61h-1.27a.61.61 0 0 1 .61-.57z'
          fill='#080736'
        />
      </svg>
    ),
    id: 6,
  },
  {
    title: 'Node.JS',
    icon: <SiNodedotjs />,
    id: 7,
  },
  {
    title: 'Express.JS',
    icon: <SiExpress />,
    id: 9,
  },
  {
    title: 'Git',
    icon: <DiGit />,
    id: 8,
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb />,
    id: 10,
  },
  {
    title: 'PostgreSQL',
    icon: <SiPostgresql />,
    id: 11,
  },
];
