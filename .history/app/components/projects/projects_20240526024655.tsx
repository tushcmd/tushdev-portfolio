import Image from "next/image";

export default function Projects() {
    return (
        <section className='relative flex flex-col justify-center items-center'>
            <Image
                src="/dark-thin.png"
                alt="tush coding"
                width={300}
                height={300}
            />

        </section>
    );
}