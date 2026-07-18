import clsx from 'clsx'
import { ComponentProps } from 'react'
import styles from './Label.module.scss'

// ---- 型定義 ---------------------------------------------------------------

export interface LabelProps extends ComponentProps<'span'> {
  /** ラベルのスタイルタイプ（塗りつぶし or 枠線のみ） */
  appearance: 'contained' | 'outlined'
  /** ラベルのテーマカラー */
  color: 'blue' | 'gray' | 'green' | 'yellow' | 'red' | 'white'
  /** ラベルの角の形状（四角 or カプセル型） */
  shape: 'square' | 'pill'
  /** テキストを太字にするか */
  isBold?: boolean
  /** ステータスを示すドットを左側に表示するか */
  isStatus?: boolean
}

// ---- コンポーネント --------------------------------------------------------

/**
 * 属性やカテゴリ、ステータスをバッジのように表現する Label コンポーネント。
 */
export const Label = ({
  children,
  appearance,
  color,
  shape,
  isBold = false,
  isStatus = false,
  className,
  ...props
}: LabelProps) => {
  return (
    <span
      {...props}
      className={clsx(
        styles.root,
        styles[`appearance-${appearance}`],
        styles[`color-${color}`],
        styles[`shape-${shape}`],
        isBold && styles['is-bold'],
        isStatus && styles['is-status'],
        className,
      )}
    >
      {isStatus && <span className={styles.dot} aria-hidden="true" />}
      <span className={styles.text}>{children}</span>
    </span>
  )
}

export default Label
