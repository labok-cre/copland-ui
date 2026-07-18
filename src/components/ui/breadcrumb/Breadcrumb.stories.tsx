import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './Breadcrumb'

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
- **\`BreadcrumbList\`** — 項目をラップする ordered list（\`ol\` 要素）
- **\`BreadcrumbItem\`** — 各項目のラッパー（\`li\` 要素）
- **\`BreadcrumbLink\`** — リンク要素（\`asChild\` に対応）
- **\`BreadcrumbSeparator\`** — 区切りアイコン（デフォルト: \`ChevronRight\`）
- **\`BreadcrumbPage\`** — 現在地テキスト（\`aria-current="page"\` 適用）
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
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ドキュメント</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>クイックスタート</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}
