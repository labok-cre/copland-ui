import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight } from 'lucide-react'
import { ComponentProps } from 'react'
import styles from './Breadcrumb.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type BreadcrumbRootProps = ComponentProps<'nav'>
type BreadcrumbListProps = ComponentProps<'ol'>
type BreadcrumbItemProps = ComponentProps<'li'>
type BreadcrumbLinkProps = ComponentProps<'a'> & {
  /** Next.jsのLink等カスタムコンポーネントを子要素として描画する場合にtrueにする */
  asChild?: boolean
}
type BreadcrumbPageProps = ComponentProps<'span'>
type BreadcrumbSeparatorProps = ComponentProps<'li'>

// ---- BreadcrumbRoot (ルート) ------------------------------------------------

/**
 * パンくずリストのコンテナ。
 * アクセシビリティのために `aria-label="パンくずリスト"` を持っています。
 */
export const BreadcrumbRoot = ({ className, ...props }: BreadcrumbRootProps) => {
  return <nav aria-label="パンくずリスト" className={clsx(styles.root, className)} {...props} />
}

// ---- BreadcrumbList (リスト) -----------------------------------------------

/** 項目とセパレータを並べるための ordered list */
export const BreadcrumbList = ({ className, ...props }: BreadcrumbListProps) => {
  return <ol className={clsx(styles.list, className)} {...props} />
}

// ---- BreadcrumbItem (項目) -------------------------------------------------

/** リンクや現在のページ要素を格納するリストアイテム */
export const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => {
  return <li className={clsx(styles.item, className)} {...props} />
}

// ---- BreadcrumbLink (リンク) -----------------------------------------------

/**
 * 各階層へのリンク要素。
 * `asChild` を指定することで、Next.js の `Link` などのカスタムコンポーネントとして動作させることができます。
 */
export const BreadcrumbLink = ({ asChild = false, className, ...props }: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : 'a'
  return <Comp className={clsx(styles.link, className)} {...props} />
}

// ---- BreadcrumbPage (現在地) -----------------------------------------------

/** 現在のページ位置を示すテキスト。自動的に `aria-current="page"` が設定されます。 */
export const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clsx(styles.page, className)}
      {...props}
    />
  )
}

// ---- BreadcrumbSeparator (区切り線) -----------------------------------------

/**
 * 項目と項目の間の区切り文字・記号。
 * スクリーンリーダーから隠すために自動的に `aria-hidden="true"` が設定されます。
 */
export const BreadcrumbSeparator = ({
  children = <ChevronRight size={12} />,
  className,
  ...props
}: BreadcrumbSeparatorProps) => {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={clsx(styles.separator, className)}
      {...props}
    >
      {children}
    </li>
  )
}

// ---- Compound Component マッピング -----------------------------------------

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
})

export default Breadcrumb
