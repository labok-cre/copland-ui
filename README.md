# copland-ui

**copland-ui** は、React および Next.js で利用可能なモダンで再利用性の高い静的UIコンポーネントライブラリです。
本リポジトリは、Storybook によるカタログ管理に加え、npm パッケージとして公開するためのビルド設定を備えています。

## 📦 インストール

```bash
npm install copland
# または
yarn add copland
# または
pnpm add copland
```

## 🚀 使い方

### 1. スタイルのインポート

コンポーネントを使用する前に、アプリケーションのエントリーポイント（Next.js の `app/layout.tsx` や Vite の `main.tsx` など）でライブラリの CSS ファイルをインポートしてください。

```typescript
import 'copland/dist/index.css';
```

### 2. コンポーネントの使用例

```tsx
import { Button, WebHeader, WebFooter } from 'copland';

export default function App() {
  return (
    <div>
      <WebHeader siteName="My Site" />
      <main style={{ padding: '2rem' }}>
        <Button label="クリック" variant="primary" onClick={() => alert('Hello!')} />
      </main>
      <WebFooter siteName="My Site" />
    </div>
  );
}
```

---

## 🌐 Storybook

コンポーネントカタログを GitHub Pages で公開しています。

👉 https://labok-cre.github.io/copland-ui/

---

## ✨ 提供コンポーネント

* **`Button`**: プライマリ・セカンダリ表示をサポートする汎用ボタン部品。
* **`WebHeader`**: サイト名と基本的なナビゲーションを提供するヘッダー。
* **`WebFooter`**: コピーライトを表示する標準フッター。

---

## 📁 ディレクトリ構成

```
src/
├── app/          # 開発・確認用の Next.js App Router
├── components/
│   ├── ui/       # 汎用UIコンポーネント (例: Button)
│   ├── features/ # 機能単位のコンポーネント (例: WebHeader, WebFooter)
│   └── sections/ # ページ単位のセクションコンポーネント
├── index.ts      # ライブラリの公開エントリーポイント
├── styles/       # グローバルスタイル・共通SCSS変数
```

---

## 🏗️ 開発者向けガイド

### セットアップ

```bash
npm install
```

### 開発用サーバー起動

```bash
# Next.js の確認用ページ起動
npm run dev

# Storybook 起動
npm run storybook
```

### ライブラリのビルド

外部公開用（ESM, CommonJS, 型定義ファイル, CSS）のビルドを行います。出力物は `dist/` ディレクトリに生成されます。

```bash
npm run build:lib
```

### パッケージの公開手順

1. `package.json` のバージョン（`"version"`）を更新。
2. 以下のコマンドで公開。ビルドは `prepublishOnly` により自動実行されます。
   ```bash
   npm publish
   ```

### 品質チェック

```bash
# ESLint
npm run lint

# Stylelint（SCSS）
npm run lint:style

# TypeScript 型チェック
npm run typecheck

# ユニットテスト
npm run test
```
