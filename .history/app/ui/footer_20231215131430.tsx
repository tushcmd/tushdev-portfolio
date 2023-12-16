import { Github } from 'lucide-react';

export default async function Footer() {
    return (
        <section className='relative flex flex-col justify-center items-center pt-3'>
            <div className="flex items-start flex-col md:max-w-3xl md:flex-row-reverse py-10 w-full md:px-5 px-5 justify-between border-t-0">
                <div className='space-x-2 py-5'>
                    <a href="#" className='w-[21px] h-[21px] object-contain cursor-pointer'>
                        <Github />
                    </a>
                    <a href="#" className='w-[21px] h-[21px] object-contain cursor-pointer'>
                        <Github />
                    </a>
                    <a href="#" className='w-[21px] h-[21px] object-contain cursor-pointer'>
                        <Github />
                    </a>
                    <a href="#" className='w-[21px] h-[21px] object-contain cursor-pointer'>
                        <Github />
                    </a>
                    <a href="#" className='w-[21px] h-[21px] object-contain cursor-pointer'>
                        <Github />
                    </a>
                </div>
                <div>
                    <p className='text-white'>
                        <span>&copy;</span> 2023 Muturi David · All Rights Reserved 
                    </p>
                </div>
            </div>

        </section>
    );
} 