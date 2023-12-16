import { comfortaa } from "./fonts";

export default async function About() {
  return (
    <div>
           {' '}
      <h6
        className={`${comfortaa.className} text-white font-bold text-4xl hover:border-0 hover:text-[#142c3e] pb-6`}
      >
                02.Skills      {' '}
      </h6>
           {' '}
      <p className={`${comfortaa.className} text-white text-2xl`}>
                Here are a few technologies I&apos;ve been working with
        recently:      {' '}
      </p>
           {' '}
      <div className='grid-cols-4 pt-6'>
                <div></div>     {' '}
      </div>
         {' '}
    </div>
  );
}
