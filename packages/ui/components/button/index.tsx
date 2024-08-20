import classNames from 'classnames'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

const classNamesPerSize = {
    xs: 'rounded px-2 py-1 text-xs',
    sm: 'rounded px-2 py-1 text-sm',
    '': 'rounded-md px-2.5 py-1.5 text-sm',
    lg: 'rounded-md px-3 py-2 text-sm',
    xl: 'rounded-md px-3.5 py-2.5 text-sm',
}

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'xs' | 'sm' | '' | 'lg' | 'xl'
    type?: 'submit' | 'reset' | 'button'
    className?: string
    children: ReactNode
}
export function PrimaryButton({
    size = '',
    type = 'button',
    className = '',
    children,
    ...props
}: PrimaryButtonProps) {
    return (
        <button
            type={type}
            className={classNames(
                'bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-stone-600',
                classNamesPerSize[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
}

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'xs' | 'sm' | '' | 'lg' | 'xl'
    children: ReactNode
}
export function SecondaryButton({
    size = '',
    children,
    ...props
}: SecondaryButtonProps) {
    return (
        <button
            type="button"
            className={classNames(
                'bg-white font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-50',
                classNamesPerSize[size],
            )}
            {...props}
        >
            {children}
        </button>
    )
}
