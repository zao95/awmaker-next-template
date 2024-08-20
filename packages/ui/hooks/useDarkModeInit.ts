import { useAtom } from 'jotai'
import { darkModeAtom } from '../atoms/darkMode'
import { useEffect } from 'react'

export const useDarkModeInit = () => {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    useEffect(() => {
        const darkModeInStorage = localStorage.getItem('darkTheme')
        if (
            darkModeInStorage === 'true' ||
            (darkModeInStorage === undefined &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            localStorage.setItem('darkTheme', 'true')
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('darkTheme', 'false')
            setDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    }, [setDarkMode])

    useEffect(() => {
        if (darkMode === true) {
            localStorage.setItem('darkTheme', 'true')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('darkTheme', 'false')
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
}
