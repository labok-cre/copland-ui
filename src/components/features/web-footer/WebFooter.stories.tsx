import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import WebFooter from './WebFooter'

const meta: Meta<typeof WebFooter> = {
  title: 'Features/WebFooter',
  component: WebFooter,
}

export default meta
type Story = StoryObj<typeof WebFooter>

export const Default: Story = {
  args: {
    siteName: 'My Component Library',
  },
}
