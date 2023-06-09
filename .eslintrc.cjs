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
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': 'warn',

    'arrow-body-style': 'warn', // 箭头函数体样式只警告
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ], // 未使用的变量只警告
    '@typescript-eslint/no-unused-vars': 'off', // 和上面的规则冲突，关闭

    'import/extensions': 'off', // 允许导入不带后缀的文件
    'import/no-extraneous-dependencies': 'off', // eslint判断依赖类型并不准确
    'import/prefer-default-export': 'off', // 只有一个export没必要一定变成export default
  },
};
