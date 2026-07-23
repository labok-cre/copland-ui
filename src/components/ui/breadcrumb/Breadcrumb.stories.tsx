import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/ui/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
パンくずリストコンポーネントです。これまでのUIコンポーネントと同じく、自由度が高い Compound Component パターンで構成されています。

## 構成要素
- **\`Breadcrumb\`** — ルートコンテナ（\`nav\` 要素、\`aria-label="パンくずリスト"\`）
- **\`Breadcrumb.List\`** — 項目をラップする ordered list（\`ol\` 要素）
- **\`Breadcrumb.Item\`** — 各項目のラッパー（\`li\` 要素）
- **\`Breadcrumb.Link\`** — リンク要素（\`asChild\` に対応）
- **\`Breadcrumb.Separator\`** — 区切りアイコン（デフォルト: \`ChevronRight\`）
- **\`Breadcrumb.Page\`** — 現在地テキスト（\`aria-current="page"\` 適用）
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: () => (
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">ホーム</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">ドキュメント</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>クイックスタート</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  ),
}
