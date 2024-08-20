import Link from 'next/link'
import Head from 'next/head'
import '../../styles/card/animated-info-card.css'

export function AnimatedInfoCard({
    href = '#',
    bgColor = '#292929',
    primaryColor = '#ff4848',
    primaryColorLight = '#ff7e7e',
    title = 'My Card',
    description = 'My Description',
}): JSX.Element {
    return (
        <>
            <Head>
                <style>
                    {`
                    .animated_info_card_card {
                        --animated-info-card-bg-color: ${bgColor};
                        --animated-info-card-primary: ${primaryColorLight};
                        --animated-info-card-secondary: ${primaryColor};
                    }
                `}
                </style>
            </Head>
            <Link className="animated_info_card_card" href={href}>
                <div className="animated_info_card_icon">
                    <i className="material-icons md-36">face</i>
                </div>
                <p className="animated_info_card_title">{title}</p>
                <p className="animated_info_card_text">{description}</p>
            </Link>
        </>
    )
}
