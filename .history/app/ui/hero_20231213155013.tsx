import { opensans, inter } from '@/app/ui/fonts'
import hero from '@/constants/hero'

export default async function Hero() {
    return (
        <section className="relative isolate z-0 flex md:flex-row flex-col-reverse justify-center items-center md:py-16 py-6">
            <div className="flex flex-col">
                <p className={`{inter.className} text-xl text-white`}>{hero.greet}</p>
                <h6 className={`{inter.className} text-3xl text-[#D1D5DB] text-bold py-6`}>{hero.name}</h6>
                <p className={}>{hero.paragraph}</p>
            </div>
            <div className=''></div>
        </section>
    );
}