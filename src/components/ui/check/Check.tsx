import clsx from 'clsx'
import { ComponentProps, useId, useRef, useEffect } from 'react'
import styles from './Check.module.scss'

// ---- 型定義 ---------------------------------------------------------------

export interface CheckProps extends ComponentProps<'input'> {
  /** ラベルテキスト */
  label: string
  /** 不確定状態（一部選択） */
  indeterminate?: boolean
}

// ---- アイコン ---------------------------------------------------------------

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <polyline
      points="1.5,5 4.5,8 10.5,1.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IndeterminateIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      x1="1.5"
      y1="5"
      x2="10.5"
      y2="5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

// ---- コンポーネント --------------------------------------------------------

export const Check = ({
  label,
  className,
  id,
  indeterminate = false,
  ...props
}: CheckProps) => {
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
      <input
        {...props}
        ref={inputRef}
        id={inputId}
        type="checkbox"
        className={styles.input}
      />
      <span className={styles.box} aria-hidden="true">
        {indeterminate ? (
          <IndeterminateIcon className={styles.icon} />
        ) : (
          <CheckIcon className={styles.icon} />
        )}
      </span>
      <span className={styles.labelText}>{label}</span>
    </label>
  )
}

export default Check
