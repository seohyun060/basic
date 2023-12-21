module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/alt-text': [0],
    'jsx-a11y/no-redundant-roles': [
      'error',
      {
        nav: ['navigation'],
      },
    ],
    'jsx-a11y/click-events-have-key-events' : 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    '@typescript-eslint/no-explicit-any': "warn",
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
      },
    ],
  },
};
