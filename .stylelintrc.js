module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order'
  ],
  rules: {
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null
  }
}
