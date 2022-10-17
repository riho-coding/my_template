const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development', // 開発環境用
  // エントリーポイント
  entry: {
    main: './src/assets/js/script.js',
    swiper: './src/assets/js/swiper.js',
  },
  // 出力ファイル
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
  },

  // モジュールの使用
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },

  // オプション
  optimization: {
    minimize: true, // ファイル圧縮機能を有効にする
    minimizer: [
      new TerserPlugin({
        extractComments: false, // コメントを外部ファイルにしない
        terserOptions: {
          compress: {
            drop_console: false, // console.logを残す
          },
        },
      }),
    ],
  },

  performance: {
    hints: false, // パフォーマンス警告を非表示にする
  },

  resolve: {
    extensions: ['.js'],
  },
};
