import Head from 'next/head'
import Script from 'next/script'
import { MovieDBLinks } from "@/Variables"
import { useRouter } from 'next/router'
import MovieHead from '@components/MovieHead'

export default function Movie(props: any) {

    const { movie } = props

    return (
        <>
            <MovieHead movie={movie} />
            <div className="bg-black text-white h-screen flex-col justify-center">
                <img src={MovieDBLinks.image_original+movie.backdrop_path}/>
                <h1>{movie.title}</h1>
                <section>

                </section>
            </div>
        </>
    )

}

export const getServerSideProps = async (context: any) => {
    const { params } = context

    const data = await fetch(MovieDBLinks.movie(params.id))
    const movie = await data.json()

    return {
        props: { movie },
    }
}


