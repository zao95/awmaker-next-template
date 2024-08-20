import Link from 'next/link'
import { Box } from './transition-card.style'
import { useTranslation } from 'next-i18next'

interface CardProps {
    title: string
    description: string
    href: string
    gradientFrom: string
    gradientTo: string
    darkMode: boolean | null
    className?: string
}
export function TransitionCard({
    title = '',
    description = '',
    href = '#',
    gradientFrom = '',
    gradientTo = '',
    darkMode = false,
    className = '',
}: CardProps) {
    const { t } = useTranslation('common')
    return (
        <Box
            $gradientFrom={gradientFrom}
            $gradientTo={gradientTo}
            $darkMode={darkMode}
            className={className}
        >
            <span />
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link href={href}>{t('LINK')}</Link>
            </div>
        </Box>
    )
}
