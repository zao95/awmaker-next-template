import { LoginIcon, LogoutIcon } from 'icons'
import { signOut, useSession } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { palette } from 'utils'

interface LoginButtonProps {
    BASE_URL: string
    WWW_BASE_URL: string
}
function LoginButton({ BASE_URL, WWW_BASE_URL }: LoginButtonProps) {
    const router = useRouter()
    const session = useSession()
    const { t } = useTranslation('common')

    return (
        <button
            onClick={() =>
                session.status !== 'authenticated'
                    ? router.push({
                          pathname: `${WWW_BASE_URL}/auth/sign-in`,
                          query: {
                              callbackUrl: `${BASE_URL}/${router.locale}${router.asPath}`,
                          },
                      })
                    : signOut({
                          callbackUrl: `${BASE_URL}/${router.locale}${router.asPath}`,
                      })
            }
            title={
                session.status !== 'authenticated'
                    ? t('Sign in')
                    : t('Sign out')
            }
            className="hidden opacity-100 transition-all duration-150 ease-in hover:opacity-80 md:block"
        >
            {session.status !== 'authenticated' ? (
                <LoginIcon color={palette.white} className="h-5 w-5" />
            ) : (
                <LogoutIcon color={palette.white} className="h-5 w-5" />
            )}
        </button>
    )
}

export default LoginButton
