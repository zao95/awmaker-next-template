import { palette } from 'utils'

const viewBox = '0 0 24 24'

export function HamburgerIcon({
    color = palette.stone[900],
    strokeWidth = '1.5',
    className = 'w-6 h-6',
    ...attributes
}) {
    return (
        <div className={className}>
            <svg
                width="100%"
                fill={color}
                strokeWidth={strokeWidth}
                stroke={color}
                viewBox={viewBox}
                {...attributes}
                style={{ ...attributes.style, color }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </div>
    )
}
