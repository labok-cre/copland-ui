import clsx from 'clsx'
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

// ---- アイコン -------------------------------------------------------------

const ChevronLeftIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={16}
    height={16}
  >
    <path
      d="M10 12L6 8l4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={16}
    height={16}
  >
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ---- Pagination（ルートコンテナ） -------------------------------------------

/**
 * Pagination のルートコンテナ。
 * 子に PaginationPrev, PaginationItem, PaginationEllipsis, PaginationNext などを配置する。
 */
export const Pagination = ({ children, className, ...props }: PaginationRootProps) => {
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
      <ChevronLeftIcon />
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
      <ChevronRightIcon />
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
