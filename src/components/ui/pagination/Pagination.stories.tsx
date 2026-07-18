import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import {
  Pagination,
  PaginationItem,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
} from './Pagination'

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
- **\`PaginationPrev\`** — 前のページへ戻るためのアイコンボタン
- **\`PaginationItem\`** — ページ番号ボタン（\`isCurrent\` で現在位置を明示）
- **\`PaginationEllipsis\`** — 中間ページを省略するための記号（\`...\`）
- **\`PaginationNext\`** — 次のページへ進むためのアイコンボタン
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
      <PaginationPrev disabled />
      <PaginationItem isCurrent>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationItem>5</PaginationItem>
      <PaginationNext />
    </Pagination>
  ),
}

// ---- With Ellipsis ---------------------------------------------------------

export const WithEllipsis: Story = {
  name: 'example / 省略記号あり',
  render: () => (
    <Pagination>
      <PaginationPrev />
      <PaginationItem>1</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>4</PaginationItem>
      <PaginationItem isCurrent>5</PaginationItem>
      <PaginationItem>6</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>10</PaginationItem>
      <PaginationNext />
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
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
          現在のページ: <strong>{currentPage}</strong> / {totalPages}
        </p>
        <Pagination>
          <PaginationPrev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          />
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1
            return (
              <PaginationItem
                key={page}
                isCurrent={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationItem>
            )
          })}
          <PaginationNext
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          />
        </Pagination>
      </div>
    )
  },
}
