import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Info } from 'lucide-react'
import { Message } from './Message'

const meta: Meta<typeof Message> = {
  title: 'Components/ui/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
多様な通知、警告、エラー、お知らせをユーザーに示すためのメッセージブロックコンポーネントです。

## 構成要素
- **Message** — 外枠コンテナ。 \`variant\` を指定します。
- **Message.Icon** — アイコンを表示する領域。 \`variant\` に基づいたデフォルトアイコン（Bell, Info, AlertTriangle, AlertCircle）が自動描画されます。任意のカスタム要素も配置可能です。
- **Message.Content** — タイトルや本文を包むラッパー。
- **Message.Title** — 強調されるタイトル見出し (\`h2\`)。
- **Message.Text** — メッセージの本文 (\`p\`)。
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Message>

// ---- Stories --------------------------------------------------------

export const Notice: Story = {
  name: 'お知らせ (Notice)',
  render: () => (
    <Message variant="notice">
      <Message.Icon />
      <Message.Content>
        <Message.Title>新機能が利用可能になりました</Message.Title>
        <Message.Text>管理画面から新しいダッシュボードの機能をお試しいただけます。</Message.Text>
      </Message.Content>
    </Message>
  ),
}

export const InfoVariant: Story = {
  name: '情報 (Info)',
  render: () => (
    <Message variant="info">
      <Message.Icon />
      <Message.Content>
        <Message.Title>システムのアップデートについて</Message.Title>
        <Message.Text>次回の定期メンテナンスは7月25日午前2時〜5時を予定しています。</Message.Text>
      </Message.Content>
    </Message>
  ),
}

export const Warning: Story = {
  name: '警告 (Warning)',
  render: () => (
    <Message variant="warning">
      <Message.Icon />
      <Message.Content>
        <Message.Title>セッションの有効期限が近づいています</Message.Title>
        <Message.Text>
          あと5分で自動的にログアウトされます。作業中の内容を保存してください。
        </Message.Text>
      </Message.Content>
    </Message>
  ),
}

export const ErrorVariant: Story = {
  name: 'エラー (Error)',
  render: () => (
    <Message variant="error">
      <Message.Icon />
      <Message.Content>
        <Message.Title>データの送信に失敗しました</Message.Title>
        <Message.Text>
          通信エラーが発生しました。ネットワーク環境をご確認の上、再度お試しください。
        </Message.Text>
      </Message.Content>
    </Message>
  ),
}

export const SimpleMessage: Story = {
  name: 'シンプルなテキストのみ',
  render: () => (
    <Message variant="info">
      <Message.Icon />
      <Message.Content>
        <Message.Text>通知情報の詳細はこちらからご確認ください。</Message.Text>
      </Message.Content>
    </Message>
  ),
}

export const BoldText: Story = {
  name: '太字本文の組み合わせ',
  render: () => (
    <Message variant="warning">
      <Message.Icon />
      <Message.Content>
        <Message.Title>確認用</Message.Title>
        <Message.Text isBold>この設定は保存されていません！</Message.Text>
        <Message.Text>他のページに遷移する前に設定を保存してください。</Message.Text>
      </Message.Content>
    </Message>
  ),
}

export const CustomIcon: Story = {
  name: 'カスタムアイコンを指定',
  render: () => (
    <Message variant="info">
      <Message.Icon>
        <Info size={20} color="purple" />
      </Message.Icon>
      <Message.Content>
        <Message.Title>特別なお知らせ</Message.Title>
        <Message.Text>カスタムアイコン（パープル色）を設定して描画しています。</Message.Text>
      </Message.Content>
    </Message>
  ),
}
