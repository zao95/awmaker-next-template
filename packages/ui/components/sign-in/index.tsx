import { darkModeAtom, loginMethodAtom } from '../../atoms'
import { EmailIcon, LogoWithCircleIcon, DiscordIcon, NaverIcon } from 'icons'
import { palette } from 'utils'
import { useAtom, useAtomValue } from 'jotai'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { Tooltip } from 'react-tooltip'
import classNames from 'classnames'

export function SignIn() {
    const { t } = useTranslation('common')
    const darkMode = useAtomValue(darkModeAtom)
    const [loginMethod, setLoginMethod] = useAtom(loginMethodAtom)
    const router = useRouter()

    const callbackUrl = useMemo(() => {
        return (router.query.callbackUrl as string) ?? '/'
    }, [router.query?.callbackUrl])

    return (
        <>
            <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-col justify-center px-4 py-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm md:w-96">
                        <div>
                            <LogoWithCircleIcon
                                color={
                                    darkMode === true
                                        ? palette.stone[100]
                                        : palette.stone[800]
                                }
                                className="h-10 w-10"
                            />
                            <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-stone-900 dark:text-white">
                                {t('Sign in to your account')}
                            </h2>
                        </div>

                        <div className="mt-6">
                            <div>
                                <div className="flex flex-col items-end gap-4">
                                    <button
                                        data-tooltip-id="discord-tooltip"
                                        onClick={() => {
                                            signIn('discord', {
                                                callbackUrl,
                                            })
                                            setLoginMethod('discord')
                                        }}
                                        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#5865F2] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                                    >
                                        <DiscordIcon color={palette.white} />
                                        <span className="text-sm font-semibold leading-6">
                                            {t('Discord')}
                                        </span>
                                    </button>

                                    <button
                                        data-tooltip-id="github-tooltip"
                                        onClick={() => {
                                            signIn('github', {
                                                callbackUrl,
                                            })

                                            setLoginMethod('github')
                                        }}
                                        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm font-semibold leading-6">
                                            {t('GitHub')}
                                        </span>
                                    </button>
                                    <button
                                        data-tooltip-id="naver-tooltip"
                                        onClick={() => {
                                            signIn('naver', {
                                                callbackUrl,
                                            })
                                            setLoginMethod('naver')
                                        }}
                                        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#2DB400] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <NaverIcon
                                            color={palette.white}
                                            className="h-4 w-4"
                                        />
                                        <span className="text-sm font-semibold leading-6">
                                            {t('Naver')}
                                        </span>
                                    </button>
                                    {/*
                                        TODO
                                        현재 Kakao 응답 데이터와 NextAuth Adaptor가 맞지 않음.
                                        에러 항목: refresh_token_expires_in
                                        차후 수정 시 적용
                                     */}
                                    {/* <button
                                        data-tooltip-id="kakao-tooltip"
                                        onClick={() => {
                                            signIn('kakao', {
                                                callbackUrl,
                                            })
                                            setLoginMethod('kakao')
                                        }}
                                        className="flex w-full items-center justify-center gap-3 rounded-md bg-[#FEE500] px-3 py-1.5 text-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <KakaoTalkIcon
                                            color={`${palette.black}E6`}
                                            className="h-4 w-4"
                                        />
                                        <span className="text-sm font-semibold leading-6">
                                            {t('KakaoTalk')}
                                        </span>
                                    </button> */}
                                    <div className="relative w-full">
                                        <div
                                            className="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div
                                                className={classNames(
                                                    'w-full border-t border-solid',
                                                    darkMode === true
                                                        ? 'border-stone-700'
                                                        : 'border-stone-300',
                                                )}
                                            />
                                        </div>
                                        <div className="relative flex justify-center text-sm font-medium leading-6">
                                            <span
                                                className={classNames(
                                                    'px-6',
                                                    darkMode === true
                                                        ? 'bg-stone-950 text-stone-300'
                                                        : 'bg-white text-stone-900',
                                                )}
                                            >
                                                Or continue with
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col items-end gap-2">
                                        <button
                                            data-tooltip-id="email-tooltip"
                                            onClick={() => {
                                                signIn('email', {
                                                    callbackUrl,
                                                })
                                                setLoginMethod('email')
                                            }}
                                            className="bg-primary-600 flex w-full items-center justify-center gap-3 rounded-md px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            <EmailIcon color={palette.white} />
                                            <span className="text-sm font-semibold leading-6">
                                                {t(
                                                    'Single-use email authentication',
                                                )}
                                            </span>
                                        </button>
                                        <p
                                            className={classNames(
                                                'text-xs',
                                                darkMode === true
                                                    ? 'text-stone-300'
                                                    : 'text-stone-700',
                                            )}
                                        >
                                            {t(
                                                'Please use it when the SNS account you used to log in is locked.',
                                            )}
                                        </p>
                                    </div>
                                    <Tooltip
                                        id="discord-tooltip"
                                        place="bottom-end"
                                        isOpen={loginMethod === 'discord'}
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 8px',
                                        }}
                                        content={t(
                                            'Recently Used Login Method',
                                        )}
                                    />
                                    <Tooltip
                                        id="github-tooltip"
                                        place="bottom-end"
                                        isOpen={loginMethod === 'github'}
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 8px',
                                        }}
                                        content={t(
                                            'Recently Used Login Method',
                                        )}
                                    />
                                    <Tooltip
                                        id="naver-tooltip"
                                        place="bottom-end"
                                        isOpen={loginMethod === 'naver'}
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 8px',
                                        }}
                                        content={t(
                                            'Recently Used Login Method',
                                        )}
                                    />
                                    <Tooltip
                                        id="kakao-tooltip"
                                        place="bottom-end"
                                        isOpen={loginMethod === 'kakao'}
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 8px',
                                        }}
                                        content={t(
                                            'Recently Used Login Method',
                                        )}
                                    />
                                    <Tooltip
                                        id="email-tooltip"
                                        place="bottom-end"
                                        isOpen={loginMethod === 'email'}
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 8px',
                                        }}
                                        content={t(
                                            'Recently Used Login Method',
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
