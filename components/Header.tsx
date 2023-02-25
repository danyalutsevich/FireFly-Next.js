import { Libre_Barcode_39_Text } from 'next/font/google'
import Link from 'next/link'
const font = Libre_Barcode_39_Text({ subsets: ['latin'], weight: ["400"] })

export function Header() {

    return (
        <header className={`flex flex-wrap justify-center items-center bg-black text-white w-full`}>
            <Link href={"/ratings"} className="m-8 text-xl">Ratings</Link>
            <h1 className={"text-8xl text-center " + font.className}><Link href={"/"}>FireFly</Link></h1>
            <Link href={"/ratings"} className="m-8 text-xl">Search</Link>

        </header>

    )
}
