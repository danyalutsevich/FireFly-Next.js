"use client";
import { useState, useEffect, Suspense } from "react";
import { MovieDBLinks } from "@/Variables";
import { Movie } from "./Movie";

export function InfiniteScroll() {
    const [movies, setMovies] = useState([] as any[]);
    const [page, setPage] = useState(2);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMoreData = async () => {
        // fetch additional movies
        setPage(page + 1);
        setIsLoading(true);
        const response = await fetch(MovieDBLinks.popular(page));
        const moreData = await response.json();
        await setMovies([...movies, ...(moreData.results)]);
        sessionStorage.setItem("movies", JSON.stringify(movies))
        sessionStorage.setItem("page", JSON.stringify(page))
        setIsLoading(false);
    };

    useEffect(() => {
        setPage(JSON.parse(sessionStorage.getItem("page") || "2")); // get cached page
        setMovies(JSON.parse(sessionStorage.getItem("movies") || "[]")); // get chached movies
        setTimeout(() =>window.scrollTo(0, JSON.parse(sessionStorage.getItem("scrollHeight") || "0")), 100) // this is useless when you have a lot of movies 
    }, []);

    useEffect(() => {
        (async () => {
            window.onscroll = async () => {
                const { scrollY, innerHeight } = window;
                const { scrollHeight } = document.body;
                sessionStorage.setItem("scrollHeight", JSON.stringify(scrollHeight))
                if (scrollY + innerHeight >= scrollHeight) {
                    if (!isLoading) {
                        await fetchMoreData()
                        window.scrollTo(0, scrollY + innerHeight - 1); //  need this so page won't scroll back up
                    }
                }
            }
        })()
        window.onclose = () => { sessionStorage.clear() } // when you close the tab clear the cache
    }, [movies]);

    return (
        <>
            {/* Suspense allows you to render and in this case fetch images when you need them instead of all at once. 
                 Images will be loaded as soon as they appear on your screen*/}
            <Suspense >
                {movies.map((movie: any, index: number) =>
                    <Movie movie={movie} key={index + (page * 20)} />
                )}
            </Suspense>
        </>
    );
}

