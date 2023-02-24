import Head from 'next/head'
import Script from 'next/script'
import { MovieDBLinks } from "@/Variables"

export default function MovieHead(props: any) {
    const { movie } = props

    const meta = `${movie?.title} смотреть онлайн watch online торрент скачать torrent download`
    const movieSchema = {
        "@context": "http://schema.org",
        "@type": "Movie",
        "name": movie?.title || movie?.name,
        "description": meta + movie?.overview,
        "image": movie?.poster_path ? MovieDBLinks.image_original + movie?.poster_path : "https://fireflyratings.com/default_userpic.png",
        "url": "/movie/" + movie?.id,
        "datePublished": movie?.release_date,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": movie?.vote_average,
            "reviewCount": movie?.vote_count
        },
        "duration": movie?.runtime,
        "genre": movie?.genres?.map((genre: any) => genre.name)
    }

    return (
        <Head>
            <script type='application/ld+json' >
                {JSON.stringify(movieSchema)}
            </script>
            <title>{movie?.title}</title>
            <meta name="description" content={meta + movie?.overview} />
            <link rel="canonical" href={"/movie/" + movie.id} />
            <meta property="og:title" content={movie?.title} /> 
            <meta property="og:description" content={`${meta} ` + movie?.overview} />
            <meta property="og:image" content={movie?.poster_path ? MovieDBLinks.image_original + movie?.poster_path : "https://fireflyratings.com/default_userpic.png"} />
            <meta property="og:url" content={"/movie/" + movie?.id} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Firefly" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={movie?.title} />
            <meta name="twitter:description" content={`${meta} ` + movie?.overview} />
            <meta name="twitter:image" content={movie?.poster_path ? MovieDBLinks.image_original + movie?.poster_path : "https://fireflyratings.com/default_userpic.png"} />
        </Head>
    )
}