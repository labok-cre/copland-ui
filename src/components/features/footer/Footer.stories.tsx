import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Features/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
サイトのフッターコンポーネントです。Compound Component パターンで構成されています。

## サブコンポーネント

| コンポーネント | 説明 |
|---|---|
| \`Footer.Copy\` | コピーライト表記。\`siteName\` を渡すと年号を自動付与。\`children\` で完全カスタマイズも可能。 |

## 基本的な使い方

\`\`\`tsx
<Footer>
  <Footer.Copy siteName="My App" />
</Footer>
// → © 2026 My App
\`\`\`

## 自由なテキストを渡す場合

\`\`\`tsx
<Footer>
  <Footer.Copy>© 2026 My App. All rights reserved.</Footer.Copy>
</Footer>
\`\`\`
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: () => (
    <Footer>
      <Footer.Copy siteName="My Component Library" />
    </Footer>
  ),
}

// ---- Custom copy -----------------------------------------------------------

export const CustomCopy: Story = {
  name: 'copy / カスタムテキスト',
  render: () => (
    <Footer>
      <Footer.Copy> My Component Library</Footer.Copy>
    </Footer>
  ),
}
