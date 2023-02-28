import Head from 'next/head'
import Script from 'next/script'
import { MovieDB } from "@/Links"
import * as types from "@/types/Movie"

export default function MovieHead(props: any) {
    const { movie } = props as { movie: types.Movie }

    const meta = `${movie?.title} смотреть онлайн watch online торрент скачать torrent download`
    const movieSchema = {
        "@context": "http://schema.org",
        "@type": "Movie",
        "name": movie?.title,
        "description": meta + movie?.overview,
        "image": movie?.poster_path ? MovieDB.image_original + movie?.poster_path : "https://fireflyratings.com/default_userpic.png",
        "url": "/movie/" + movie?.id,
        "datePublished": movie?.release_date,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": Math.floor(movie?.vote_average * 10) / 10,
            "reviewCount": movie?.vote_count
        },
        "duration": movie?.runtime,
        "genre": movie?.genres?.map((genre: any) => genre?.name),
        "director": movie?.credits?.crew?.filter((crew: types.Cast) => crew.job?.toLowerCase() === "director").map((crew: types.Cast) => ({ "@type": "Person", "name": crew?.name })),
        "actor": movie?.credits?.cast?.map((cast: types.Cast) => ({ "@type": "Person", "name": cast?.name })),        
    }

    return (
        <Head>
            <script type='application/ld+json' >
                {JSON.stringify(movieSchema)}
            </script>
            <title>{movie?.title}</title>
            <meta name="description" content={meta + movie?.overview} />
            <link rel="canonical" href={"/movie/" + movie.id} />
            <meta name="robots" content="index, follow" />

            <meta property="og:title" content={movie?.title} />
            <meta property="og:description" content={`${meta} ` + movie?.overview} />
            <meta property="og:image" content={movie?.poster_path ? MovieDB.image_original + movie?.poster_path : "https://fireflyratings.com/default_userpic.png"} />
            <meta property="og:url" content={"/movie/" + movie?.id} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Firefly" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={movie?.title} />
            <meta name="twitter:description" content={`${meta} ` + movie?.overview} />
            <meta name="twitter:image" content={movie?.poster_path ? MovieDB.image_original + movie?.poster_path : "https://fireflyratings.com/default_userpic.png"} />
        </Head>
    )
}