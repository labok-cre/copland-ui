import styles from './Button.module.scss'

interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export default function Button({ label, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  )
}
