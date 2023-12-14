import Image from 'next/image';

<Image src='' alt='' />;

export default async function Navbar() {
  return (
    <div className='fixed mx-w-md flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-2'>
        <a href='/'>
          <p className='text-gray-100'>tush.</p>
        </a>
        <div className='flex flex-col bg-slate-300  '>
        <a href='#'>
          <button className='rounded-md border-0 border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black'>
            <Image
              src='/public/linkedin.svg'
              width={16}
              height={16}
              alt='Linkedin Icon'
              className='text-black'
            />
            <span>Connect</span>
          </button>
        </a>
      </div>
      </nav>
    </div>
  );
}
