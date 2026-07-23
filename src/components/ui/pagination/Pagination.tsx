import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ComponentProps } from 'react'
import styles from './Pagination.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type PaginationRootProps = ComponentProps<'nav'>
type PaginationItemProps = ComponentProps<'button'> & {
  /** 現在表示中のページかどうか */
  isCurrent?: boolean
}
type PaginationEllipsisProps = ComponentProps<'span'>
type PaginationPrevNextProps = ComponentProps<'button'>

// ---- PaginationRoot（ルートコンテナ） -------------------------------------------
export const PaginationRoot = ({ children, className, ...props }: PaginationRootProps) => {
  return (
    <nav
      aria-label="ページネーション"
      role="navigation"
      {...props}
      className={clsx(styles.root, className)}
    >
      {children}
    </nav>
  )
}

// ---- PaginationItem --------------------------------------------------------

/** 各ページ番号ボタン */
export const PaginationItem = ({
  children,
  isCurrent = false,
  className,
  ...props
}: PaginationItemProps) => {
  return (
    <button
      {...props}
      type="button"
      aria-current={isCurrent ? 'page' : undefined}
      className={clsx(styles.item, isCurrent && styles['item-current'], className)}
    >
      {children}
    </button>
  )
}

// ---- PaginationPrev --------------------------------------------------------

/** 「前へ」ボタン */
export const PaginationPrev = ({ className, ...props }: PaginationPrevNextProps) => {
  return (
    <button
      aria-label="前のページに移動"
      {...props}
      type="button"
      className={clsx(styles.button, className)}
    >
      <ChevronLeft size={16} />
    </button>
  )
}

// ---- PaginationNext --------------------------------------------------------

/** 「次へ」ボタン */
export const PaginationNext = ({ className, ...props }: PaginationPrevNextProps) => {
  return (
    <button
      aria-label="次のページに移動"
      {...props}
      type="button"
      className={clsx(styles.button, className)}
    >
      <ChevronRight size={16} />
    </button>
  )
}

// ---- PaginationEllipsis ----------------------------------------------------

/** 中間省略記号（...） */
export const PaginationEllipsis = ({
  children = '...',
  className,
  ...props
}: PaginationEllipsisProps) => {
  return (
    <span {...props} className={clsx(styles.ellipsis, className)}>
      {children}
    </span>
  )
}

// ---- Compound Component マッピング -----------------------------------------

export const Pagination = Object.assign(PaginationRoot, {
  Item: PaginationItem,
  Prev: PaginationPrev,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
})

export default Pagination
