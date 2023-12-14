import Image from 'next/image';


function handleClick() {
  window.open('#', '_blank')
  console.log('clicked');
}

export default async function Navbar() {
  return (
    <div className='fixed mx-w-md flex justify-center items-center flex-row'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <a href="/" className='text-[#FFF0C1]'>
          tush.
        </a>

        <a href="/" className='connect'>
          <button type='button' onClick={handleClick} >
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
