module.exports = {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
  rules: {
    'at-rule-no-unknown': null, // デフォルトのat-ruleに関するルールを無効にする
    'scss/at-rule-no-unknown': true, // SCSSのat-ruleに関するルールを有効にする
    'string-quotes': 'single', // シングルクォーテーションを使用する
    'no-duplicate-selectors': true, // スタイルシート内のセレクタの重複を禁止する
    'color-hex-case': 'lower', // カラーコードは小文字を使用する
    'color-hex-length': 'short', // カラーコードを省略できる場合はする
    'color-named': 'never', // ネームドカラーは使用しない
    'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }], // セレクタに直接スタイルをあてない
    'selector-combinator-space-after': 'always', // セレクタの後に半角スペースを入れる
    'selector-attribute-operator-space-before': 'never', // 属性セレクタ内の演算子の前に半角スペースを入れない
    'selector-attribute-operator-space-after': 'never', // 属性セレクタ内の演算子の後に半角スペースを入れない
    'selector-attribute-brackets-space-inside': 'never', // 属性セレクタの括弧の内側に半角スペースを入れない
    'declaration-block-trailing-semicolon': 'always', // 末尾にセミコロンを使用する
    'declaration-colon-space-before': 'never', // プロパティの後に半角スペースを入れない
    'declaration-colon-space-after': 'always', // 値の前に半角スペースを入れる
    'number-leading-zero': 'always', // 値が小数点を含む数値の場合、ゼロを省略しない
    'font-family-name-quotes': 'always-where-recommended', // フォント名は引用符で囲む
    'font-family-no-duplicate-names': [true, { ignoreFontFamilyNames: ['/^My Font /', 'monospace'] }], // フォント名を重複させない
    'comment-whitespace-inside': 'always', // コメントアウトの内側に半角スペースを入れる
    'comment-empty-line-before': 'always', // コメントアウトの直前に改行を入れる
    'selector-pseudo-element-colon-notation': 'double', // 疑似要素は二重コロンで指定する
    'selector-pseudo-class-parentheses-space-inside': 'never', // 疑似クラスのセレクタ内のかっこの内側に半角スペースを入れない
    'media-feature-range-operator-space-before': 'always', // メディアクエリの演算子の前に半角スペースを入れる
    'media-feature-range-operator-space-after': 'always', // メディアクエリの演算子の後に半角スペースを入れる
    'media-feature-parentheses-space-inside': 'never', // メディアクエリのかっこの内側に半角スペースを入れない
    'media-feature-colon-space-before': 'never', // メディアクエリのコロン直前に半角スペースを入れない
    'media-feature-colon-space-after': 'always', // メディアクエリのコロン直後に半角スペースを入れる
    'no-descending-specificity': null, // 詳細度の低いセレクタを、詳細度の高いセレクタで上書きを許容する
    // SCSS
    'max-nesting-depth': [
      2, // 孫階層まで許容する
      {
        ignoreAtRules: ['use', 'each', 'media', 'supports', 'include'],
      },
    ],
    'selector-id-pattern': null, // idでkebab-case以外も許容する
    'selector-class-pattern': null, // classでkebab-case以外も許容する
    'keyframes-name-pattern': null, // keyframesでkebab-case以外も許容する
    'scss/dollar-variable-pattern': null, // 変数でkebab-case以外も許容する
    'scss/at-extend-no-missing-placeholder': true, // @extendを使用する際はプレースホルダーを使用する
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$', // プレースホルダーは小文字で指定する
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$', // mixinは小文字で指定する
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$', // functionは小文字で指定する
  },
};
