"use client";
import { useState, useEffect, Suspense, useRef, useCallback } from "react";
import { MovieDB } from "@/Links";
import { Movie } from "./Movie";

export function InfiniteScroll() {

    const [movies, setMovies] = useState([] as any[]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(2);

    // fetch additional movies
    const fetchMoreMovies = async (page: number) => {
        try {
            setIsLoading(true);
            const response = await fetch(MovieDB.popular(page));
            const moreMovies = await response.json();
            setMovies(movies => [...movies, ...(moreMovies.results)]);
            setPage(page => page + 1);
            setIsLoading(false);
        }
        catch (e) {
            console.log(e);
        }
    }

    const observer = new IntersectionObserver((entr) => {
        if (entr[0].isIntersecting) {
            if (!isLoading) {
                fetchMoreMovies(page);
            }
        }
    });

    // get stored movies and page
    useEffect(() => {
        setMovies(JSON.parse(sessionStorage.getItem("movies") || "[]"));
        setPage(JSON.parse(sessionStorage.getItem("page") || "2"));
    }, [])

    // need to unobserve and observe again to get the new page
    // otherwise page wont change
    // other solution would be to set observer on last movie but any way you need to unobserve and observe again
    // and this way is easier and you can set onClick in case observer does not work in some browsers
    useEffect(() => {
        observer.observe(document.getElementById("loadMore") as Element);
        sessionStorage.setItem("movies", JSON.stringify(movies))
        sessionStorage.setItem("page", JSON.stringify(page))

        return () => {
            // try catch needed in case user clicks on a movie and page does not have loadMore element
            try {
                observer.unobserve(document.getElementById("loadMore") as Element);
            }
            catch (e) {
            }
        }
    }, [page]);


    return (<>
        {
            movies.map((movie: any, index: number) =>
                <Movie movie={movie} key={index} />
            )
        }
        <div id="loadMore" className="m-5 p-5 bg-zinc-700 text-center rounded self-center" onClick={() => fetchMoreMovies(page)}>Load More</div>
    </>)
}
