"use client"
import { useEffect, useState } from "react"

export function ThemePicker() {

    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme) {
            // setTheme(storedTheme)
            document.documentElement.className = storedTheme
            localStorage.setItem("theme", theme)
        }
        else{
            document.documentElement.className = theme
            localStorage.setItem("theme", theme)
        }
    }, [theme])

    return (
        <>
            {
                theme === "light" ?
                    <span className="material-symbols-outlined cursor-pointer" onClick={() => setTheme("dark")}>dark_mode</span> :
                    <span className="material-symbols-outlined cursor-pointer" onClick={() => setTheme("light")}>light_mode</span>
            }
        </>
    )
}