import clsx from 'clsx'
import { ComponentProps } from 'react'
import { ButtonSpinner } from '@/components/ui/spinner/Spinner'
import styles from './Button.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type ButtonSize =
  | 'S'
  | 'M'
  | 'L'
  | 'XL'
  | 'S-flex'
  | 'M-flex'
  | 'L-flex'
  | 'XL-flex'
  | 'small'
  | 'medium'
  | 'large'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends ComponentProps<'button'> {
  /** ボタンのサイズ（必須） */
  size: ButtonSize
  /** スマートフォン用のサイズ（任意） */
  sizeSp?: ButtonSize
  /** ボタンのバリアント（必須） */
  variant: ButtonVariant
  /** ローディング状態 */
  isLoading?: boolean
  /** 背景色 */
  backgroundColor?: string
}

// ---- コンポーネント --------------------------------------------------------

export const Button = ({
  children,
  variant,
  size,
  sizeSp,
  className,
  isLoading = false,
  disabled,
  backgroundColor,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={(disabled ?? false) || isLoading}
      style={{ ...style, backgroundColor }}
      className={clsx(
        styles.button,
        styles[`button-${variant}`],
        styles[`button-${size}`],
        sizeSp && styles[`button-sp-${sizeSp}`],
        disabled && styles[`button-${variant}-disabled`],
        isLoading && styles['button-loading'],
        className,
      )}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  )
}

export default Button
