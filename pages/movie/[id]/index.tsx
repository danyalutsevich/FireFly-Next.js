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
                    {movie.backdrop_path ? <img className="w-[60vw] rounded-lg" src={MovieDB.image_original + movie.backdrop_path} alt={`Highlight from ${movie?.title}`} /> :
                        <div className="h-28"></div>}
                    <div className="w-full h-full absolute top-0 bg-gradient-to-r dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                    <div className="w-full h-full absolute top-0 bg-gradient-to-l dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                    <div className="w-full h-full absolute top-0 bg-gradient-to-t dark:from-black dark:via-transparent from-pink-200 via-transparent"></div>
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-4 md:mx-[15%] md:items-start mx-7 flex flex-wrap flex-col align-middle items-start">
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
                                <p>{Math.floor(movie?.vote_average * 10) / 10}</p>
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
                    </div>
                    <section className="col-span-3 text-sm">
                        <h1 className="text-3xl my-3">Cast</h1>
                        <div className="flex flex-wrap max-h-96 overflow-y-scroll">
                            {movie?.credits?.cast?.map((cast: types.Cast, index: number) => {
                                return (
                                    <section key={index} className="flex flex-col bg-purple-300 dark:bg-zinc-800 rounded mr-2 mb-2 p-2">
                                        <h1>{cast.name}</h1>
                                        <p className="text-xs">{cast.character}</p>
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
                    <section className="col-span-3 text-sm">
                        <h1 className="text-3xl my-3">Streams</h1>
                        <p className="my-3">Download <a className="underline" href="https://www.utorrent.com/web/" target={"_blank"}>webtorrnet</a> app to watch movie instantly</p>
                        <div className="flex flex-wrap  overflow-y-scroll">
                            {movie?.streams?.length ? movie?.streams?.map((stream: types.Stream, index: number) => {

                                let [title, info] = stream.title.split("\n")
                                return (
                                    <section key={index} className="flex flex-col hover:brightness-75 bg-purple-300 dark:bg-zinc-800 rounded mr-2 mb-2 p-2">
                                        <a href={"magnet:?xt=urn:btih:" + stream.infoHash}>
                                            <img className="h-5 inline m-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsklEQVR4nO3YXUwcVRQH8Au2WmNM2hKp+mAjd5AWFh6EXWkUysfOgNDUpCnB1KBo+FBEhba2USIF2phYGkyND5KYEG1SlTKDJn40rSnhEUxLFGutieHFBLJzz+zuDJVidY8ZZMkq7M7sMrPLYv/Jfdu9d3655565u4Tczv842YXCVoez/GBuoTuXrIfk7eLTc1xlkw5XGea4Sm/kuMpKyXoBORZHUsPyVgAlN+wL3MZV1g+vBAqBzeY6S4tJUkTEdCLhZMq5m/NZ5TWXI8EczjI127n7fpIMICIh6sMYVvpXnrP8EZIsIGIMCzicJa+SZAORJdgf81nu2vF1AyLLYTGBEDGFMbaTMVYvy3IJsRn0oxEopBTn6N7mRjNT+3y+LQBQCQBdjLFvGGNeAMDF8VtCd2hpiBggIobdIVmWHwSAZgAYAICfGGOBEETomGOM7VvzID0AMB4GsTQYY0xRlCeSArSIao6wOzroV1mWs6wHDeNmIuH3VoNCYE1hYOMzMzPbrAf140Yi4ahdoHAwxth5WZbvJbZEwl67QXqmpqY2McYmFkE+VVXvI7ZkCIsXHtRmkN7GGWOj/zlLE36/P81a0AhuICL+YDfI6/U+DADXwjQJi2FDWGc3SJblAgCYMWjpY4iYag1KMt2+X49lekVR9gDArNE7CgB+QcQ7Vg/6HB8zCfooRtABxtifYRDXAeBjRVFaPB7Po4i4gVgSCd81UXZT5Gu8K5bpAeBcsMsBwAUA6FEUpTqa89P59qnanlOn882vKuJVQ5R+5mLM9PT0PR6PJzPWs/Jye8e3+k+ZgqKqQEfXyVeMvyFhmok27iGDVtR59Gk91PlV6I/O/KJKfKOntz3yt4axyETpDZA1AHKYhon4rAlUA4lzuo50nIn0Z07kUtTfOcaoyniCVIE7yqpy5p+ua/RHguUXP4lvneh7avkMw3jERCvfFU+QJnCoD2YC1na0++zyWURsM4HaE2+QGVj1/udmT/T1PRDbmZLwpUSAtCCsYuf8M3VN3lBQ1b6634+f7Kfhb+bGqMFEgbQVYJFBZt9TInrJIN5tE6jTCKQFYdU5c60tbdeP976/3XhmCa+Z2K2DidghLWSoAr3iE7K3mptdwj4TbX1mYVeTAqRHxEKTt/TzVlyX7AcFI+EVM7APWg93Yw2JCYbHSKom0HeiA3HfeXdv3xzLenoXPGAEGmpsGFlYiKcX/OU7oipF/fMaT7+MH0jPMUwlIo6FAw02No7+a1GeU1Q3fVPemxXxby1f9UNbVIF2aALniy8oGAldRMRb4XZoxcV5elPl6UW9NfsF7gWV5/arbtqg8bRb5blLqkBvRYOxFhSMhB2hoM+ami9F+1CrGbE3hUhBTCEintFBnza9OJL8oGAGcNOHLe398QRpPB2ztuRWCNZk36kK3Cdx2SGeXjRqOJYFCUnR3NxrKk/n7Sk3LqAK9DTm528k8c4Nd0aBXh4Wn58Jlc94nCQy+M9toFblucur3J3J2QpaF+utxLb4hEyXKtA+jadX9RIy0QR+VnnuPX1n9JImaz3+8h1pKp9Z7Ocz6zWBHtIvq7MCPewXuOe1Clqi8RnpiX7G2yFrLH8DntS4xQFdvcoAAAAASUVORK5CYII=" />
                                            {title?.replaceAll(".", " ")
                                                .replaceAll("(", " ")
                                                .replaceAll(")", " ")
                                                .replaceAll("[", " ")
                                                .replaceAll("]", " ")
                                                .replaceAll("-", " ")
                                                .replaceAll("_", " ")
                                                .replaceAll("YIFY", " ")
                                                .replaceAll("BrRip", " ")
                                                .replaceAll("HDRip", " ")
                                                .replaceAll("BDRip", " ")
                                                .replaceAll("x265", " ")
                                                .replaceAll("x264", " ")
                                                .replaceAll("X264", " ")
                                                .replaceAll("BluRay", " ")
                                                .replaceAll("Bluray", " ")
                                                .replaceAll("DVDRIP", " ")
                                                .replaceAll("H264", " ")
                                                .replaceAll("10 bit", " ")
                                                .replaceAll("AAC", " ")
                                                .replaceAll("DTS", " ")
                                                .replaceAll("HEVC", " ")
                                                .replaceAll("  ", " ")

                                            }
                                            {info && <p>{info
                                                .replaceAll("👤", "Peers: ")
                                                .replaceAll("💾", "| Size: ")
                                                .replaceAll("⚙️", "| Source: ")
                                            }</p>}
                                        </a>
                                    </section>)
                            }
                        ) : <p className="text-xlZAqa">No streams found</p>}
                        </div>
                    </section>
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
    const streams = await data.json()
    movie.streams = streams.streams

    console.log(JSON.stringify(streams))

    return {
        props: movie
    }
}


