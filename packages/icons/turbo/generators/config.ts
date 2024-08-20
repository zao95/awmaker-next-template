import type { PlopTypes } from '@turbo/gen'

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    // A simple generator to add a new React icon to the internal UI library
    plop.setGenerator('svg-icon', {
        description: 'Adds a new svg icon',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the icon?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'svgs/{{kebabCase name}}.tsx',
                templateFile: 'templates/icon.hbs',
            },
            {
                type: 'append',
                path: 'package.json',
                pattern: /"exports": {(?<insertion>)/g,
                template:
                    '    "./{{kebabCase name}}": "./svgs/{{kebabCase name}}.tsx",',
            },
        ],
    })
}
