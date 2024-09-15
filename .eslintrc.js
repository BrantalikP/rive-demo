module.exports = {
  root: true,
  extends: ['@strv/react-native', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['app.config.ts', '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'import/extensions': 'off',
        'id-length': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
}
