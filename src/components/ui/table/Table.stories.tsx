import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Components/ui/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
再利用性とカスタマイズ性の高い、Compound Component パターンのテーブルコンポーネントです。

## 構成要素
- **Table** — テーブルのコンテナ (\`table\`)
- **Table.Header** — ヘッダー部分 (\`thead\`)
- **Table.Body** — ボディ部分 (\`tbody\`)
- **Table.Row** — 行 (\`tr\`)
- **Table.HeaderCell** — ヘッダーのセル (\`th\`)
- **Table.CellContent** — ヘッダーのセル内コンテンツ (\`div\`, 横並びのレイアウト用)
- **Table.Cell** — ボディのセル (\`td\`)
- **Table.Link** — セル内の全体リンク (\`a\`)
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

// ---- Stories --------------------------------------------------------

export const Basic: Story = {
  name: '基本構成',
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>名前</Table.HeaderCell>
          <Table.HeaderCell>役割</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>山田 太郎</Table.Cell>
          <Table.Cell>エンジニア</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>佐藤 花子</Table.Cell>
          <Table.Cell>デザイナー</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const WithCellContent: Story = {
  name: 'ヘッダー内でのコンテンツ並び (並び替えアイコン等)',
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Table.CellContent>
              <span>ID</span>
              <span style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>▲</span>
            </Table.CellContent>
          </Table.HeaderCell>
          <Table.HeaderCell>名前</Table.HeaderCell>
          <Table.HeaderCell>登録日</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>山田 太郎</Table.Cell>
          <Table.Cell>2026-07-01</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const EmptyState: Story = {
  name: 'データ空状態',
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>名前</Table.HeaderCell>
          <Table.HeaderCell>役割</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell isEmpty colSpan={3}>
            データが存在しません。
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const ClickableCell: Story = {
  name: 'セル全体がリンク',
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>プロジェクト名</Table.HeaderCell>
          <Table.HeaderCell>リンク先</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell isLink>
            <Table.Link href="#project1">プロジェクトA (ここをクリック)</Table.Link>
          </Table.Cell>
          <Table.Cell>GitHub</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell isLink>
            <Table.Link href="#project2">プロジェクトB (ここをクリック)</Table.Link>
          </Table.Cell>
          <Table.Cell>GitLab</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const ScrollableWithSticky: Story = {
  name: '横スクロールと左端列固定',
  render: () => (
    <div
      style={{
        maxWidth: '600px',
        border: '1px solid var(--border-primary)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <Table isScrollable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell isSticky stickyLeft={0}>
              ID (固定)
            </Table.HeaderCell>
            <Table.HeaderCell>氏名</Table.HeaderCell>
            <Table.HeaderCell style={{ minWidth: '150px' }}>メールアドレス</Table.HeaderCell>
            <Table.HeaderCell style={{ minWidth: '150px' }}>電話番号</Table.HeaderCell>
            <Table.HeaderCell style={{ minWidth: '150px' }}>部署名</Table.HeaderCell>
            <Table.HeaderCell style={{ minWidth: '150px' }}>登録日時</Table.HeaderCell>
            <Table.HeaderCell style={{ minWidth: '100px' }}>ステータス</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell isSticky stickyLeft={0}>
              0001
            </Table.Cell>
            <Table.Cell>山田 太郎</Table.Cell>
            <Table.Cell>yamada.taro@example.com</Table.Cell>
            <Table.Cell>090-1234-5678</Table.Cell>
            <Table.Cell>開発部第1グループ</Table.Cell>
            <Table.Cell>2026-07-19 12:00:00</Table.Cell>
            <Table.Cell>有効</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell isSticky stickyLeft={0}>
              0002
            </Table.Cell>
            <Table.Cell>佐藤 花子</Table.Cell>
            <Table.Cell>sato.hanako@example.com</Table.Cell>
            <Table.Cell>080-8765-4321</Table.Cell>
            <Table.Cell>デザイン部UI/UX</Table.Cell>
            <Table.Cell>2026-07-18 15:30:00</Table.Cell>
            <Table.Cell>有効</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

export const ColoredRowAndCell: Story = {
  name: '行やセルの色変更',
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>名前</Table.HeaderCell>
          <Table.HeaderCell>ステータス</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row style={{ backgroundColor: 'var(--bg-label-green)' }}>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>山田 太郎</Table.Cell>
          <Table.Cell style={{ color: 'var(--text-label-green)', fontWeight: 'bold' }}>
            完了
          </Table.Cell>
        </Table.Row>
        <Table.Row style={{ backgroundColor: 'var(--bg-label-red)' }}>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>佐藤 花子</Table.Cell>
          <Table.Cell style={{ color: 'var(--text-label-red)', fontWeight: 'bold' }}>
            エラー
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>鈴木 次郎</Table.Cell>
          <Table.Cell
            style={{
              backgroundColor: 'var(--bg-label-yellow)',
              color: 'var(--text-label-yellow)',
              fontWeight: 'bold',
            }}
          >
            保留中
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}
