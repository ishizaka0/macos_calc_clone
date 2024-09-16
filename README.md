# macos_calc_clone

macOSの電卓をv0とClaudeを使って作成しました。

## インストール

```
git clone https://github.com/ishizaka0/macos_calc_clone.git
cd macos_calc_clone
npm install
npm run dev
```

アプリケーションは http://localhost:3000 で実行されます。
Vercelでも動作しています。https://macos-calc-clone.vercel.app/

## 開発環境・利用AI & ツール

- node : v18.17.0
- next : 14.2.11
- v0 : WEBインターフェイス（APIがありません）
- ChatGPT 4o : API経由
- Claude 3.5 Sonnet : API経由
- VSCode + ClaudeDEV 機能拡張
- ESLint: コード品質とスタイルの静的解析ツール

## 使用コンポーネント・フレームワークなど

- TypeScript : 静的型付けを提供するJavaScriptの上位集合
- Next.js: サーバーサイドレンダリングと静的サイト生成を簡単に行えるReactフレームワーク
- React: ユーザーインターフェースを作成するためのJavaScriptライブラリ
- Tailwind CSS: ユーティリティファーストのCSSフレームワーク（UIデザインの効率化）
- React Color (v2.19.3): カラーピッカーコンポーネントライブラリ

## デプロイ環境

- Vercel: Next.jsアプリケーションのホスティングと自動デプロイに特化したクラウドプラットフォーム。GitHubリポジトリと連携し、プッシュごとに自動的にデプロイを行います。

## コンポーネント

- `Button.js`: ボタンのUIコンポーネント
- `Calculator.tsx`: 電卓の主要なコンポーネント
- `ColorCalculator.js`: 色の計算を行う電卓コンポーネント
- `ImageDisplay.js`: 画像を表示するコンポーネント

## プロジェクト構造

```
$ tree -I node_modules/
.
├── LICENSE
├── README.md
├── README_en.md
├── components
│   ├── Button.js
│   ├── Calculator.tsx
│   ├── ColorCalculator.js
│   └── ImageDisplay.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── pages
│   ├── _app.js
│   └── index.js
├── postcss.config.js
├── postcss.config.mjs
├── public
│   └── ss.png
├── src
├── styles
│   └── globals.css
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json

5 directories, 20 files
```