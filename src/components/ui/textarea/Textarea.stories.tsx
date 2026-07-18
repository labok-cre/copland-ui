import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { Textarea, TextareaHeader, TextareaLabel, TextareaCounter, TextareaField } from './Textarea'

const meta: Meta<typeof TextareaField> = {
  title: 'Components/ui/Textarea',
  component: TextareaField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
テキストエリアコンポーネントです。Compound Component パターンで構成されています。

## 構成要素
- **\`Textarea\`** — ルートコンテナ（\`display: flex; flex-direction: column\`）
- **\`TextareaHeader\`** — ラベルとカウンターを横並びにするヘッダー行
- **\`TextareaLabel\`** — ラベルテキスト（\`htmlFor\` で input と紐づける）
- **\`TextareaCounter\`** — 文字数カウンターなどを表示するテキスト
- **\`TextareaField\`** — テキスト入力フィールド本体

## 特徴
- **自動高さ調整** — \`autosize\` ライブラリで入力に応じて高さが伸縮します
- **\`field-sizing: content\`** — 対応ブラウザでは CSS のみで高さ調整（autosize の fallback）
- **\`minRows\`** — 最小表示行数を指定できます（デフォルト: 2）
- **エラー状態** — \`error\` prop でエラースタイルを適用できます
- **アクセシビリティ** — \`focus-visible\` アウトライン、\`disabled\` 状態に対応
        `.trim(),
      },
    },
  },
  argTypes: {
    minRows: {
      description: '最小表示行数（デフォルト: 2）',
      control: { type: 'number', min: 1 },
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
type Story = StoryObj<typeof TextareaField>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: (args) => (
    <Textarea>
      <TextareaHeader>
        <TextareaLabel htmlFor="textarea-default">メモ</TextareaLabel>
      </TextareaHeader>
      <TextareaField {...args} id="textarea-default" placeholder="テキストを入力してください" />
    </Textarea>
  ),
}

// ---- With counter ----------------------------------------------------------

export const WithCounter: Story = {
  name: 'example / 文字数カウンター',
  render: () => {
    const maxLength = 200
    const [value, setValue] = useState('')
    return (
      <Textarea>
        <TextareaHeader>
          <TextareaLabel htmlFor="textarea-counter">コメント</TextareaLabel>
          <TextareaCounter>
            {value.length} / {maxLength}
          </TextareaCounter>
        </TextareaHeader>
        <TextareaField
          id="textarea-counter"
          maxLength={maxLength}
          placeholder="200字以内で入力してください"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Textarea>
    )
  },
}

// ---- States ----------------------------------------------------------------

export const ErrorState: Story = {
  name: 'state / error',
  render: () => (
    <Textarea>
      <TextareaHeader>
        <TextareaLabel htmlFor="textarea-error">フィードバック</TextareaLabel>
      </TextareaHeader>
      <TextareaField
        id="textarea-error"
        error
        defaultValue="入力内容にエラーがあります。"
        placeholder="テキストを入力してください"
      />
    </Textarea>
  ),
}

export const DisabledState: Story = {
  name: 'state / disabled',
  render: () => (
    <Textarea>
      <TextareaHeader>
        <TextareaLabel htmlFor="textarea-disabled">備考</TextareaLabel>
      </TextareaHeader>
      <TextareaField
        id="textarea-disabled"
        disabled
        defaultValue="この項目は編集できません。"
        placeholder="テキストを入力してください"
      />
    </Textarea>
  ),
}

// ---- Min rows --------------------------------------------------------------

export const MinRows: Story = {
  name: 'example / minRows',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Textarea>
        <TextareaHeader>
          <TextareaLabel htmlFor="textarea-rows-2">minRows=2（デフォルト）</TextareaLabel>
        </TextareaHeader>
        <TextareaField id="textarea-rows-2" placeholder="2行分の高さからスタート" />
      </Textarea>
      <Textarea>
        <TextareaHeader>
          <TextareaLabel htmlFor="textarea-rows-5">minRows=5</TextareaLabel>
        </TextareaHeader>
        <TextareaField id="textarea-rows-5" minRows={5} placeholder="5行分の高さからスタート" />
      </Textarea>
    </div>
  ),
}
