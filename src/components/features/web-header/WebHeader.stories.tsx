import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import WebHeader from './WebHeader'

const meta: Meta<typeof WebHeader> = {
  title: 'Features/WebHeader',
  component: WebHeader,
}

export default meta
type Story = StoryObj<typeof WebHeader>

export const Default: Story = {
  args: {
    siteName: 'My Component Library',
  },
}
