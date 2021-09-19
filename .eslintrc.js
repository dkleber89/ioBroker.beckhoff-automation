module.exports = {
  root: true, // Don't look outside this project for inherited configs
  extends: ['./node_modules/@dkleber89/shared.project.config/eslintrc.react.js'],
  rules: {
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: ['self'],
      },
    ],
  },

  overrides: [
    {
      files: ['./**/*.test.tsx', './**/*.test.ts'],
      rules: { 'func-names': 'off' },
    },
  ],
};
