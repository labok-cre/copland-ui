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
import { Button, Header, Footer, Message, Table } from 'copland';

export default function App() {
  return (
    <div>
      <Header>
        <Header.Logo src="/logo.svg" alt="My Site" />
        <Header.Nav>
          <Header.NavItem href="/">ホーム</Header.NavItem>
          <Header.NavItem href="/about">About</Header.NavItem>
        </Header.Nav>
      </Header>
      <main style={{ padding: '2rem' }}>
        <Button size="M" variant="primary" onClick={() => alert('Hello!')}>
          クリック
        </Button>
      </main>
      <Footer />
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

copland-uiコンポーネントのFigmaデータを公開（制作中）

https://www.figma.com/community/file/1660620113413898263/copland-ui

---

## 提供コンポーネント

### UI コンポーネント（`components/ui/`）

| コンポーネント | 概要 |
|---|---|
| **`Button`** | `primary` / `secondary` / `tertiary` の3バリアント、複数サイズ（S / M / L / XL など）、`isLoading` 状態をサポートする汎用ボタン。 |
| **`Check`** | `indeterminate`（不確定）状態もサポートするチェックボックス。 |
| **`Radio`** | 統一したスタイルのラジオボタン。 |
| **`Title`** | `h1`〜`h4` の切り替えやスマホサイズ指定に対応したタイトル要素。 |
| **`Input`** | プレースホルダーやエラー状態に対応した1行テキストインプット。 |
| **`Textarea`** | 入力量に応じて高さが自動伸縮する複数行インプット。 |
| **`Select`** | アクセシブルでアニメーションに対応したドロップダウン選択肢（Radix UI 採用）。 |
| **`Label`** | バッジ形式でカテゴリやステータスを表現。`appearance`（contained / outlined）、`color`（6色）、`shape`（square / pill）、ステータスドット表示に対応。 |
| **`Message`** | `notice` / `info` / `warning` / `error` の4バリアントに対応した通知・メッセージUI。Compound Component として `Message.Icon`、`Message.Title`、`Message.Text` などを提供。 |
| **`Table`** | 横スクロール対応、列の左端固定（sticky）対応のテーブル。Compound Component として `Table.Header`、`Table.Body`、`Table.Row`、`Table.HeaderCell`、`Table.Cell`、`Table.CellContent`、`Table.Link` を提供。 |
| **`Frame`** | コンテンツ領域を囲む汎用レイアウト用ラッパー。 |
| **`Pagination`** | 省略表示や前後の切り替えに対応したページナビゲーション。Compound Component として `Pagination.Prev`、`Pagination.Item`、`Pagination.Ellipsis`、`Pagination.Next` を提供。 |
| **`Breadcrumb`** | Next.js などのカスタムリンクとも高度に連携できるパンくずリスト。Compound Component として `Breadcrumb.List`、`Breadcrumb.Item`、`Breadcrumb.Link`、`Breadcrumb.Page`、`Breadcrumb.Separator` を提供。 |

### フィーチャーコンポーネント（`components/features/`）

| コンポーネント | 概要 |
|---|---|
| **`Header`** | ロゴ・ナビゲーションを備えるサイトヘッダー。`Header.Logo`、`Header.Nav`、`Header.NavItem` を Compound Component として提供。 |
| **`Footer`** | コピーライトを表示する標準フッター。 |

---

## 設計アプローチと技術スタック

### Compound Component パターン

複数のサブコンポーネントで構成されるUIはすべて Compound Component パターンを採用しています。
`Table.Header`、`Message.Icon`、`Input.Field`、`Breadcrumb.List` のように、親コンポーネントの名前空間下にサブコンポーネントを配置することで、直感的で柔軟な組み合わせが可能です。

対象コンポーネント: `Breadcrumb` / `Input` / `Message` / `Pagination` / `Select` / `Table` / `Textarea` / `Header` / `Footer`

### ヘッドレスUIによるロジックとアクセシビリティの分離

`Select` などの複雑なインタラクションを伴うコンポーネントには、ヘッドレスUIライブラリである **Radix UI (`@radix-ui/react-select`)** を採用しています。

- **ロジックとアクセシビリティ (Radix UI)**: WAI-ARIA 準拠のマークアップ、キーボードナビゲーション（矢印キー、Enter、Escなどでの操作）、フォーカス制御などの複雑なロジックを Radix UI が担保します。
- **スタイル（CSS Modules / SCSS）**: Radix UI 自体はスタイルを一切持たないため、デザインやアニメーションはプロジェクト独自の SCSS で 100% 自由に制御しています。

これにより、アクセシビリティや操作性を妥協することなく、完全にカスタムされた UI コンポーネントを安全かつシンプルに実装しています。

### アイコンに関して（lucide-react）

SVGアイコンの管理とデザインの一貫性を高めるため、標準アイコンライブラリとして **`lucide-react`** を採用しています。

- `Pagination`（矢印）や `Breadcrumb`（区切り）、`Message`（通知アイコン）などで統一されたサイズの Lucide アイコンを利用しています。
- 各コンポーネントでスタイルシート（SCSS）のテキストカラー `currentColor` に追従するよう設計されているため、カラーパレットの変更に連動してアイコンカラーも自動的に変化します。

---

## 📁 ディレクトリ構成

```
src/
├── app/          # 開発・確認用の Next.js App Router
├── components/
│   ├── ui/       # 汎用UIコンポーネント (Button, Table, Message, Label, Frame など)
│   ├── features/ # 機能単位のコンポーネント (Header, Footer)
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
