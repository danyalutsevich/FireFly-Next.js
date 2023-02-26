import { MovieDBLinks } from "../Variables"
import { InfiniteScroll } from '@components/InfiniteScroll'
import { Movie } from '@components/Movie'
import Head from 'next/head'

export default function Home({ popular }: any) {

  return (<>

    <Head>
      <title>Firefly</title>
      <meta name="description" content="Firefly is a browser for movies, tv series, actors and crew. You can find your favorite movies or tv series." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex align-middle justify-center mt-20">
      <div id="infiniteScroll" className="w-9/12 grid g-16 grid-cols-fluid align-middle justify-center">
        {popular.results.map((movie: any, index: number) =>
          <Movie movie={movie} key={index} />
        )}
        <InfiniteScroll />
      </div>
    </div>
  </>
  )
}

export const getServerSideProps = async () => {
  const data = await fetch(MovieDBLinks.popular(1))
  const popular = await data.json()

  return {
    props: { popular },
  };
};

// export const getStaticProps = async () => {
//   const data = await fetch(MovieDBLinks.popular(1))
//   const popular = await data.json()

//   return {
//     props: { popular },
//   };
// };
