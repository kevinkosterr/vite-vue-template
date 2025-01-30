import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import alias from 'eslint-plugin-import-alias'

import typescriptEslint from 'typescript-eslint'
import typescriptParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default [
  ...pluginVue.configs['flat/recommended'],
  ...typescriptEslint.configs['recommended'],
  {
    ignores: [ 'dist', 'node_modules' ]
  },
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser
      }
    },
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      'import-alias': alias
    },
    rules: {
      // Default
      'comma-dangle': [ 'error', 'never' ],
      'semi': [ 'error', 'never' ],
      // Stylistic
      '@stylistic/array-bracket-spacing': [ 1, 'always' ],
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/object-curly-spacing': [ 1, 'always' ],
      '@stylistic/quotes': [ 1, 'single' ],
      '@stylistic/quote-props': [ 1, 'consistent-as-needed' ],
      '@stylistic/no-trailing-spaces': 'error',
      // Stylistic TypeScript
      '@stylistic/ts/indent': [ 'error', 2 ],
      '@stylistic/ts/object-curly-spacing': [ 1, 'always' ],
      '@stylistic/ts/quotes': [ 1, 'single' ],
      '@stylistic/ts/quote-props': [ 1, 'consistent-as-needed' ],
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      // Vue
      'vue/no-unused-vars': 'warn',
      'vue/require-explicit-emits': 'off',
      'vue/max-attributes-per-line': [ 'error', {
        singleline: {
          max: 4
        },
        multiline: {
          max: 3
        }
      } ],
      // Import-alias
      'import-alias/import-alias': [
        'error',
        {
          relativeDepth: 0,
          aliases: [
            { alias: '@', matcher: '^src' }
          ]
        }
      ]
    }
  }
]