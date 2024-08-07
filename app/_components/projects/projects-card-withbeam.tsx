'use client'

import { Github, Eye } from 'lucide-react'
import Image from 'next/image'
import Projects from '../../../constants/projects';
import { BorderBeam } from '../magicui/border-beam'
import { useState } from 'react';

interface ProjectCardWithBeamProps extends Projects {
  beamSize?: number;
  beamDuration?: number;
  beamDelay?: number;
}

export const ProjectCardWithBeam = ({
  url,
  img,
  github,
  title,
  text,
  beamSize = 250,
  beamDuration = 12,
  beamDelay = 9,
}: ProjectCardWithBeamProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative rounded-md text-gray-400 bg-[#202020] shadow-md hover:shadow-xl duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <BorderBeam size={beamSize} duration={beamDuration} delay={beamDelay} />
      )}
      <Image
        src={img}
        alt={title}
        width={350}
        height={153}
      />
      <div className='p-2'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4 pb-4'>
          <a href={url} target='_blank' className='rounded-sm border border-[#142c3e]'>
            <Eye className='h-7 w-7 text-gray-400 hover:text-[#142c3e] duration-300 p-1' />
          </a>
          <a href={github} target='_blank' className='rounded-sm border border-[#142c3e]'>
            <Github className='h-7 w-7 text-gray-400 hover:text-[#142c3e]  duration-300 p-1' />
          </a>
        </div>
      </div>
    </div>
  )
}