import Image from 'next/image';

<Image src='' alt='' />;

export default async function Navbar() {
  return (
    <div className='fixed mx-w-md flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-2'>
        <a 
        href='/'
        className='text-[#FFF0C1]'
        >
          <p>tush.</p>
        </a>
        <a href='#'>
          <button>
          <Image
                src='/public/linkedin.svg'
                width={16}
                height={16}
                alt='Linkedin Icon
                />
                Connect
          </button>              
        </a>        
      </nav>
    </div>
  );
}
