import classNames from 'classnames'

interface VerticalBarProps {
    className?: string
}
export function HorizontalBar({ className = '' }: VerticalBarProps) {
    return (
        <div
            className={classNames(
                'h-px w-full bg-stone-400 dark:bg-stone-600',
                className,
            )}
        />
    )
}
