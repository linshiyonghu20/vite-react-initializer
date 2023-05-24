module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-base',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier', 'html'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@a', './src/assets'],
          ['@c', './src/components'],
          ['@p', './src/pages'],
          ['@ser', './src/services'],
          ['@s', './src/store'],
          ['@u', './src/utils'],
          ['@t', './types'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
        moduleDirectory: ['node_modules', 'types'],
      },
    },
  },
  rules: {
    'arrow-body-style': 'warn', // 箭头函数体样式只警告

    'react-refresh/only-export-components': 'warn',

    'import/extensions': 'off', // 允许导入不带后缀的文件
    'import/no-extraneous-dependencies': 'off', // eslint判断依赖类型并不准确
    'import/prefer-default-export': 'warn', // 只有一个export没必要一定变成export default
  },
};
