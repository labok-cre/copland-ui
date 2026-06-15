# copland-ui

**copland-ui** は、フロントエンドの静的UIコンポーネント集です。
Next.js + TypeScript をベースに、保守性・再利用性を重視したモダンな設計で構築されています。

## 🌐 Storybook

コンポーネントカタログを GitHub Pages で公開しています。

👉 https://labok-cre.github.io/copland-ui/

## ✨ 技術スタック

| カテゴリ               | 採用技術                                    |
| ---------------------- | ------------------------------------------- |
| フレームワーク         | [Next.js](https://nextjs.org/) (App Router) |
| 言語                   | TypeScript                                  |
| スタイリング           | SCSS Modules                                |
| コンポーネントカタログ | [Storybook](https://storybook.js.org/)      |
| テスト                 | Vitest                                      |
| Linter                 | ESLint + Prettier + Stylelint               |

## 📁 ディレクトリ構成

```
src/
├── app/          # App Router
├── components/
│   ├── ui/       # 汎用性のあるコンポーネント
│   ├── features/ # 機能単位のコンポーネント
│   └── sections/ # ページ単位のセクションコンポーネント
├── hooks/        # カスタムフック
└── styles/       # グローバルスタイル
```

## 🚀 コマンド一覧

### セットアップ

```bash
# 依存関係のインストール（CI環境・初回推奨）
npm ci

# 依存関係のインストール（開発中の追加・更新時）
npm install
```

### 開発

```bash
# 開発サーバー起動（Next.js）
npm run dev

# Storybook 起動
npm run storybook
```

### ビルド

```bash
# Next.js プロダクションビルド
npm run build

# Storybook 静的ファイルのビルド
npm run build-storybook
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

## 🏗️ 設計方針

- **責務分離**: `ui/`（汎用部品）→ `features/`（機能単位）→ `sections/`（ページ単位）の3層構造
- **CSS Modules**: スタイルのスコープをコンポーネント単位で管理し、命名衝突を防止
- **Story-Driven Development**: 各コンポーネントに Storybook の Story を紐づけ、カタログとして管理
- **型安全**: すべてのコンポーネントに TypeScript の Props インターフェースを定義
