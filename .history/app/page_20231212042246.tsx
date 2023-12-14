import Navbar from '@/app/ui/nav'

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Navbar />
    </div>
    
  );
}

"use client";
import Navbar from '@/app/ui/nav'

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  )
}