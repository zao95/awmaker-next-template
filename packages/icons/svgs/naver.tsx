import { palette } from 'utils'

const viewBox = '0 0 24 24'

export function NaverIcon({
    color = palette.stone[900],
    className = 'w-6 h-6',
    ...attributes
}) {
    return (
        <div className={className}>
            <svg
                width="100%"
                fill={color}
                viewBox={viewBox}
                {...attributes}
                style={{ ...attributes.style, color }}
            >
                <path
                    fill="currentColor"
                    d="m16.4 12.8l-9-12.8h-7.4v24h7.7v-12.8l9 12.8h7.5v-24h-7.8z"
                />
            </svg>
        </div>
    )
}
