import { MovieDBLinks } from "@/Variables"
import { useRouter } from 'next/router'

import MovieHead from '@components/MovieHead'
import * as types from "@/types/Movie"


export default function Movie(movie: types.Movie) {

    return (
        <>
            <MovieHead movie={movie} />
            <div className={"h-fit flex flex-col items-center "}>
                <div className="relative z-10 hidden sm:block ">
                    <img className="w-[60vw] rounded-lg" src={MovieDBLinks.image_original + movie.backdrop_path} alt={`Highlight from ${movie?.title}`} />
                    <div className="w-full h-full absolute top-0 bg-gradient-to-r dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                    <div className="w-full h-full absolute top-0 bg-gradient-to-l dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                    <div className="w-full h-full absolute top-0 bg-gradient-to-t dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-4 md:mx-[20%] mx-7 flex flex-wrap flex-col align-middle items-center">
                    <div className="flex flex-col">
                        <img className="md:max-h-[35rem] max-h-96 p-5 rounded self-center" src={MovieDBLinks.image_original + movie.poster_path} alt={`Highlight from ${movie?.title}`} />
                        <h1 className="text-3xl my-3 md:hidden block">{movie?.title} <p className="text-xs my-3">{movie?.release_date}</p></h1>
                        <div className="space-x-3 flex flex-wrap">
                            {movie?.imdb_id && <a className="underline" href={"https://www.imdb.com/title/" + movie?.imdb_id}>IMDB</a>}
                            {movie?.homepage && <a className="underline" href={movie?.homepage}>Homepage</a>}
                        </div>

                        <section className="flex space-x-3 flex-wrap">
                            <h1>Rating: </h1>
                            <p>{movie?.vote_average}</p>
                        </section>
                        <section className="flex space-x-3 flex-wrap">
                            <h1>Popularity: </h1>
                            <p>{movie?.popularity}</p>
                        </section>
                        <section className="flex space-x-3 flex-wrap">
                            <h1>Duration: </h1>
                            <p>{movie?.runtime} min</p>
                        </section>
                        <section className="flex space-x-3 flex-wrap">
                            <h1>Budget: </h1>
                            <p>${movie?.budget}</p>
                        </section>
                        <section className="flex space-x-3 flex-wrap">
                            <h1>Revenue: </h1>
                            <p>${movie?.revenue}</p>
                        </section>
                    </div>
                    <div className="col-span-2 space-y-2">
                        <h1 className="text-5xl my-3 hidden md:block">{movie?.title} <p className="text-sm my-3 ">{movie?.release_date}</p></h1>
                        <p className="my-3">{movie?.tagline}</p>
                        <p>{movie?.overview}</p>

                        <section className="flex flex-wrap space-x-3">
                            <h1>Genres: </h1>
                            {movie?.genres?.map((genre: types.Genre, index: number) => <p key={index}>{genre.name}</p>)}
                        </section>
                        <section className="flex flex-wrap space-x-3">
                            <h1>Production Companies: </h1>

                            {movie?.production_companies?.map((company: types.ProductionCompany, index: number) => <p key={index}>{company.name}</p>)}
                        </section>
                        <section className="flex flex-wrap space-x-3">
                            <h1>Production Countries: </h1>
                            {movie?.production_countries?.map((country: types.ProductionCountry, index: number) => <p key={index}>{country.name}</p>)}
                        </section>




                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )

}

export const getServerSideProps = async (context: any) => {
    const { params } = context

    let data = await fetch(MovieDBLinks.movie(params.id))
    const movie: types.Movie = await data.json()
    data = await fetch(MovieDBLinks.credits(params.id, "movie"))
    const credits: types.Credits = await data.json()
    movie.credits = credits

    return {
        props: movie
    }
}


