"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ThemePicker } from './ThemePicker';

export function HeaderDropDown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="material-symbols-outlined mx-3">{isOpen ? 'expand_less' : 'expand_more'}</span>
            </button>

            {isOpen && (
                <div className="absolute z-10 flex flex-col p-3 space-y-4 mt-2 rounded dark:bg-black bg-pink-200 text-center w-fit right-0">
                    <ThemePicker/>
                    <Link href={"/ratings"} className="mx-8 text-xl ">Ratings</Link>
                    <Link href={"/search"} className="mx-8 text-xl ">Search</Link>
                </div>
            )}
        </div>
    );
}
