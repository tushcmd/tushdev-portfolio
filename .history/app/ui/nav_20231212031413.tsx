import Image from 'next/image';


export default async function Navbar() {
  return (
    <div className='fixed mx-w-md flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-2'>
        <a href="/" className='text-[#FFF0C1]'>
          tush.
        </a>

        <a href="#">
          <Image
            src=''
            width='24'
            height='24'
            alt='LinkedIn Icon'
          />
          Connect

        </a>
      </nav>
    </div>

  );
}
