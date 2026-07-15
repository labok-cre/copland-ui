import { ComponentProps, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type FooterRootProps = ComponentProps<'footer'>

interface FooterCopyProps extends ComponentProps<'p'> {
  /**
   * サイト名。コピーライト表記に使われます。
   * `children` を渡した場合はそちらが優先されます。
   */
  siteName?: string
  /** 自由なコピーライトテキストを渡す場合に使います。 */
  children?: ReactNode
}

// ---- サブコンポーネント ----------------------------------------------------

const FooterCopy = ({ siteName, children, className, ...props }: FooterCopyProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <p {...props} className={clsx(styles.copy, className)}>
      {children ?? `© ${currentYear} ${siteName}`}
    </p>
  )
}

// ---- ルートコンポーネント --------------------------------------------------

const FooterRoot = ({ children, className, ...props }: FooterRootProps) => (
  <footer {...props} className={clsx(styles.footer, className)}>
    {children}
  </footer>
)

// ---- Compound Component として export ------------------------------------

export const Footer = Object.assign(FooterRoot, {
  Copy: FooterCopy,
})

export default Footer
