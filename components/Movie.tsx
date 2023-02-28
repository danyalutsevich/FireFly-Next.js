import Image from 'next/image'
import Link from 'next/link'
import { MovieDB } from "@/Links"

export function Movie({ movie }: any) {
    return (
        <article className={"m-10 antialiased hover:scale-125 transition"}>
            <Link href={"/movie/" + movie.id}>
                <div className="flex align-middle justify-center">
                    <Image src={MovieDB.image + movie.poster_path}
                        alt={movie.title + " poster"}
                        width="200" height="200"
                        className='rounded m-5' />
                </div>
                <h1 className={" text-center text-xl"}>{movie.title}</h1>
            </Link>
        </article>
    )
}
