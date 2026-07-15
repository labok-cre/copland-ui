import { ComponentProps, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Header.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type HeaderRootProps = ComponentProps<'header'>

interface HeaderLogoProps extends ComponentProps<'div'> {
  /** ロゴ画像の URL。指定すると `<img>` を自動生成します。 */
  src?: string
  /** `src` を指定したときの alt テキスト。 */
  alt?: string
  /** テキストや JSX をそのまま渡す場合は children を使います。 */
  children?: ReactNode
}

type HeaderNavProps = ComponentProps<'nav'>

interface HeaderNavItemProps extends ComponentProps<'a'> {
  /** リンク先 URL */
  href: string
}

// ---- サブコンポーネント ----------------------------------------------------

const HeaderLogo = ({ src, alt = '', children, className, ...props }: HeaderLogoProps) => {
  const content = src ? <img src={src} alt={alt} className={styles.logoImage} /> : children

  return (
    <div {...props} className={clsx(styles.logo, className)}>
      {content}
    </div>
  )
}

const HeaderNav = ({ children, className, ...props }: HeaderNavProps) => (
  <nav {...props} className={clsx(styles.nav, className)}>
    {children}
  </nav>
)

const HeaderNavItem = ({ href, children, className, ...props }: HeaderNavItemProps) => (
  <a {...props} href={href} className={clsx(styles.link, className)}>
    {children}
  </a>
)

// ---- ルートコンポーネント --------------------------------------------------

const HeaderRoot = ({ children, className, ...props }: HeaderRootProps) => (
  <header {...props} className={clsx(styles.header, className)}>
    {children}
  </header>
)

// ---- Compound Component として export ------------------------------------

export const Header = Object.assign(HeaderRoot, {
  Logo: HeaderLogo,
  Nav: HeaderNav,
  NavItem: HeaderNavItem,
})

export default Header
