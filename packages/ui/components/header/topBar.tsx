// TODO
// SNS 로그인 시 받은 프로필 이미지 보여주기

import { HamburgerIcon, LanguageIcon, LogoIcon } from 'icons'
import { palette } from 'utils'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import LanguageModal from './languageModal'
import LoginButton from './loginButton'
import DarkModeButton from './darkModeButton'
import { useRouter } from 'next/router'

interface Menu {
    id: string
    title: string
    href: string
}
interface TopBarProps {
    setIsMenuOpen: (isOpen: boolean) => void
    menus: Menu[]
    showDarkModeButton: boolean
    BASE_URL: string
    WWW_BASE_URL: string
}
function TopBar({
    setIsMenuOpen,
    menus,
    showDarkModeButton,
    BASE_URL,
    WWW_BASE_URL,
}: TopBarProps) {
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false)
    const { t } = useTranslation('common')
    const router = useRouter()

    return (
        <nav
            className="flex w-full max-w-5xl items-center justify-between p-2"
            aria-label="Global"
        >
            <div className="flex">
                <Link href={`${WWW_BASE_URL}/${router.locale}/`}>
                    <LogoIcon
                        color={palette.white}
                        className="h-6 w-6 opacity-100 transition-all duration-150 ease-in hover:opacity-80"
                    />
                </Link>
                <div className="ml-12 hidden md:flex md:gap-x-8">
                    {menus.map((menu) => (
                        <Link
                            key={menu.id}
                            href={menu.href}
                            className="after:ease-bounce text-xs font-medium leading-6 text-white opacity-100 transition-all duration-150 ease-in after:block after:h-px after:w-0 after:bg-white after:opacity-90 after:transition-all after:duration-200 after:content-[''] hover:opacity-80 hover:after:w-full"
                        >
                            {menu.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    type="button"
                    className="relative -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 opacity-100 transition-all duration-150 ease-in hover:opacity-80"
                    title={t('Change language')}
                    onClick={() => setIsLanguageModalOpen(!isLanguageModalOpen)}
                >
                    <LanguageIcon color={palette.white} className="h-5 w-5" />
                </button>
                <DarkModeButton showDarkModeButton={showDarkModeButton} />
                {router.pathname !== '/auth/sign-in' ? (
                    <LoginButton
                        BASE_URL={BASE_URL}
                        WWW_BASE_URL={WWW_BASE_URL}
                    />
                ) : null}
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 opacity-100 transition-all duration-150 ease-in hover:opacity-80 md:hidden"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <HamburgerIcon color={palette.white} className="h-5 w-5" />
                </button>
                <LanguageModal
                    isLanguageModalOpen={isLanguageModalOpen}
                    setIsLanguageModalOpen={setIsLanguageModalOpen}
                />
            </div>
        </nav>
    )
}

export default TopBar
