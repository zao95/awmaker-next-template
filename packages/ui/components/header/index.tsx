import MobileDialog from './mobileDialog'
import TopBar from './topBar'
import Container from './container'
import { useHeaderHook } from './index.hook'

export interface Menu {
    id: string
    title: string
    href: string
}

interface HeaderProps {
    exposeDarkMode?: boolean
    className?: string
    menus: Menu[]
    BASE_URL: string
    WWW_BASE_URL: string
}
export function Header({
    exposeDarkMode = true,
    className = 'bg-primary-800',
    menus = [],
    BASE_URL,
    WWW_BASE_URL,
}: HeaderProps): JSX.Element {
    const { isMenuOpen, setIsMenuOpen } = useHeaderHook()

    return (
        <Container className={className}>
            <TopBar
                menus={menus}
                setIsMenuOpen={setIsMenuOpen}
                showDarkModeButton={exposeDarkMode}
                BASE_URL={BASE_URL}
                WWW_BASE_URL={WWW_BASE_URL}
            />
            <MobileDialog
                isMenuOpen={isMenuOpen}
                menus={menus}
                setIsMenuOpen={setIsMenuOpen}
                BASE_URL={BASE_URL}
                WWW_BASE_URL={WWW_BASE_URL}
            />
        </Container>
    )
}
