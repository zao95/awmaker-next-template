const baseSetting = require('config/.eslintrc.common.cjs')

module.exports = {
    ...baseSetting,
    parserOptions: {
        ...baseSetting.parserOptions,
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
}
