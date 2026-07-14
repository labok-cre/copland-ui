import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
汎用ボタンコンポーネントです。

## 特徴
- **3種類のバリアント** — \`primary\` / \`secondary\` / \`tertiary\`
- **8種類のサイズ** — \`S\` / \`M\` / \`L\` / \`XL\` とそれぞれの全幅版 \`*-flex\`
- **ローディング状態** — \`isLoading\` を渡すと内部に \`ButtonSpinner\` を表示し、クリックを無効化
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      description: 'ボタンのバリアント（必須）',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      description: 'ボタンのサイズ（必須）',
      control: 'select',
      options: [
        'S',
        'M',
        'L',
        'XL',
        'S-flex',
        'M-flex',
        'L-flex',
        'XL-flex',
        'small',
        'medium',
        'large',
      ],
    },
    isLoading: {
      description: 'ローディング状態',
      control: 'boolean',
    },
    disabled: {
      description: '無効状態',
      control: 'boolean',
    },
    backgroundColor: {
      description: '背景色',
      control: 'color',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// ---- Variants -------------------------------------------------------

export const Primary: Story = {
  name: 'primary',
  args: { variant: 'primary', size: 'M', children: 'Primary Button' },
}

export const Secondary: Story = {
  name: 'secondary',
  args: { variant: 'secondary', size: 'M', children: 'Secondary Button' },
}

export const Tertiary: Story = {
  name: 'tertiary',
  args: { variant: 'tertiary', size: 'M', children: 'Tertiary Button' },
}

// ---- Sizes ----------------------------------------------------------

export const SizeS: Story = {
  name: 'size / S',
  args: { variant: 'primary', size: 'S', children: 'Small' },
}

export const SizeM: Story = {
  name: 'size / M',
  args: { variant: 'primary', size: 'M', children: 'Medium' },
}

export const SizeL: Story = {
  name: 'size / L',
  args: { variant: 'primary', size: 'L', children: 'Large' },
}

export const SizeXL: Story = {
  name: 'size / XL',
  args: { variant: 'primary', size: 'XL', children: 'X-Large' },
}

export const SizeMFlex: Story = {
  name: 'size / M-flex（全幅）',
  args: { variant: 'primary', size: 'M-flex', children: 'Full Width Button' },
}

// ---- States ---------------------------------------------------------

export const Loading: Story = {
  name: 'state / loading',
  args: { variant: 'primary', size: 'M', isLoading: true, children: 'Loading...' },
}

export const Disabled: Story = {
  name: 'state / disabled',
  args: { variant: 'primary', size: 'M', disabled: true, children: 'Disabled' },
}

export const DisabledSecondary: Story = {
  name: 'state / disabled (secondary)',
  args: { variant: 'secondary', size: 'M', disabled: true, children: 'Disabled' },
}
