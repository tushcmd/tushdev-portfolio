import Image from 'next/image'

<Image src="" alt="" />

export default async function Navbar() {
    return (
    <div className="fixed top-0 left-0 right-0 z-40 transition-shadow duration-1000 bg-black-900">
      <nav className="text-left max-w-3xl"> Hello Worl</nav>
    </div>
    );
  }

<div className='flex flex-row bg-slate-300 border-0 hover:border-2 rounded-md'>
  <a href="#">
    <Image
        src="/"
        width={16}
        height={16}
        alt="Linkedin Icon"
      />
      <span className='text-2xl'>Connect</span>
  </a>
  </div>