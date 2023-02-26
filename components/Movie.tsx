import Image from 'next/image'
import Link from 'next/link'
import { MovieDBLinks } from "@/Variables"

export function Movie({ movie }: any) {
    return (
        <Link href={"/movie/" + movie.id}>
            <div className={"m-10 antialiased hover:scale-125 transition"}>
                <div className="flex align-middle justify-center">
                    <Image src={MovieDBLinks.image + movie.poster_path}
                        alt={movie.title + " poster"}
                        width="200" height="200"
                        className='rounded m-5' />
                </div>
                <h1 className={" text-center text-xl"}>{movie.title}</h1>
            </div>
        </Link>)
}
