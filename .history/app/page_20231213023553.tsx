import Navbar from '@/app/ui/nav';

export default function Page() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='md:py-16 py-6 flex justify-center items-center'>
        <div className='xl:max-w-[768px] w-full'>
          <Navbar />
        </div>
      </div>
    </div>
  );
}
