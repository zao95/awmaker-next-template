// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')

function getConfig(config) {
    return config
}

/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = getConfig({
    /**
     * Dynamic configuration available for the browser and server.
     * Note: requires `ssr: true` or a `getInitialProps` in `_app.tsx`
     * @link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
     */
    reactStrictMode: false,
    /** We run eslint as a separate task in CI */
    eslint: { ignoreDuringBuilds: !!process.env.CI },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()]
        }

        return config
    },
})
