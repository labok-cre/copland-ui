# copland-ui

**copland-ui** は、React および Next.js で利用可能なモダンで再利用性の高い静的UIコンポーネントライブラリです。
本リポジトリは、Storybook によるカタログ管理に加え、npm パッケージとして公開するためのビルド設定を備えています。

## インストール

```bash
npm install copland
# または
yarn add copland
# または
pnpm add copland
```

## 使い方

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

## Storybook

コンポーネントカタログを GitHub Pages で公開しています。

https://labok-cre.github.io/copland-ui/

---

## Figma

copland-uiコンポーネントのFigmaデータを公開中（制作中）

https://www.figma.com/community/file/1660620113413898263/copland-ui

---

## 提供コンポーネント

* **`Button`**: プライマリ・セカンダリ表示をサポートする汎用ボタン部品。
* **`Check`**: `indeterminate`（不確定）状態もサポートするチェックボックス。
* **`Radio`**: 統一したスタイルのラジオボタン。
* **`Title`**: `h1`〜`h4` の切り替えやスマホサイズ指定に対応したタイトル要素。
* **`Input`**: プレースホルダーやエラー状態に対応した1行テキストインプット。
* **`Textarea`**: 入力されたテキストの量に応じて自動で高さが伸縮する複数行インプット。
* **`Select`**: アクセシブルでアニメーションに対応したドロップダウン選択肢。
* **`Pagination`**: 省略表示や前後の切り替えに対応したページナビゲーション。
* **`Breadcrumb`**: Next.js などのカスタムリンクとも高度に連携できるパンくずリスト。
* **`WebHeader`**: サイト名と基本的なナビゲーションを提供するヘッダー。
* **`WebFooter`**: コピーライトを表示する標準フッター。

---

## 設計アプローチと技術スタック

### ヘッドレスUIによるロジックとアクセシビリティの分離
`Select` などの複雑なインタラクションを伴うコンポーネントには、ヘッドレスUIライブラリである **Radix UI (`@radix-ui/react-select`)** を採用しています。

- **ロジックとアクセシビリティ (Radix UI)**: WAI-ARIA 準拠のマークアップ、キーボードナビゲーション（矢印キー、Enter、Escなどでの操作）、フォーカス制御などの複雑なロジックを Radix UI が担保します。
- **スタイル（CSS Modules / SCSS）**: Radix UI 自体はスタイルを一切持たないため、デザインやアニメーションはプロジェクト独自の SCSS で 100% 自由に制御しています。

これにより、アクセシビリティや操作性を妥協することなく、完全にカスタムされた UI コンポーネントを安全かつシンプルに実装しています。

### 一貫性のあるアイコン表示（lucide-react）
SVGアイコンの管理とデザインの一貫性を高めるため、標準アイコンライブラリとして **`lucide-react`** を採用しています。
- 自前でインラインの SVG を実装する代わりとして、`Pagination`（矢印）や `Breadcrumb`（区切り）などで統一されたサイズ（`size={12}` / `size={16}` など）の Lucide アイコンを利用しています。
- 各コンポーネントでスタイルシート（SCSS）のテキストカラー `currentColor` に追従するよう設計されているため、カラーパレットの変更に連動してアイコンカラーも自動的に変化します。


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

## 開発者向けガイド

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
