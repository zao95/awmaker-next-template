import { palette } from 'utils'

const viewBox = '0 0 24 24'

export function CloseIcon({
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
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </div>
    )
}
