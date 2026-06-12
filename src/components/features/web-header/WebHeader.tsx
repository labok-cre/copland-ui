import styles from './WebHeader.module.scss'

interface WebHeaderProps {
  siteName: string
}

export default function WebHeader({ siteName }: WebHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{siteName}</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          ホーム
        </a>
        <a href="/test" className={styles.link}>
          テスト
        </a>
        <a href="/test2" className={styles.link}>
          テスト2
        </a>
      </nav>
    </header>
  )
}
