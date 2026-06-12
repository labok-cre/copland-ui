import styles from './WebFooter.module.scss'

interface WebFooterProps {
  siteName: string
}

export default function WebFooter({ siteName }: WebFooterProps) {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        &copy; {currentYear} {siteName}. All rights reserved.
      </p>
    </footer>
  )
}
