import { MovieDB, TorrentIo } from "@/Links"
import { useRouter } from 'next/router'

import MovieHead from '@components/MovieHead'
import * as types from "@/types/Movie"


export default function Movie(movie: types.Movie) {

    return (
        <>
            <MovieHead movie={movie} />
            <div className={"h-fit flex flex-col items-center "}>
                <div className="relative z-10 hidden sm:block ">
                    <img className="w-[60vw] rounded-lg" src={MovieDB.image_original + movie.backdrop_path} alt={`Highlight from ${movie?.title}`} />
                    <div className="w-full h-full absolute top-0 bg-gradient-to-r dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                    <div className="w-full h-full absolute top-0 bg-gradient-to-l dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                    <div className="w-full h-full absolute top-0 bg-gradient-to-t dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-4 md:mx-[15%] md:items-start mx-7 flex flex-wrap flex-col align-middle items-center">
                    <div className="flex flex-col">
                        <img className="w-full p-5 rounded-3xl self-center" src={MovieDB.image_original + movie.poster_path} alt={`Highlight from ${movie?.title}`} />
                        <h1 className="text-3xl my-3 md:hidden items-baseline flex flex-wrap">{movie?.title} <p className="text-xs m-4 whitespace-nowrap">{movie?.release_date}</p></h1>
                        <div className="space-x-3 flex flex-wrap md:ml-5">
                            {movie?.imdb_id && <a className="underline" href={"https://www.imdb.com/title/" + movie?.imdb_id}>IMDB</a>}
                            {movie?.homepage && <a className="underline" href={movie?.homepage}>Homepage</a>}
                        </div>
                        <div className="md:ml-5">
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
                    </div>
                    <div className="col-span-2 space-y-2">
                        <h1 className="text-5xl my-3 hidden md:flex items-baseline align-baseline">{movie?.title} <p className="text-sm m-4 whitespace-nowrap">{movie?.release_date}</p></h1>
                        <p className="my-3">{movie?.tagline}</p>
                        <p>{movie?.overview}</p>
                        <section className="flex flex-wrap space-x-3 align-middle items-center">
                            <h1>Genres: </h1>
                            {movie?.genres?.map((genre: types.Genre, index: number) => <p className=" bg-purple-300 dark:bg-zinc-800 rounded p-1 m-1" key={index}>{genre.name}</p>)}
                        </section>
                        <section className="flex flex-wrap space-x-3 align-middle items-center">
                            <h1>Companies: </h1>
                            {movie?.production_companies?.map((company: types.ProductionCompany, index: number) => <p className=" bg-purple-300 dark:bg-zinc-800 rounded p-1 m-1" key={index}>{company.name}</p>)}
                        </section>
                        <section className="flex flex-wrap space-x-3 align-middle items-center">
                            <h1>Countries: </h1>
                            {movie?.production_countries?.map((country: types.ProductionCountry, index: number) => <p className=" bg-purple-300 dark:bg-zinc-800 rounded p-1 m-1" key={index}>{country.name}</p>)}
                        </section>
                        <section className="col-span-3 text-sm">
                            <h1 className="text-3xl my-3">Cast</h1>
                            <div className="flex flex-wrap max-h-96 overflow-y-scroll">
                                {movie?.credits?.cast?.map((cast: types.Cast, index: number) => {
                                    return (
                                        <section key={index} className="flex flex-col bg-purple-300 dark:bg-zinc-800 rounded mr-2 mb-2 p-2">
                                            <h1>{cast.name}</h1>
                                            <p>{cast.character}</p>
                                        </section>
                                    )
                                })}
                            </div>
                        </section>
                        <section className="col-span-3 text-sm">
                            <h1 className="text-3xl my-3">Crew</h1>
                            <div className="flex flex-wrap max-h-96 overflow-y-scroll">
                                {movie?.credits?.crew?.map((cast: types.Cast, index: number) => {
                                    return (
                                        <section key={index} className="flex flex-col  bg-purple-300 dark:bg-zinc-800 rounded mr-2 mb-2 p-2">
                                            <h1>{cast.name}</h1>
                                            <p>{cast.job}</p>
                                        </section>
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )

}

export const getServerSideProps = async (context: any) => {
    const { params } = context

    let data = await fetch(MovieDB.movie(params.id))
    const movie: types.Movie = await data.json()

    data = await fetch(MovieDB.credits(params.id, "movie"))
    const credits: types.Credits = await data.json()
    movie.credits = credits

    data = await fetch(TorrentIo.byImbdId(movie.imdb_id))
    const streams: types.Stream[] = await data.json()
    movie.streams = streams

    return {
        props: movie
    }
}


