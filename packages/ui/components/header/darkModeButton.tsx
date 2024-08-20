import { darkModeAtom } from '../../atoms/darkMode'
import classNames from 'classnames'
import { DarkModeIcon, LightModeIcon } from 'icons'
import { useAtom } from 'jotai'
import { useTranslation } from 'next-i18next'
import { palette } from 'utils'

function DarkModeButton({ showDarkModeButton }) {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const { t } = useTranslation('common')

    return (
        <button
            type="button"
            className={classNames(
                '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 opacity-100 transition-all duration-150 ease-in hover:opacity-80',
                showDarkModeButton === true ? '' : 'hidden',
            )}
            title={t('Dark mode')}
            onClick={() => setDarkMode(!(darkMode ?? false))}
        >
            {darkMode === true ? (
                <DarkModeIcon color={palette.white} className="h-5 w-5" />
            ) : (
                <LightModeIcon color={palette.white} className="h-5 w-5" />
            )}
        </button>
    )
}

export default DarkModeButton
