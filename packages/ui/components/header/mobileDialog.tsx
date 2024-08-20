import { darkModeAtom } from '../../atoms/darkMode'
import { CloseIcon, LogoIcon } from 'icons'
import { palette } from 'utils'
import classNames from 'classnames'
import { useAtomValue } from 'jotai'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import type { Menu } from '..'
import { Dispatch, SetStateAction } from 'react'

interface MobileDialogProps {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
    menus: Menu[]
    BASE_URL: string
    WWW_BASE_URL: string
}
function MobileDialog({
    isMenuOpen,
    setIsMenuOpen,
    menus,
    BASE_URL,
    WWW_BASE_URL,
}: MobileDialogProps) {
    const darkMode = useAtomValue(darkModeAtom)
    const session = useSession()
    const router = useRouter()
    const { t } = useTranslation('common')

    return (
        <dialog className="md:hidden" open={isMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <div
                className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
                style={{
                    backgroundColor:
                        darkMode === true ? palette.stone[900] : palette.white,
                }}
            >
                <div className="flex items-center justify-between">
                    <div className="-m-1.5 p-1.5">
                        <LogoIcon
                            color={
                                darkMode === true
                                    ? palette.white
                                    : palette.stone[900]
                            }
                            className="h-8 w-8 opacity-100 transition-all duration-150 ease-in hover:opacity-80"
                        />
                    </div>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <CloseIcon
                            color={
                                darkMode === true
                                    ? palette.white
                                    : palette.stone[900]
                            }
                            className="h-6 w-6 opacity-100 transition-all duration-150 ease-in hover:opacity-80"
                        />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {menus.map((menu) => (
                                <Link
                                    key={menu.id}
                                    href={menu.href}
                                    className={classNames(
                                        '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 opacity-100 transition-all duration-150 ease-in hover:opacity-80',
                                        darkMode === true
                                            ? `text-white hover:bg-stone-700`
                                            : `text-stone-900 hover:bg-stone-100`,
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {menu.title}
                                </Link>
                            ))}
                        </div>
                        <div className="py-6">
                            {router.pathname !== '/auth/sign-in' ? (
                                <button
                                    className={classNames(
                                        '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 opacity-100 transition-all duration-150 ease-in hover:opacity-80',
                                        darkMode === true
                                            ? `text-white hover:bg-stone-700`
                                            : `text-stone-900 hover:bg-stone-100`,
                                    )}
                                    onClick={() => {
                                        if (
                                            session.status !== 'authenticated'
                                        ) {
                                            router.push({
                                                pathname: `${WWW_BASE_URL}/auth/sign-in`,
                                                query: {
                                                    callbackUrl: `${BASE_URL}/${router.locale}${router.asPath}`,
                                                },
                                            })
                                        } else {
                                            signOut({
                                                callbackUrl: `${BASE_URL}/${router.locale}${router.asPath}`,
                                            })
                                        }
                                        setIsMenuOpen(false)
                                    }}
                                >
                                    {session.status !== 'authenticated'
                                        ? t('Sign in')
                                        : t('Sign out')}
                                </button>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default MobileDialog
