import { Libre_Barcode_39_Text } from 'next/font/google'
import Link from 'next/link'
import { ThemePicker } from './ThemePicker'
import { HeaderDropDown } from './HeaderDropDown'
const font = Libre_Barcode_39_Text({ subsets: ['latin'], weight: ["400"] })

export function Header() {

    return (
        <header className={`bg-transparent static top-0 z-50 sm:fixed w-full`}>
            <nav>
                <ul className='flex flex-wrap items-center justify-center space-y-5'>
                    <li className='hidden md:block'>
                        <Link href={"/ratings"} className="m-8 text-xl">Ratings</Link>
                    </li>
                    <li className='w-full md:w-fit'>
                        <Link href={"/"}><h1 className={"text-8xl text-center " + font.className}>FireFly</h1></Link>
                    </li>
                    <li className='hidden md:block'>
                        <Link href={"/search"} className="m-8 text-xl">Search</Link>
                    </li>
                    <li className='hidden md:block'>
                        <ThemePicker />
                    </li>
                    <li className='md:hidden flex flex-wrap'>
                        <HeaderDropDown />
                    </li>
                </ul>
            </nav>
        </header>

    )
}
