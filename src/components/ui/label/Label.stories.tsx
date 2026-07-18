import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'Components/ui/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
ラベル（バッジ）コンポーネントです。ステータス表示やタグ、カテゴリ分類などに使用します。

## 特徴
- **2種類の見た目** — \`contained\`（塗りつぶし）と \`outlined\`（枠線のみ）を選択可能
- **5つのカラー** — プロジェクトのテーマカラー（\`blue\`, \`gray\`, \`green\`, \`yellow\`, \`red\`）に準拠
- **2種類の形状** — \`square\`（角丸四角形）と \`pill\`（カプセル型）を選択可能
- **ステータスドット** — \`isStatus\` を付与すると、テキストの左側にステータスドットが自動で配置されます
        `.trim(),
      },
    },
  },
  argTypes: {
    appearance: {
      description: 'ラベルのスタイルタイプ',
      control: 'select',
      options: ['contained', 'outlined'],
    },
    color: {
      description: 'テーマカラー',
      control: 'select',
      options: ['blue', 'gray', 'green', 'yellow', 'red', 'white'],
    },
    shape: {
      description: '角の形状',
      control: 'select',
      options: ['square', 'pill'],
    },
    isBold: {
      description: '太字にするか',
      control: 'boolean',
    },
    isStatus: {
      description: 'ステータスドットを表示するか',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

// ---- Default ---------------------------------------------------------------

export const Default: Story = {
  name: 'default',
  args: {
    appearance: 'contained',
    color: 'blue',
    shape: 'square',
    children: 'ラベル',
  },
}

// ---- Colors ----------------------------------------------------------------

export const Colors: Story = {
  name: 'example / カラーバリエーション',
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Label appearance="contained" color="blue" shape="square">
        Blue
      </Label>
      <Label appearance="contained" color="gray" shape="square">
        Gray
      </Label>
      <Label appearance="contained" color="green" shape="square">
        Green
      </Label>
      <Label appearance="contained" color="yellow" shape="square">
        Yellow
      </Label>
      <Label appearance="contained" color="red" shape="square">
        Red
      </Label>
      <Label appearance="contained" color="white" shape="square">
        White
      </Label>
    </div>
  ),
}

// ---- Shapes ----------------------------------------------------------------

export const Shapes: Story = {
  name: 'example / 形状（square / pill）',
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Label appearance="contained" color="blue" shape="square">
        Square
      </Label>
      <Label appearance="contained" color="blue" shape="pill">
        Pill
      </Label>
    </div>
  ),
}

// ---- Appearances -----------------------------------------------------------

export const Appearances: Story = {
  name: 'example / スタイル（contained / outlined）',
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Label appearance="contained" color="green" shape="pill">
        Contained
      </Label>
      <Label appearance="outlined" color="green" shape="pill">
        Outlined
      </Label>
    </div>
  ),
}

// ---- Status ----------------------------------------------------------------

export const Status: Story = {
  name: 'example / ステータスドットあり',
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Label appearance="contained" color="blue" shape="square" isStatus>
        お知らせ
      </Label>
      <Label appearance="contained" color="green" shape="square" isStatus>
        特集
      </Label>
      <Label appearance="contained" color="yellow" shape="square" isStatus>
        イベント
      </Label>
      <Label appearance="contained" color="red" shape="square" isStatus>
        メンテナンス
      </Label>
    </div>
  ),
}
