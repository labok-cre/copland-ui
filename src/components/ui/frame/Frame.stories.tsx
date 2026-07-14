import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Frame } from './Frame'

const meta: Meta<typeof Frame> = {
  title: 'Components/ui/Frame',
  component: Frame,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '汎用性の高いフレーム枠コンポーネントです。枠の内部に表示するコンテンツを自由に配置できます',
      },
    },
  },
  argTypes: {
    children: {
      description: '表示するコンテンツ',
      control: false,
    },
    className: {
      description: 'フレームに指定する追加の CSS クラス名',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Frame>

export const Default: Story = {
  render: (args) => <Frame {...args}>コンテンツ</Frame>,
}
