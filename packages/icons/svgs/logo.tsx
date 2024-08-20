import { palette } from 'utils'

const viewBox = '0 0 64 64'

export function LogoIcon({
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
                    d="M37.13,41.75,29.81,15.21H23.54L14.27,48.79h5.65L26.67,20l6.75,28.75h6.27s3.66-16.42,10-18.53C43.5,28.76,38.72,36.73,37.13,41.75Z"
                />
            </svg>
        </div>
    )
}
