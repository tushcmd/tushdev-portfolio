import { opensans } from '@/app/ui/fonts'
import hero from '@/constants/hero'

export default async function Hero() {
    return (
        <section className="relative isolate z-0 flex md:flex-row flex-col-reverse justify-center items-center md:py-16 py-6">
            <div className="flex flex-col">
                <p className={`{opensans.className} text-xl text-white`}>{}</p>
                <h6>{hero.greet}</h6>
            </div>
            <div className=''></div>
        </section>
    );
}