import { palette } from 'utils'

const viewBox = '0 0 24 24'

export function ChevronRightIcon({
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
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </div>
    )
}
