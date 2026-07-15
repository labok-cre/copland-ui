import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Check } from './Check'

const meta: Meta<typeof Check> = {
  title: 'Components/ui/Check',
  component: Check,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
チェックボックスコンポーネントです。

## 特徴
- **\`useId\` による自動 ID 生成** — \`id\` を省略しても \`label\` と \`input\` が正しく紐づきます
- **indeterminate 状態** — ツリー構造などで一部だけ選択された状態を表現できます
- **スケールアニメーション** — チェック時にアイコンがスプリングで弾むように表示されます
- **アクセシビリティ** — \`focus-visible\` アウトライン、\`disabled\` 状態に対応
        `.trim(),
      },
    },
  },
  argTypes: {
    label: {
      description: 'ラベルテキスト（必須）',
      control: 'text',
    },
    checked: {
      description: 'チェック状態（制御コンポーネントとして使う場合）',
      control: 'boolean',
    },
    defaultChecked: {
      description: '初期チェック状態（非制御コンポーネントとして使う場合）',
      control: 'boolean',
    },
    disabled: {
      description: '無効状態',
      control: 'boolean',
    },
    indeterminate: {
      description: '不確定状態（一部選択）',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Check>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  args: {
    label: 'チェックボックス',
  },
}

// ---- States ----------------------------------------------------------------

export const Checked: Story = {
  name: 'state / checked',
  args: {
    label: 'チェック済み',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  name: 'state / indeterminate',
  args: {
    label: '一部選択（indeterminate）',
    indeterminate: true,
  },
}

export const Disabled: Story = {
  name: 'state / disabled',
  args: {
    label: '無効状態',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  name: 'state / disabled + checked',
  args: {
    label: '無効状態（チェック済み）',
    disabled: true,
    defaultChecked: true,
  },
}

// ---- Group example ---------------------------------------------------------

export const Group: Story = {
  name: 'example / グループ',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Check label="オプション A" defaultChecked />
      <Check label="オプション B" />
      <Check label="オプション C（無効）" disabled />
    </div>
  ),
}
