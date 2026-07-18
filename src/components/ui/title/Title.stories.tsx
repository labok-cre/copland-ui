import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  title: 'Components/ui/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
タイトルコンポーネントです。

## 特徴
- **5段階のサイズ** — \`XS\` / \`S\` / \`M\` / \`L\` / \`XL\` から選択
- **レスポンシブ対応** — \`sizeSp\` でスマートフォン時のサイズを個別に指定可能
- **セマンティック** — \`tag\` で \`h1\` ～ \`h4\` を切り替えられます（デフォルト: \`h2\`）
- **必須マーク** — \`required\` を指定すると \`*\` を末尾に表示します
        `.trim(),
      },
    },
  },
  argTypes: {
    size: {
      description: 'タイトルのサイズ（必須）',
      control: 'select',
      options: ['XS', 'S', 'M', 'L', 'XL'],
    },
    sizeSp: {
      description: 'スマートフォン用のサイズ（任意）',
      control: 'select',
      options: ['XS', 'S', 'M', 'L', 'XL'],
    },
    tag: {
      description: 'タイトルのHTMLタグ（デフォルト: h2）',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4'],
    },
    required: {
      description: '必須マーク（*）を表示するか',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Title>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  args: {
    size: 'M',
    children: 'タイトル',
  },
}

// ---- Sizes -----------------------------------------------------------------

export const Sizes: Story = {
  name: 'size / すべて',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Title size="XL">XL タイトル</Title>
      <Title size="L">L タイトル</Title>
      <Title size="M">M タイトル</Title>
      <Title size="S">S タイトル</Title>
      <Title size="XS">XS タイトル</Title>
    </div>
  ),
}

// ---- Required --------------------------------------------------------------

export const Required: Story = {
  name: 'state / required',
  args: {
    size: 'M',
    required: true,
    children: '必須項目のタイトル',
  },
}

// ---- Tags ------------------------------------------------------------------

export const Tags: Story = {
  name: 'example / タグ別',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Title size="XL" tag="h1">
        h1 タイトル
      </Title>
      <Title size="L" tag="h2">
        h2 タイトル
      </Title>
      <Title size="M" tag="h3">
        h3 タイトル
      </Title>
      <Title size="S" tag="h4">
        h4 タイトル
      </Title>
    </div>
  ),
}

// ---- Responsive ------------------------------------------------------------

export const Responsive: Story = {
  name: 'example / レスポンシブ',
  args: {
    size: 'XL',
    sizeSp: 'M',
    children: 'PCはXL、SPはM',
  },
}
