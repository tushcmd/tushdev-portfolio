import { opensans } from '@/app/ui/fonts'


export default async function Hero() {
    return (
        <div className="relative isolate z-0 flex items-center">
            <div className="flex flex-col items-start md:max-w-3xl justify-items-start">
                <p className={`{opensans.className} text-xl text-white`}>Hi, I am Hero </p>
            </div>
        </div>
    );
}