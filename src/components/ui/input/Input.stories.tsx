import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Input } from './Input'

const meta: Meta<typeof Input.Field> = {
  title: 'Components/ui/Input',
  component: Input.Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
テキスト入力コンポーネントです。Compound Component パターンで構成されています。

## 構成要素
- **\`Input\`** — ルートコンテナ（\`display: flex; flex-direction: column\`）
- **\`Input.Header\`** — ラベルとヒントを横並びにするヘッダー行
- **\`Input.Label\`** — ラベルテキスト（\`htmlFor\` で input と紐づける）
- **\`Input.Hint\`** — 補足テキスト（文字数カウンターなど）
- **\`Input.Field\`** — テキスト入力フィールド本体

## 特徴
- **エラー状態** — \`error\` prop でエラースタイルを適用できます
- **アクセシビリティ** — \`focus-visible\` アウトライン、\`disabled\` 状態に対応
- **\`type\`** — \`text\` / \`email\` / \`password\` / \`search\` などHTMLの標準 type がそのまま使えます
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      description: 'インプットタイプ（デフォルト: text）',
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
    },
    error: {
      description: 'エラー状態',
      control: 'boolean',
    },
    disabled: {
      description: '無効状態',
      control: 'boolean',
    },
    placeholder: {
      description: 'プレースホルダーテキスト',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input.Field>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: (args) => (
    <Input>
      <Input.Header>
        <Input.Label htmlFor="input-default">名前</Input.Label>
      </Input.Header>
      <Input.Field {...args} id="input-default" placeholder="テキストを入力してください" />
    </Input>
  ),
}

// ---- Types -----------------------------------------------------------------

export const Types: Story = {
  name: 'example / type別',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input>
        <Input.Header>
          <Input.Label htmlFor="input-text">テキスト</Input.Label>
        </Input.Header>
        <Input.Field id="input-text" type="text" placeholder="山田太郎" />
      </Input>
      <Input>
        <Input.Header>
          <Input.Label htmlFor="input-email">メールアドレス</Input.Label>
        </Input.Header>
        <Input.Field id="input-email" type="email" placeholder="example@email.com" />
      </Input>
      <Input>
        <Input.Header>
          <Input.Label htmlFor="input-password">パスワード</Input.Label>
        </Input.Header>
        <Input.Field id="input-password" type="password" placeholder="8文字以上" />
      </Input>
    </div>
  ),
}

// ---- With hint -------------------------------------------------------------

export const WithHint: Story = {
  name: 'example / ヒント付き',
  render: () => {
    const maxLength = 50
    const [value, setValue] = useState('')
    return (
      <Input>
        <Input.Header>
          <Input.Label htmlFor="input-hint">表示名</Input.Label>
          <Input.Hint>
            {value.length} / {maxLength}
          </Input.Hint>
        </Input.Header>
        <Input.Field
          id="input-hint"
          maxLength={maxLength}
          placeholder="50字以内で入力してください"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Input>
    )
  },
}

// ---- States ----------------------------------------------------------------

export const ErrorState: Story = {
  name: 'state / error',
  render: () => (
    <Input>
      <Input.Header>
        <Input.Label htmlFor="input-error">メールアドレス</Input.Label>
      </Input.Header>
      <Input.Field
        id="input-error"
        type="email"
        error
        defaultValue="invalid-email"
        placeholder="example@email.com"
      />
    </Input>
  ),
}

export const DisabledState: Story = {
  name: 'state / disabled',
  render: () => (
    <Input>
      <Input.Header>
        <Input.Label htmlFor="input-disabled">ユーザーID</Input.Label>
      </Input.Header>
      <Input.Field id="input-disabled" disabled defaultValue="user_12345" />
    </Input>
  ),
}

export const MultiInput: Story = {
  name: 'example / 姓名・マルチ入力',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input>
        <Input.Header>
          <Input.Label>お名前</Input.Label>
        </Input.Header>
        <Input.Row>
          <Input.Field placeholder="姓 (例: 山田)" />
          <Input.Field placeholder="名 (例: 太郎)" />
        </Input.Row>
      </Input>

      <Input>
        <Input.Header>
          <Input.Label>フリガナ</Input.Label>
        </Input.Header>
        <Input.Row>
          <Input.Field placeholder="セイ (例: ヤマダ)" />
          <Input.Field placeholder="メイ (例: タロウ)" />
        </Input.Row>
      </Input>

      <Input>
        <Input.Header>
          <Input.Label>郵便番号</Input.Label>
        </Input.Header>
        <Input.Row style={{ maxWidth: '240px' }}>
          <Input.Field placeholder="100" maxLength={3} style={{ textAlign: 'center' }} />
          <span
            style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-tertiary)' }}
          >
            -
          </span>
          <Input.Field placeholder="0001" maxLength={4} style={{ textAlign: 'center' }} />
        </Input.Row>
      </Input>
    </div>
  ),
}
