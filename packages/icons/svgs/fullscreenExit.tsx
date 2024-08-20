import { palette } from 'utils'

const viewBox = '0 0 24 24'

export function FullscreenExitIcon({
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
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
            </svg>
        </div>
    )
}
