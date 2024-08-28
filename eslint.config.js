import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tailwindcss from 'eslint-plugin-tailwindcss'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'stylistic': stylistic,
      'tailwindcss': tailwindcss,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      'tailwindcss/no-custom-classname': 'off',
      'object-curly-spacing': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'space-infix-ops': ['error', { int32Hint: false }],
      'no-multi-spaces': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'arrow-spacing': ['error', { before: true, after: true }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
    },
  },
)
