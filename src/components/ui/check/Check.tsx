import clsx from 'clsx'
import { ComponentProps, useId, useRef, useEffect } from 'react'
import styles from './Check.module.scss'

import { Check as LucideCheck, Minus } from 'lucide-react'

// ---- 型定義 ---------------------------------------------------------------

export interface CheckProps extends ComponentProps<'input'> {
  /** ラベルテキスト */
  label: string
  /** 不確定状態（一部選択） */
  indeterminate?: boolean
}

// ---- コンポーネント --------------------------------------------------------

export const Check = ({ label, className, id, indeterminate = false, ...props }: CheckProps) => {
  const autoId = useId()
  const inputId = id ?? autoId
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <label
      htmlFor={inputId}
      className={clsx(styles.label, className)}
      data-disabled={props.disabled ? '' : undefined}
    >
      <input {...props} ref={inputRef} id={inputId} type="checkbox" className={styles.input} />
      <span className={styles.box} aria-hidden="true">
        {indeterminate ? (
          <Minus className={styles.icon} size={12} strokeWidth={3} />
        ) : (
          <LucideCheck className={styles.icon} size={12} strokeWidth={3} />
        )}
      </span>
      <span className={styles.labelText}>{label}</span>
    </label>
  )
}

export default Check
