import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/ui/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
ページネーションコンポーネントです。Compound Component パターンで構成されています。

## 構成要素
- **\`Pagination\`** — ルートコンテナ（\`nav\` 要素、\`role="navigation"\`）
- **\`Pagination.Prev\`** — 前のページへ戻るためのアイコンボタン
- **\`Pagination.Item\`** — ページ番号ボタン（\`isCurrent\` で現在位置を明示）
- **\`Pagination.Ellipsis\`** — 中間ページを省略するための記号（\`...\`）
- **\`Pagination.Next\`** — 次のページへ進むためのアイコンボタン
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: () => (
    <Pagination>
      <Pagination.Prev disabled />
      <Pagination.Item isCurrent>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
      <Pagination.Item>4</Pagination.Item>
      <Pagination.Item>5</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  ),
}

// ---- With Ellipsis ---------------------------------------------------------

export const WithEllipsis: Story = {
  name: 'example / 省略記号あり',
  render: () => (
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item>1</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>4</Pagination.Item>
      <Pagination.Item isCurrent>5</Pagination.Item>
      <Pagination.Item>6</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>10</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  ),
}

// ---- Interactive Example ---------------------------------------------------

export const Interactive: Story = {
  name: 'example / インタラクティブ選択',
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 5

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
          現在のページ: <strong>{currentPage}</strong> / {totalPages}
        </p>
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          />
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1
            return (
              <Pagination.Item
                key={page}
                isCurrent={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Pagination.Item>
            )
          })}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          />
        </Pagination>
      </div>
    )
  },
}
