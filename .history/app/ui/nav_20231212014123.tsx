import Image from 'next/image';

<Image src='' alt='' />;

export default async function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-40 transition-shadow duration-1000'>
      <nav className='text-left max-w-3xl'>
        <a href='/'>
          <p className='text-gray-100'>tush.</p>
        </a>
      </nav>
      <div className='flex flex-col bg-slate-300 border-0 hover:border-2 rounded-md'>
        <a href='#'>
          <Image
            src='/public/linkedin.svg'
            width={16}
            height={16}
            alt='Linkedin Icon'
            className='text-black'
          />
          <span className='text-2xl text-black'>Connect</span>
        </a>
      </div>
    </div>
  );
}
