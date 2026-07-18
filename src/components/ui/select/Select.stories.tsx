import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/ui/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
セレクトコンポーネントです。Radix UI の Select をベースにした Compound Component パターンで構成されています。

## 構成要素
- **\`Select\`** — ルートコンテナ（Radix Select.Root をラップ）
- **\`SelectLabel\`** — ラベルテキスト
- **\`SelectValue\`** — 選択値・プレースホルダーの表示
- **\`SelectTrigger\`** — ドロップダウンを開くトリガーボタン
- **\`SelectContent\`** — ドロップダウンのコンテンツ領域
- **\`SelectItem\`** — 選択肢の各アイテム

## 特徴
- **アクセシビリティ** — Radix UI によるキーボード操作・スクリーンリーダー対応
- **アニメーション** — 開閉時のスライドアニメーション
- **選択済み表示** — チェックアイコンで選択中のアイテムを明示
- **disabled 対応** — トリガーおよび個別アイテムの無効化が可能
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  render: () => (
    <Select>
      <SelectLabel htmlFor="select-default">都道府県</SelectLabel>
      <SelectTrigger aria-label="都道府県を選択">
        <SelectValue placeholder="選択してください" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="tokyo">東京都</SelectItem>
        <SelectItem value="osaka">大阪府</SelectItem>
        <SelectItem value="aichi">愛知県</SelectItem>
        <SelectItem value="fukuoka">福岡県</SelectItem>
        <SelectItem value="hokkaido">北海道</SelectItem>
      </SelectContent>
    </Select>
  ),
}

// ---- With default value ----------------------------------------------------

export const WithDefaultValue: Story = {
  name: 'example / デフォルト値あり',
  render: () => (
    <Select defaultValue="osaka">
      <SelectLabel>都道府県</SelectLabel>
      <SelectTrigger aria-label="都道府県を選択" />
      <SelectContent>
        <SelectItem value="tokyo">東京都</SelectItem>
        <SelectItem value="osaka">大阪府</SelectItem>
        <SelectItem value="aichi">愛知県</SelectItem>
        <SelectItem value="fukuoka">福岡県</SelectItem>
        <SelectItem value="hokkaido">北海道</SelectItem>
      </SelectContent>
    </Select>
  ),
}

// ---- Disabled trigger ------------------------------------------------------

export const DisabledTrigger: Story = {
  name: 'state / disabled（トリガー）',
  render: () => (
    <Select disabled>
      <SelectLabel>都道府県</SelectLabel>
      <SelectTrigger aria-label="都道府県を選択" />
      <SelectContent>
        <SelectItem value="tokyo">東京都</SelectItem>
        <SelectItem value="osaka">大阪府</SelectItem>
      </SelectContent>
    </Select>
  ),
}

// ---- Disabled items --------------------------------------------------------

export const DisabledItems: Story = {
  name: 'state / disabled（アイテム）',
  render: () => (
    <Select>
      <SelectLabel>プラン</SelectLabel>
      <SelectTrigger aria-label="プランを選択">
        <SelectValue placeholder="選択してください" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="free">フリープラン</SelectItem>
        <SelectItem value="pro">プロプラン</SelectItem>
        <SelectItem value="enterprise" disabled>
          エンタープライズ（準備中）
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}

// ---- Many items ------------------------------------------------------------

export const ManyItems: Story = {
  name: 'example / 多数アイテム',
  render: () => (
    <Select>
      <SelectLabel>年</SelectLabel>
      <SelectTrigger aria-label="年を選択">
        <SelectValue placeholder="年を選択してください" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 10 }, (_, i) => {
          const year = 2025 - i
          return (
            <SelectItem key={year} value={String(year)}>
              {year}年
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  ),
}
