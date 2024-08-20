// TODO
// TERMS OF SERVICE 추가하기
// PRIVACY POLICY 추가하기

import type { PrismaClient } from 'database'
import type { Adapter } from 'next-auth/adapters'
import type { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'
import NaverProvider from 'next-auth/providers/naver'
import KakaoProvider from 'next-auth/providers/kakao'
import EmailProvider from 'next-auth/providers/email'
import { getRandomHexColor } from 'utils'

export const awmakerAdapter = (p: PrismaClient): Adapter => {
    const adapterFunctions: any = PrismaAdapter(p)
    adapterFunctions.createUser = (data: any) =>
        p.user.create({
            data: {
                ...data,
                color: getRandomHexColor(),
            },
        })

    return adapterFunctions as Adapter
}

export const commonAuthOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        DiscordProvider({
            clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        }),
        NaverProvider({
            clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID!,
            clientSecret: process.env.NAVER_CLIENT_SECRET!,
        }),
        KakaoProvider({
            clientId: process.env.NEXT_PUBLIC_KAKAO_REST_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST!,
                port: process.env.EMAIL_SERVER_PORT!,
                auth: {
                    user: process.env.EMAIL_SERVER_USER!,
                    pass: process.env.EMAIL_SERVER_PASSWORD!,
                },
            },
            from: process.env.EMAIL_FROM!,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            return true
        },
        async session({ session, token }) {
            if (session?.user !== undefined) {
                session.user.id = token.uid
                session.user.color = token.color
            }
            return session
        },
        async jwt({ user, token }) {
            if (user !== undefined) {
                token.uid = user.id
                token.color = user.color
            }
            return token
        },
        async redirect({ url }) {
            return url
        },
    },
    session: {
        strategy: 'jwt',
    },
}

const useSecureCookies = process.env.NEXTAUTH_URL!.startsWith('https://')
const cookiePrefix = useSecureCookies === true ? '__Secure-' : ''
const hostName = new URL(process.env.NEXTAUTH_URL!).hostname
export const cookieSetting =
    process.env.NEXT_PUBLIC_APP_ENV !== 'local'
        ? {
              cookies: {
                  sessionToken: {
                      name: `${cookiePrefix}next-auth.session-token`,
                      options: {
                          httpOnly: true,
                          sameSite: 'lax',
                          path: '/',
                          secure: useSecureCookies,
                          domain:
                              hostName === 'localhost'
                                  ? hostName
                                  : '.' +
                                    hostName.split('.').slice(-2).join('.'), // add a . in front so that subdomains are included
                      },
                  },
              },
          }
        : {}
