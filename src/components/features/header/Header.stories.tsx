import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Features/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
サイトのヘッダーコンポーネントです。Compound Component パターンで構成されています。

## サブコンポーネント

| コンポーネント | 説明 |
|---|---|
| \`Header.Logo\` | ロゴエリア。テキスト・画像 URL（\`src\`）・任意 JSX に対応 |
| \`Header.Nav\` | ナビゲーションのラッパー |
| \`Header.NavItem\` | ナビゲーションのリンク項目 |

## 基本的な使い方

\`\`\`tsx
<Header>
  <Header.Logo>My App</Header.Logo>
  <Header.Nav>
    <Header.NavItem href="/">ホーム</Header.NavItem>
    <Header.NavItem href="/about">About</Header.NavItem>
  </Header.Nav>
</Header>
\`\`\`

## 画像ロゴ

\`\`\`tsx
<Header>
  <Header.Logo src="/logo.svg" alt="My App" />
  <Header.Nav>
    <Header.NavItem href="/">ホーム</Header.NavItem>
  </Header.Nav>
</Header>
\`\`\`
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: () => (
    <Header>
      <Header.Logo>My Component Library</Header.Logo>
      <Header.Nav>
        <Header.NavItem href="/">ホーム</Header.NavItem>
        <Header.NavItem href="/test">テスト</Header.NavItem>
        <Header.NavItem href="/test2">テスト2</Header.NavItem>
      </Header.Nav>
    </Header>
  ),
}

// ---- Image logo ------------------------------------------------------------

export const ImageLogo: Story = {
  name: 'logo / 画像（src）',
  render: () => (
    <Header>
      <Header.Logo
        src="https://placehold.co/120x32/437eff/ffffff?text=LOGO&font=sans-serif"
        alt="My Component Library"
      />
      <Header.Nav>
        <Header.NavItem href="/">ホーム</Header.NavItem>
        <Header.NavItem href="/test">テスト</Header.NavItem>
        <Header.NavItem href="/test2">テスト2</Header.NavItem>
      </Header.Nav>
    </Header>
  ),
}

// ---- Text + icon logo ------------------------------------------------------

export const TextAndIconLogo: Story = {
  name: 'logo / テキスト + アイコン（JSX）',
  render: () => (
    <Header>
      <Header.Logo>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="https://placehold.co/28x28/437eff/ffffff?text=★&font=sans-serif"
            alt=""
            width={28}
            height={28}
            style={{ borderRadius: '6px', display: 'block' }}
          />
          My Component Library
        </span>
      </Header.Logo>
      <Header.Nav>
        <Header.NavItem href="/">ホーム</Header.NavItem>
        <Header.NavItem href="/test">テスト</Header.NavItem>
      </Header.Nav>
    </Header>
  ),
}

// ---- Custom nav ------------------------------------------------------------

export const CustomNav: Story = {
  name: 'example / カスタムナビ',
  render: () => (
    <Header>
      <Header.Logo>My Component Library</Header.Logo>
      <Header.Nav>
        <Header.NavItem href="/docs">ドキュメント</Header.NavItem>
        <Header.NavItem href="/components">コンポーネント</Header.NavItem>
        <Header.NavItem href="/github">GitHub</Header.NavItem>
        <Header.NavItem href="/changelog">更新履歴</Header.NavItem>
      </Header.Nav>
    </Header>
  ),
}
