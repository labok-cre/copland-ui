import styles from './Spinner.module.scss'

/**
 * ボタン内部で使用するローディングスピナー
 * font-size / color は親の Button から継承する
 */
export function ButtonSpinner() {
  return <span className={styles.spinner} aria-hidden="true" />
}
