import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import styles from './Title.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type TitleSize = 'XS' | 'S' | 'M' | 'L' | 'XL'
type TitleTag = 'h1' | 'h2' | 'h3' | 'h4'

export interface TitleProps {
  /** タイトルのサイズ（必須） */
  size: TitleSize
  /** スマートフォン用のサイズ（任意） */
  sizeSp?: TitleSize
  /** タイトルのタグ（デフォルト: h2） */
  tag?: TitleTag
  /** 必須マークを表示するか */
  required?: boolean
  /** カスタムクラス名 */
  className?: string
}

// ---- コンポーネント --------------------------------------------------------

export const Title = ({
  children,
  size,
  sizeSp,
  tag: Tag = 'h2',
  required = false,
  className,
}: PropsWithChildren<TitleProps>) => {
  return (
    <Tag
      className={clsx(styles[`title-${size}`], sizeSp && styles[`title-sp-${sizeSp}`], className)}
    >
      {children}
      {required && <span className={styles.required}>*</span>}
    </Tag>
  )
}

export default Title
