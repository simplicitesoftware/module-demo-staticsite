module.exports = {
  'env': {
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  'rules': {
    'no-console': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  },
  'ignorePatterns': [
    'dist'
  ]
};
