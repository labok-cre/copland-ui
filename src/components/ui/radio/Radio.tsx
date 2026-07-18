import clsx from 'clsx'
import { ComponentProps, useId } from 'react'
import styles from './Radio.module.scss'

// ---- 型定義 ---------------------------------------------------------------

export interface RadioProps extends ComponentProps<'input'> {
  /** ラベルテキスト */
  label: string
}

// ---- コンポーネント --------------------------------------------------------

export const Radio = ({ label, className, id, disabled, ...props }: RadioProps) => {
  const autoId = useId()
  const inputId = id ?? autoId

  return (
    <label
      htmlFor={inputId}
      className={clsx(styles.label, className)}
      data-disabled={disabled ? '' : undefined}
    >
      <input className={styles.input} {...props} id={inputId} type="radio" disabled={disabled} />
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.labelText}>{label}</span>
    </label>
  )
}

export default Radio
