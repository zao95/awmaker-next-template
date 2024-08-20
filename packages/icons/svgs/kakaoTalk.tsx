import { palette } from 'utils'

const viewBox = '0 0 6.554 6.554'

export function KakaoTalkIcon({
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
                    d="M6.554 6.042a.51.51 0 0 1-.512.512H.512A.51.51 0 0 1 0 6.042V.512A.51.51 0 0 1 .512 0h5.53a.51.51 0 0 1 .512.512z"
                    fill="transparent"
                />
                <path d="M3.277.922c-1.47 0-2.662.94-2.662 2.1 0 .75.498 1.407 1.248 1.78l-.27.965s-.005.045.024.062.064.004.064.004c.084-.012.97-.635 1.125-.743.153.022.312.033.473.033 1.47 0 2.662-.94 2.662-2.1S4.747.922 3.277.922z" />
                <path
                    d="M1.805 3.754c-.085 0-.154-.066-.154-.147v-.913h-.24c-.083 0-.15-.067-.15-.15s.068-.15.15-.15h.787c.083 0 .15.067.15.15s-.068.15-.15.15h-.24v.913c0 .08-.07.147-.154.147zm1.347-.002c-.064 0-.113-.026-.128-.068l-.076-.2H2.48l-.076.2c-.015.042-.064.068-.128.068-.034 0-.067-.007-.098-.02-.042-.02-.083-.073-.036-.218l.367-.967c.026-.074.105-.15.205-.152s.18.078.205.152l.367.967c.047.145.006.2-.036.218-.03.014-.064.02-.098.02zm-.285-.54l-.153-.436-.153.436zm.666.52c-.08 0-.147-.063-.147-.14V2.547c0-.085.07-.154.157-.154s.157.07.157.154v.902h.326c.08 0 .147.063.147.14s-.066.14-.147.14zm.853.02c-.085 0-.154-.07-.154-.154v-1.05c0-.085.07-.154.154-.154s.154.07.154.154v.33l.43-.43c.022-.022.052-.034.085-.034.038 0 .077.016.106.045s.043.06.045.097a.12.12 0 0 1-.034.094L4.82 3l.378.5c.025.032.035.073.03.114s-.027.077-.06.1c-.027.02-.06.03-.092.03-.048 0-.094-.022-.123-.06l-.36-.477-.053.053v.335c0 .085-.07.153-.154.154z"
                    fill="transparent"
                />
            </svg>
        </div>
    )
}