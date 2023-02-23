"use client";
import { useState, useEffect } from "react";
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
        setMovies([...movies, ...(moreData.results)]);
        setIsLoading(false);
    };

    useEffect(() => {
        window.onscroll = () => {
            const { scrollY, innerHeight } = window;
            const { scrollHeight } = document.body;
            if (scrollY + innerHeight >= scrollHeight) {
                if (!isLoading) {
                    fetchMoreData()
                }
            }
        }
    }, [movies]);

    return (
        <>
            {movies.map((movie: any, index: number) =>
                <Movie movie={movie} key={index + (page * 20)} />
            )}
        </>
    );
}

