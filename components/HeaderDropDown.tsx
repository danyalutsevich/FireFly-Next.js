"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ThemePicker } from './ThemePicker';

export function HeaderDropDown() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <button className='material-symbols-outlined w-full text-5xl' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'expand_less' : 'expand_more'}
            </button>

            {isOpen && (
                <div className='flex align-middle items-center'>
                    <ThemePicker />
                    <Link href={"/ratings"} className="mx-8 text-xl ">Ratings</Link>
                    <Link href={"/search"} className="mx-8 text-xl ">Search</Link>
                </div>
            )}
        </div>
    );
}
