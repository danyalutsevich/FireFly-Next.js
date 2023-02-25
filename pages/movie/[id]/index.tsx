import { MovieDBLinks } from "@/Variables"
import { useRouter } from 'next/router'
import localFont from 'next/font/local'
import MovieHead from '@components/MovieHead'
import * as types from "@/types/Movie"

const font = localFont({ src: '../../../public/fonts/Programme-Regular.woff' ,variable: '--font--programme'})

export default function Movie(movie: types.Movie) {

    return (
        <>
            <MovieHead movie={movie} />
            <div className={"bg-black text-white h-fit flex flex-col items-center px-12  " + font.className}>
                <div className="relative z-10 ">
                    <img className=" w-[60vw]" src={MovieDBLinks.image_original + movie.backdrop_path} alt={`Highlight from ${movie?.title}`} />
                    <div className="w-full h-full absolute top-0 shadow-custom  "></div>
                </div>
                <div className="">

                    <img className="max-h-[50vh] rounded" src={MovieDBLinks.image_original + movie.poster_path} alt={`Highlight from ${movie?.title}`} />
                    <h1>{movie?.title} <p>{movie?.release_date}</p></h1>
                    <p>{movie?.tagline}</p>
                    <p>{movie?.overview}</p>


                    <section className="flex space-y-4 space-x-4">
                        <h1>Rating: </h1>
                        <p>{movie?.vote_average}</p>
                    </section>
                    <section>
                        <h1>Duration: </h1>
                        <p>{movie?.runtime} min</p>
                    </section>
                    <section>
                        <h1>Genres: </h1>
                        {movie?.genres?.map((genre: any) => <p>{genre.name}</p>)}
                    </section>
                    <section>
                        <h1>Production Companies: </h1>
                        <a href={movie?.homepage}>Homepage</a>
                        {movie?.production_companies?.map((company: any) => <p>{company.name}</p>)}
                    </section>
                    <section>
                        <h1>Production Countries: </h1>
                        {movie?.production_countries?.map((country: any) => <p>{country.name}</p>)}
                    </section>
                    <section>
                        <h1>Budget: </h1>
                        <p>{movie?.budget}</p>
                    </section>
                    <section>
                        <h1>Revenue: </h1>
                        <p>{movie?.revenue}</p>
                    </section>
                    <a href={"https://www.imdb.com/title/" + movie?.imdb_id}>IMDB</a>
                    <section>
                        <h1>Popularity: </h1>
                        <p>{movie?.popularity}</p>
                    </section>
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


