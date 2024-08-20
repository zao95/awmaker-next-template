import classNames from 'classnames'

interface VerticalBarProps {
    className?: string
}
export function VerticalBar({ className = '' }: VerticalBarProps) {
    return (
        <div
            className={classNames(
                'h-full w-px bg-stone-400 dark:bg-stone-600',
                className,
            )}
        />
    )
}
