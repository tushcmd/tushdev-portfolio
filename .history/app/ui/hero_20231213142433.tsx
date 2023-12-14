import { opensans } from '@/app/ui/fonts'


export default async function Hero() {
    return (
        <div className="relative isolate z-0 flex justify-center items-center">
            <div className="flex flex-col items-start md:max-w-3xl">
                <p className={`{opensans.className} text-xl text-white items-start`}>Hi, I am Hero </p>
            </div>
        </div>
    );
}