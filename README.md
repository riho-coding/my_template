# Pug + SCSS(Dart Sass) + gulp + webpack開発環境

## 開発開始時
```
$ npm install
```

## 主要コマンド
```
$ npx gulp
```
- http://localhost:3000 でローカルサーバーが起動
- Pug・SCSSファイル・フォントファイルのコンパイル
- JavaScriptのバンドル（webpack併用）
- 画像圧縮
- ブラウザ自動リロード
- ファイル監視


### ファイル監視を実行する
```
$ npx gulp watch
```

### Pug・SCSS・画像・フォントファイルのコンパイル・圧縮を行う
```
$ npx gulp compile
```

### ESLintとPrettierを実行する
```
$ npm run format
```
