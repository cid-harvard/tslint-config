module.exports = {
  extends: ['tslint:recommended', 'tslint-react'],
  rules: {
    'interface-over-type-literal': false,
    'quotemark': [true, 'single', 'avoid-escape', 'jsx-single'],
    'object-literal-sort-keys': false,
    'arrow-parens': false,
    'one-variable-per-declaration': false,
    'only-arrow-functions': false,
    'semicolon': [true, 'always'],
    'no-console': [true, 'log'],
    'member-ordering': false,
    'variable-name': [true, 'ban-keywords', 'allow-leading-underscore'],
    'member-access': false,
    'comment-format': false,
    'no-var-requires': false,
    'prefer-const': true,
    'trailing-comma': [true, {'multiline': 'always', 'singleline': 'never', 'esSpecCompliant': true}],
    'triple-equals': true,
    'no-irregular-whitespace': true,
    'indent': [true, 'spaces', 2],
    'class-name': false,
    'no-namespace': [true, 'allow-declarations'],
    'await-promise': true,

    'jsx-alignment': false,
    'jsx-boolean-value': true,
    'jsx-curly-spacing': [true, 'never'],
    'jsx-equals-spacing': [true, 'never'],
    'jsx-key': true,
    'jsx-no-bind': true,
    'jsx-no-lambda': true,
    'jsx-no-multiline-js': true,
    'jsx-no-string-ref': true,
    'jsx-self-close': true,
    'jsx-wrap-multiline': true
  }
}
