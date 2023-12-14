import { opensans } from '@/app/ui/fonts'


export default async function Hero() {
    return (
        <div className="relative isolate z-0 flex justify-center items-center pt-10">
            <div className="flex flex-col items-start ">
                <p className={`{opensans.className} text-xl text-white`}>Hi, I am Hero </p>
            </div>
        </div>
    );
}