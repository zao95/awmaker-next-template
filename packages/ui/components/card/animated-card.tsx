import Link from 'next/link'
import Head from 'next/head'
import '../../styles/card/animated-card.css'

interface AnimatedCardProps {
    href?: string
    bgColor?: string
    bgColorLight?: string
    textColorHover?: string
    boxShadowColor?: string
    text?: string
    children?: React.ReactNode
}
export function AnimatedCard({
    href = '#',
    bgColor = '#ffd861',
    bgColorLight = '#ffeeba',
    textColorHover = '#4c5656',
    boxShadowColor = 'rgba(255, 215, 97, 0.48)',
    text = 'My Card',
    children,
}: AnimatedCardProps): JSX.Element {
    return (
        <>
            <Head>
                <style>
                    {`
                    .card {
                        --animated-card-bg-color: ${bgColor};
                        --animated-card-bg-color-light: ${bgColorLight};
                        --animated-card-text-color-hover: ${textColorHover};
                        --animated-card-box-shadow-color: ${boxShadowColor};
                    }
                `}
                </style>
            </Head>
            <Link className="card" href={href}>
                <div className="overlay" />
                <div className="circle">
                    {children}
                    {/* <svg
                        height='76px'
                        version='1.1'
                        viewBox='29 14 71 76'
                        width='71px'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                    >
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                            fill='none'
                            fillRule='evenodd'
                            id='Group'
                            stroke='none'
                            strokeWidth='1'
                            transform='translate(30.000000, 14.000000)'
                        >
                            <g fill='#000' id='Group-8'>
                                <g id='Group-7'>
                                    <g id='Group-6'>
                                        <path
                                            d='M0,0 L0,75.9204805 L69.1511499,75.9204805 L0,0 Z M14.0563973,32.2825679 L42.9457663,63.9991501 L14.2315268,63.9991501 L14.0563973,32.2825679 Z'
                                            id='Fill-1'
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                id='Group-20'
                                stroke='#FFFFFF'
                                strokeLinecap='square'
                                transform='translate(0.000000, 14.114286)'
                            >
                                <path
                                    d='M0.419998734,54.9642857 L4.70316223,54.9642857'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,50.4404762 L4.70316223,50.4404762'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,45.9166667 L4.70316223,45.9166667'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,41.3928571 L2.93999114,41.3928571'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,36.8690476 L4.70316223,36.8690476'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,32.3452381 L4.70316223,32.3452381'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,27.8214286 L4.70316223,27.8214286'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,23.297619 L2.93999114,23.297619'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,18.7738095 L4.70316223,18.7738095'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,14.25 L4.70316223,14.25'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,9.72619048 L4.70316223,9.72619048'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,5.20238095 L2.93999114,5.20238095'
                                    id='Line'
                                />
                                <path
                                    d='M0.419998734,0.678571429 L4.70316223,0.678571429'
                                    id='Line'
                                />
                            </g>
                        </g>
                    </svg> */}
                </div>
                <p>{text}</p>
            </Link>
        </>
    )
}
