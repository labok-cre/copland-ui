import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/ui/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
ラジオボタンコンポーネントです。

## 特徴
- **\`useId\` による自動 ID 生成** — \`id\` を省略しても \`label\` と \`input\` が正しく紐づきます
- **スケールアニメーション** — 選択時に内側のドットがスプリングで弾むように表示されます
- **アクセシビリティ** — \`focus-visible\` アウトライン、\`disabled\` 状態に対応
- **グループ利用** — \`name\` 属性を共有することで排他的選択が機能します
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
    name: {
      description: 'グループ名（排他的選択のために同じ name を共有する）',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  args: {
    label: 'ラジオボタン',
  },
}

// ---- States ----------------------------------------------------------------

export const Checked: Story = {
  name: 'state / checked',
  args: {
    label: '選択済み',
    defaultChecked: true,
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
    label: '無効状態（選択済み）',
    disabled: true,
    defaultChecked: true,
  },
}

// ---- Group example ---------------------------------------------------------

export const Group: Story = {
  name: 'example / グループ',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="オプション A" name="example-group" defaultChecked />
      <Radio label="オプション B" name="example-group" />
      <Radio label="オプション C（無効）" name="example-group" disabled />
    </div>
  ),
}
