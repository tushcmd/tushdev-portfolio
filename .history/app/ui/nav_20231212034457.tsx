import Image from 'next/image';
import Link from 


export default async function Navbar() {
  return (
    <div className='fixed mx-w-md flex justify-center items-center flex-row'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <Link href="/">
          <a className='text-[#FFF0C1]'>
            tush<span>.</span>
          </a>
        </Link>

        <a href="https://twitter.com/skrr8p" className='connect'>
          <button type='button'>
            <Image
              src='/public/linkedin.svg'
              width='24'
              height='24'
              alt='LinkedIn Icon'
            />
            Connect
          </button>
        </a>
      </nav>
    </div>

  );
}
