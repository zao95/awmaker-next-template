import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { palette } from 'utils'
import { darkModeAtom } from '../atoms/darkMode'
import {
    LogoWithCircleIcon,
    GithubIcon,
    LinkedInIcon,
    EmailIcon,
    KakaoTalkIcon,
} from 'icons'
import { isMobile as _isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import Modal from 'react-responsive-modal'
import { useAtomValue } from 'jotai'

export function Footer() {
    const { t } = useTranslation('common')
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const darkMode = useAtomValue(darkModeAtom)

    useEffect(() => {
        setIsMobile(_isMobile)
    }, [])

    return (
        <footer className="shadow-stone-90 flex w-full flex-col items-center border-t-2 border-t-stone-900 bg-stone-700 text-xs font-light text-stone-200 shadow-md">
            <div className="flex w-full max-w-5xl flex-col items-start justify-between gap-4 px-2 pb-4 pt-8 md:flex-row md:items-end md:px-4">
                <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                    <LogoWithCircleIcon
                        color={palette.white}
                        width="100%"
                        className="w-8 flex-shrink-0 md:w-12"
                    />
                    <p className="max-w-md text-justify">
                        {t(
                            "Welcome to my playground for honing my development and design skills, and a cozy space to share knowledge with you. Remember, this isn't a place for commercial hustle, but a pure spot to enjoy creation and learning. Let's grow together and build a fun and exciting new world!",
                        )}
                    </p>
                </div>
                <div className="flex gap-2">
                    {isMobile === true ? (
                        <div className="flex">
                            <Link
                                href="http://qr.kakao.com/talk/nLAZPJqSR7SM3086NP2l.oaZgMQ-"
                                className="p-1"
                            >
                                <KakaoTalkIcon color={palette.stone[200]} />
                            </Link>
                        </div>
                    ) : null}

                    <Link href="mailto:awmaker@kakao.com" className="p-1">
                        <EmailIcon color={palette.stone[200]} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/awmaker/"
                        className="p-1"
                    >
                        <LinkedInIcon color={palette.stone[200]} />
                    </Link>
                    <Link href="https://github.com/zao95" className="p-1">
                        <GithubIcon color={palette.stone[200]} />
                    </Link>
                </div>
            </div>
            <div className="flex w-full flex-col items-center border-t-[1px] border-solid border-t-stone-500 px-2 py-4 md:px-4">
                <div className="flex w-full max-w-5xl flex-col justify-between gap-4 text-sm font-medium md:flex-row">
                    <div className="flex gap-4 md:gap-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="whitespace-nowrap"
                        >
                            {t('Privacy')}
                        </button>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="whitespace-nowrap"
                        >
                            {t('Terms')}
                        </button>
                    </div>
                    <div className="flex w-full justify-end whitespace-nowrap">
                        <p>©2023 Lee Jeong-woo</p>
                    </div>
                </div>
            </div>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                styles={{
                    modalContainer: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    modal: {
                        backgroundColor:
                            darkMode === true
                                ? palette.stone[700]
                                : palette.white,
                        padding: '16px 16px 16px 16px',
                        minWidth: '120px',
                        borderRadius: '8px',
                    },
                    closeIcon: {
                        display: 'none',
                    },
                }}
            >
                <p>미구현</p>
            </Modal>
        </footer>
    )
}
