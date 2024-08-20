/** @type {import("prettier").Config} */

module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    jsxSingleQuote: false,
    bracketSpacing: true,
    bracketSameLine: false,
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'preserve',
    arrowParens: 'always',
    htmlWhitespaceSensitivity: 'css',
    endOfLine: 'lf',
    quoteProps: 'as-needed',
    vueIndentScriptAndStyle: false,
    embeddedLanguageFormatting: 'auto',
    singleAttributePerLine: false,
    printWidth: 80,
    useTabs: false,
    plugins: ['prettier-plugin-tailwindcss'],
}
