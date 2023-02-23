import Image from 'next/image'
import Link from 'next/link'
import { MovieDBLinks } from "@pages/Variables"

export function Movie({movie}: any) {
    return (
        <Link href={"/movie/" + movie.id}>
        <div className="m-10">
            <div className="flex align-middle justify-center">
                <Image src={MovieDBLinks.image_original + movie.poster_path}
                    alt={movie.title + " poster"}
                    width="200" height="200" />
            </div>
            <h1 className="text-white text-center">{movie.title}</h1>
        </div>
        </Link>)
}
