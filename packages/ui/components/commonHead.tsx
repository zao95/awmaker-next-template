import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface CommonHeadProps {
    titleSuffix?: string | null
    BASE_URL: string
    TITLE: string
    children?: React.ReactNode
}
export function CommonHead({
    titleSuffix = null,
    BASE_URL,
    TITLE,
    children = null,
}: CommonHeadProps) {
    const { t } = useTranslation('common')
    const router = useRouter()
    const ogUrl = `${BASE_URL}/${router.locale}${router.asPath}`

    return (
        <Head>
            <title>{`${
                titleSuffix === null ? '' : `${titleSuffix} | `
            }${TITLE}`}</title>
            <meta property="og:title" content={TITLE} />
            <meta property="og:description" content={t('AWmaker playground')} />
            <meta
                property="og:image"
                content={`${BASE_URL}/images/og-image.jpg`}
            />
            <meta property="og:url" content={ogUrl} />
            {children}
        </Head>
    )
}
