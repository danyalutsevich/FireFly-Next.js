"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import * as types from "@/types/Movie";
import { MovieDB } from "@/Links";
import ImageViewer from 'react-simple-image-viewer';

export function Images(props: any) {

    const [images, setImages] = useState(props.images);
    const [movie, setMovie] = useState(props.movie);

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <>
            {
                images?.backdrops?.map((image: types.Image, index: number) => {
                    return (
                        <Image className="rounded-md mr-2 mb-2 h-20 w-auto cursor-pointer transition hover:scale-110"
                            key={index}
                            src={MovieDB.image_original + image.file_path}
                            alt={`Highlight from ${movie?.title}`}
                            onClick={() => { openImageViewer(index) }}
                            width={200}
                            height={200} />
                    )
                })}
            {
                images?.posters?.map((image: types.Image, index: number) => {
                    return (
                        <Image className="rounded-md mr-2 mb-2 h-20 w-auto cursor-pointer transition hover:scale-110"
                            key={index}
                            src={MovieDB.image_original + image.file_path}
                            alt={`Highlight from ${movie?.title}`}
                            onClick={() => { openImageViewer(images?.backdrops.length + index) }}
                            width={200}
                            height={200} />
                    )
                })
            }
            {images.backdrops.length === 0 && images.posters.length === 0 && <h1 className="text-sm">No images found</h1>}
            {isViewerOpen && (
                <ImageViewer
                    src={[
                        ...images?.backdrops?.map((image: types.Image) => MovieDB.image_original + image.file_path),
                        ...images?.posters?.map((image: types.Image) => MovieDB.image_original + image.file_path)]}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </>
    )
}