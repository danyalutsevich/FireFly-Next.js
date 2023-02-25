import { MovieDBLinks } from "../Variables"
import { InfiniteScroll } from '@components/InfiniteScroll'
import { Movie } from '@components/Movie'
import { Header } from '@components/Header'

export default function Home({ popular }: any) {


  return (<>
    <Header />
    <div className="flex align-middle justify-center bg-black">
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
