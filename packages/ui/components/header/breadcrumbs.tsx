import { darkModeAtom } from '../../atoms/darkMode'
import { ChevronRightIcon, HomeIcon } from 'icons'
import { palette } from 'utils'
import classNames from 'classnames'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { useMemo } from 'react'

function Breadcrumbs() {
    const darkMode = useAtomValue(darkModeAtom)
    const pages = useMemo(
        () => [
            { name: 'Projects', href: '#', current: false },
            { name: 'Project Apple', href: '#', current: true },
        ],
        [],
    )
    return (
        <div
            className="xs:flex hidden w-full justify-center border-b border-solid border-stone-300/60 bg-white p-2 dark:border-stone-700 dark:bg-stone-800"
            aria-label="Breadcrumb"
        >
            <ol
                role="list"
                className="flex w-full max-w-5xl items-center space-x-4"
            >
                <li>
                    <div>
                        <a href="#">
                            <HomeIcon
                                color={
                                    darkMode === true
                                        ? palette.stone[100]
                                        : palette.stone[800]
                                }
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <ChevronRightIcon
                                color={
                                    darkMode === true
                                        ? palette.stone[100]
                                        : palette.stone[800]
                                }
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <Link
                                href={page.href}
                                className={classNames(
                                    'ml-4 text-sm font-medium transition-all duration-150 ease-in',
                                    page.current === true
                                        ? darkMode === true
                                            ? 'cursor-default text-gray-100'
                                            : 'cursor-default text-gray-700'
                                        : darkMode === true
                                        ? 'text-gray-300 hover:text-gray-100'
                                        : 'text-gray-500 hover:text-gray-700',
                                )}
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Breadcrumbs
