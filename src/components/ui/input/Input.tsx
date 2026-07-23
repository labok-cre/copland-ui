import clsx from 'clsx'
import { ComponentProps } from 'react'
import styles from './Input.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type InputRootProps = ComponentProps<'div'>
type InputHeaderProps = ComponentProps<'div'>
type InputLabelProps = ComponentProps<'label'>
type InputHintProps = ComponentProps<'p'>

interface InputFieldProps extends ComponentProps<'input'> {
  /** エラー状態 */
  error?: boolean
}

// ---- InputRoot（ルートコンテナ） -----------------------------------------------

/**
 * Input のルートコンテナ。
 * 子に InputHeader・InputField を配置して使用する。
 */
export const InputRoot = ({ children, className, ...props }: InputRootProps) => {
  return (
    <div {...props} className={clsx(styles.root, className)}>
      {children}
    </div>
  )
}

// ---- InputHeader（ヘッダー行） ---------------------------------------------

/**
 * ラベルとヒントテキストを横並びにするヘッダー行。
 * 子に InputLabel・InputHint を配置する。
 */
export const InputHeader = ({ children, className, ...props }: InputHeaderProps) => {
  return (
    <div {...props} className={clsx(styles.header, className)}>
      {children}
    </div>
  )
}

// ---- InputLabel -----------------------------------------------------------

/** インプットのラベル */
export const InputLabel = ({ children, className, ...props }: InputLabelProps) => {
  return (
    <label {...props} className={clsx(styles.label, className)}>
      {children}
    </label>
  )
}

// ---- InputHint ------------------------------------------------------------

/** ヒントや補足テキスト（文字数カウンターなど） */
export const InputHint = ({ children, className, ...props }: InputHintProps) => {
  return (
    <p {...props} className={clsx(styles.hint, className)}>
      {children}
    </p>
  )
}

// ---- InputField -----------------------------------------------------------

/** テキスト入力フィールド本体 */
export const InputField = ({ className, error = false, ...props }: InputFieldProps) => {
  return (
    <input
      {...props}
      type={props.type ?? 'text'}
      className={clsx(styles.field, error && styles['field-error'], className)}
    />
  )
}

// ---- InputRow -------------------------------------------------------------

type InputRowProps = ComponentProps<'div'>

/** 複数のInputFieldを等幅で横並びにするレイアウトコンテナ（姓名入力など） */
export const InputRow = ({ children, className, ...props }: InputRowProps) => {
  return (
    <div {...props} className={clsx(styles.row, className)}>
      {children}
    </div>
  )
}

// ---- Compound Component マッピング -----------------------------------------

export const Input = Object.assign(InputRoot, {
  Header: InputHeader,
  Label: InputLabel,
  Hint: InputHint,
  Field: InputField,
  Row: InputRow,
})

export default Input
