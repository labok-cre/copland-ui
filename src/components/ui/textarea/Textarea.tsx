import clsx from 'clsx'
import autosize from 'autosize'
import { ComponentProps, useCallback } from 'react'
import styles from './Textarea.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type TextareaRootProps = ComponentProps<'div'>
type TextareaHeaderProps = ComponentProps<'div'>
type TextareaLabelProps = ComponentProps<'label'>
type TextareaCounterProps = ComponentProps<'p'>

interface TextareaFieldProps extends ComponentProps<'textarea'> {
  /** 最小表示行数（デフォルト: 2） */
  minRows?: number
  /** エラー状態 */
  error?: boolean
}

// ---- Textarea（ルートコンテナ） -------------------------------------------

/**
 * Textarea のルートコンテナ。
 * 子に TextareaHeader・TextareaField を配置して使用する。
 */
export const Textarea = ({ children, className, ...props }: TextareaRootProps) => {
  return (
    <div {...props} className={clsx(styles.root, className)}>
      {children}
    </div>
  )
}

// ---- TextareaHeader（ヘッダー行） -----------------------------------------

/**
 * ラベルとカウンターを横並びにするヘッダー行。
 * 子に TextareaLabel・TextareaCounter を配置する。
 */
export const TextareaHeader = ({ children, className, ...props }: TextareaHeaderProps) => {
  return (
    <div {...props} className={clsx(styles.header, className)}>
      {children}
    </div>
  )
}

// ---- TextareaLabel --------------------------------------------------------

/** テキストエリアのラベル */
export const TextareaLabel = ({ children, className, ...props }: TextareaLabelProps) => {
  return (
    <label {...props} className={clsx(styles.label, className)}>
      {children}
    </label>
  )
}

// ---- TextareaCounter ------------------------------------------------------

/** 文字数カウンター表示用テキスト */
export const TextareaCounter = ({ children, className, ...props }: TextareaCounterProps) => {
  return (
    <p {...props} className={clsx(styles.counter, className)}>
      {children}
    </p>
  )
}

// ---- TextareaField --------------------------------------------------------

/**
 * テキスト入力フィールド本体。
 * `field-sizing: content` が Safari / Firefox で広く使えるようになるまでの間、
 * autosize ライブラリで高さを自動調整する。
 */
export const TextareaField = ({
  className,
  disabled,
  minRows = 2,
  error = false,
  ...props
}: TextareaFieldProps) => {
  const lineHeight = 22 // 基本行高さ (px)
  const paddingY = 24 // 上下パディング合計 (12px × 2)
  const minHeight = lineHeight * minRows + paddingY

  const refCallback = useCallback((node: HTMLTextAreaElement | null) => {
    if (node) autosize(node)
  }, [])

  return (
    <textarea
      {...props}
      ref={refCallback}
      disabled={disabled}
      style={{ minHeight, ...props.style }}
      className={clsx(styles.field, error && styles['field-error'], className)}
    />
  )
}
