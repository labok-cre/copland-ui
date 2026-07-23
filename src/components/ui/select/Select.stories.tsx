import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Select } from './Select'

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
- **\`Select.Label\`** — ラベルテキスト
- **\`Select.Value\`** — 選択値・プレースホルダーの表示
- **\`Select.Trigger\`** — ドロップダウンを開くトリガーボタン
- **\`Select.Content\`** — ドロップダウンのコンテンツ領域
- **\`Select.Item\`** — 選択肢の各アイテム

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
      <Select.Label htmlFor="select-default">都道府県</Select.Label>
      <Select.Trigger aria-label="都道府県を選択">
        <Select.Value placeholder="選択してください" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="tokyo">東京都</Select.Item>
        <Select.Item value="osaka">大阪府</Select.Item>
        <Select.Item value="aichi">愛知県</Select.Item>
        <Select.Item value="fukuoka">福岡県</Select.Item>
        <Select.Item value="hokkaido">北海道</Select.Item>
      </Select.Content>
    </Select>
  ),
}

// ---- With default value ----------------------------------------------------

export const WithDefaultValue: Story = {
  name: 'example / デフォルト値あり',
  render: () => (
    <Select defaultValue="osaka">
      <Select.Label>都道府県</Select.Label>
      <Select.Trigger aria-label="都道府県を選択" />
      <Select.Content>
        <Select.Item value="tokyo">東京都</Select.Item>
        <Select.Item value="osaka">大阪府</Select.Item>
        <Select.Item value="aichi">愛知県</Select.Item>
        <Select.Item value="fukuoka">福岡県</Select.Item>
        <Select.Item value="hokkaido">北海道</Select.Item>
      </Select.Content>
    </Select>
  ),
}

// ---- Disabled trigger ------------------------------------------------------

export const DisabledTrigger: Story = {
  name: 'state / disabled（トリガー）',
  render: () => (
    <Select disabled>
      <Select.Label>都道府県</Select.Label>
      <Select.Trigger aria-label="都道府県を選択" />
      <Select.Content>
        <Select.Item value="tokyo">東京都</Select.Item>
        <Select.Item value="osaka">大阪府</Select.Item>
      </Select.Content>
    </Select>
  ),
}

// ---- Disabled items --------------------------------------------------------

export const DisabledItems: Story = {
  name: 'state / disabled（アイテム）',
  render: () => (
    <Select>
      <Select.Label>プラン</Select.Label>
      <Select.Trigger aria-label="プランを選択">
        <Select.Value placeholder="選択してください" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="free">フリープラン</Select.Item>
        <Select.Item value="pro">プロプラン</Select.Item>
        <Select.Item value="enterprise" disabled>
          エンタープライズ（準備中）
        </Select.Item>
      </Select.Content>
    </Select>
  ),
}

// ---- Many items ------------------------------------------------------------

export const ManyItems: Story = {
  name: 'example / 多数アイテム',
  render: () => (
    <Select>
      <Select.Label>年</Select.Label>
      <Select.Trigger aria-label="年を選択">
        <Select.Value placeholder="年を選択してください" />
      </Select.Trigger>
      <Select.Content>
        {Array.from({ length: 10 }, (_, i) => {
          const year = 2025 - i
          return (
            <Select.Item key={year} value={String(year)}>
              {year}年
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select>
  ),
}
