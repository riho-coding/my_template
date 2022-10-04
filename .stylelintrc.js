const { tree } = require('gulp');

module.exports = {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'string-quotes': 'single',
    'no-duplicate-selectors': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'selector-no-qualifying-type': true,
    'selector-no-id': true,
    'selector-combinator-space-after': 'always',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'number-leading-zero': 'always',
    'font-family-name-quotes': 'always-where-recommended',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    // SCSS
    'no-descending-specificity': null,
    'max-nesting-depth': [
      2, // 孫階層まで許容する
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],
    'selector-id-pattern': null, // idでkebab-case以外も許容する
    'selector-class-pattern': null, // classでkebab-case以外も許容する
    'keyframes-name-pattern': null, // keyframesでkebab-case以外も許容する
    'at-mixin-pattern': null, // mixinでkebab-case以外も許容する
    'dollar-variable-pattern': null, // $変数でkebab-case以外も許容する
    'percent-placeholder-pattern': null, // %placeholderでkebab-case以外も許容する
    'at-extend-no-missing-placeholder': null, // @extendで%placeholder以外も許容する
  },
};
