/*
 * @Author: itaffy
 * @Date: 2022-07-09 01:08:13
 * @LastEditors: itaffy
 * @LastEditTime: 2022-07-09 01:55:18
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    'prettier',
    // 其它插件
  ],
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
}
