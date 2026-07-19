import clsx from 'clsx'
import { ComponentProps } from 'react'
import styles from './Table.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type TableHeaderProps = ComponentProps<'thead'>
type TableBodyProps = ComponentProps<'tbody'>
type TableRowProps = ComponentProps<'tr'>
type TableCellContentProps = ComponentProps<'div'>
type TableLinkProps = ComponentProps<'a'>

interface TableProps extends ComponentProps<'table'> {
  /** 横スクロールを有効にするかどうか */
  isScrollable?: boolean
}
interface TableHeaderCellProps extends ComponentProps<'th'> {
  /** 列を左端に固定するかどうか */
  isSticky?: boolean
  /** 左端からの固定位置 (例: 0, 120, '100px' など。デフォルトは 0) */
  stickyLeft?: number | string
}
interface TableCellProps extends ComponentProps<'td'> {
  /** セルが空状態かどうか */
  isEmpty?: boolean
  /** セル全体がリンクかどうか。true の場合はセルのパディングがリセットされ、TableLinkが全体に広がります。 */
  isLink?: boolean
  /** 列を左端に固定するかどうか */
  isSticky?: boolean
  /** 左端からの固定位置 (例: 0, 120, '100px' など。デフォルトは 0) */
  stickyLeft?: number | string
}

// ---- コンポーネント --------------------------------------------------------

export const TableRoot = ({ children, className, isScrollable = false, ...props }: TableProps) => {
  const tableNode = (
    <table className={clsx(styles.root, className)} {...props}>
      {children}
    </table>
  )

  if (isScrollable) {
    return <div className={styles.scrollContainer}>{tableNode}</div>
  }

  return tableNode
}

export const TableHeader = ({ children, className, ...props }: TableHeaderProps) => {
  return (
    <thead className={clsx(styles.header, className)} {...props}>
      {children}
    </thead>
  )
}

export const TableBody = ({ children, className, ...props }: TableBodyProps) => {
  return (
    <tbody className={clsx(styles.body, className)} {...props}>
      {children}
    </tbody>
  )
}

export const TableRow = ({ children, className, ...props }: TableRowProps) => {
  return (
    <tr className={clsx(styles.row, className)} {...props}>
      {children}
    </tr>
  )
}

export const TableHeaderCell = ({
  children,
  className,
  isSticky = false,
  stickyLeft = 0,
  style,
  ...props
}: TableHeaderCellProps) => {
  return (
    <th
      className={clsx(styles.headerCell, isSticky && styles['headerCell-sticky'], className)}
      style={{
        ...style,
        ...(isSticky
          ? { left: typeof stickyLeft === 'number' ? `${stickyLeft}px` : stickyLeft }
          : {}),
      }}
      {...props}
    >
      {children}
    </th>
  )
}

export const TableCellContent = ({ children, className, ...props }: TableCellContentProps) => {
  return (
    <div className={clsx(styles.cellContent, className)} {...props}>
      {children}
    </div>
  )
}

export const TableCell = ({
  children,
  isEmpty = false,
  isLink = false,
  isSticky = false,
  stickyLeft = 0,
  className,
  style,
  ...props
}: TableCellProps) => {
  return (
    <td
      className={clsx(
        styles.cell,
        isEmpty && styles['cell-empty'],
        isLink && styles['cell-hasLink'],
        isSticky && styles['cell-sticky'],
        className,
      )}
      style={{
        ...style,
        ...(isSticky
          ? { left: typeof stickyLeft === 'number' ? `${stickyLeft}px` : stickyLeft }
          : {}),
      }}
      {...props}
    >
      {children}
    </td>
  )
}

export const TableLink = ({ children, className, ...props }: TableLinkProps) => {
  return (
    <a className={clsx(styles.link, className)} {...props}>
      {children}
    </a>
  )
}

// ---- Compound Component マッピング -----------------------------------------

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  HeaderCell: TableHeaderCell,
  Cell: TableCell,
  CellContent: TableCellContent,
  Link: TableLink,
})

export default Table
