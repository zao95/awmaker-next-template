import classNames from 'classnames'
import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'
import { scrolledAtom } from '../../atoms'

interface ContainerProps {
    className?: string
    children: ReactNode
}
function Container({ className, children }: ContainerProps) {
    const scrolled = useAtomValue(scrolledAtom)

    return (
        <header
            className={classNames(
                'sticky left-0 right-0 top-0 z-50 flex w-full flex-col transition-all duration-150 ease-in',
                className,
                scrolled === true ? 'bg-primary-600/80' : '',
            )}
        >
            <div className="flex justify-center">{children}</div>
        </header>
    )
}

export default Container
