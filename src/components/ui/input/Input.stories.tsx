import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Input, InputHeader, InputLabel, InputHint, InputField } from './Input'

const meta: Meta<typeof InputField> = {
  title: 'Components/ui/Input',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
テキスト入力コンポーネントです。Compound Component パターンで構成されています。

## 構成要素
- **\`Input\`** — ルートコンテナ（\`display: flex; flex-direction: column\`）
- **\`InputHeader\`** — ラベルとヒントを横並びにするヘッダー行
- **\`InputLabel\`** — ラベルテキスト（\`htmlFor\` で input と紐づける）
- **\`InputHint\`** — 補足テキスト（文字数カウンターなど）
- **\`InputField\`** — テキスト入力フィールド本体

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
type Story = StoryObj<typeof InputField>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: (args) => (
    <Input>
      <InputHeader>
        <InputLabel htmlFor="input-default">名前</InputLabel>
      </InputHeader>
      <InputField {...args} id="input-default" placeholder="テキストを入力してください" />
    </Input>
  ),
}

// ---- Types -----------------------------------------------------------------

export const Types: Story = {
  name: 'example / type別',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input>
        <InputHeader>
          <InputLabel htmlFor="input-text">テキスト</InputLabel>
        </InputHeader>
        <InputField id="input-text" type="text" placeholder="山田太郎" />
      </Input>
      <Input>
        <InputHeader>
          <InputLabel htmlFor="input-email">メールアドレス</InputLabel>
        </InputHeader>
        <InputField id="input-email" type="email" placeholder="example@email.com" />
      </Input>
      <Input>
        <InputHeader>
          <InputLabel htmlFor="input-password">パスワード</InputLabel>
        </InputHeader>
        <InputField id="input-password" type="password" placeholder="8文字以上" />
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
        <InputHeader>
          <InputLabel htmlFor="input-hint">表示名</InputLabel>
          <InputHint>
            {value.length} / {maxLength}
          </InputHint>
        </InputHeader>
        <InputField
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
      <InputHeader>
        <InputLabel htmlFor="input-error">メールアドレス</InputLabel>
      </InputHeader>
      <InputField
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
      <InputHeader>
        <InputLabel htmlFor="input-disabled">ユーザーID</InputLabel>
      </InputHeader>
      <InputField id="input-disabled" disabled defaultValue="user_12345" />
    </Input>
  ),
}
