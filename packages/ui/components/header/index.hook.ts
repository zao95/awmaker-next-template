import { useSetAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import { scrolledAtom } from '../../atoms'

export const useHeaderHook = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const setScrolled = useSetAtom(scrolledAtom)

    const handleScroll = useCallback(
        (e) => {
            const offset = e.target.scrollTop

            if (offset > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        },
        [setScrolled],
    )

    useEffect(() => {
        document
            .getElementById('__next')
            ?.addEventListener('scroll', handleScroll)

        return () =>
            document
                .getElementById('__next')
                ?.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return {
        isMenuOpen,
        setIsMenuOpen,
    }
}
