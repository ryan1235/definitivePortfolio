import { useContext, createContext, useState, useEffect } from 'react'

const themeContext = createContext()

export default function ThemeContextProvider(props) {
    const [theme, settheme] = useState(localStorage.getItem("theme") !== "light" ? "dark" : "light")

    useEffect(() => {

        const root = window.document.documentElement
        const removetheme = theme == "dark" ? "light" : "dark"
        root.classList.remove(removetheme)
        root.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <themeContext.Provider value={{ theme, settheme }}>
            {props.children}
        </themeContext.Provider>
    )

}

export function usetheme() {
    return (
        useContext(themeContext)
    )
}
