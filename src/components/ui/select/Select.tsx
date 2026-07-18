import clsx from 'clsx'
import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDown, Check } from 'lucide-react'
import { ComponentProps } from 'react'
import styles from './Select.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type SelectRootProps = ComponentProps<typeof RadixSelect.Root> & {
  className?: string
}
type SelectLabelProps = ComponentProps<'label'>
type SelectTriggerProps = ComponentProps<typeof RadixSelect.Trigger>
type SelectContentProps = ComponentProps<typeof RadixSelect.Content>
type SelectItemProps = ComponentProps<typeof RadixSelect.Item>

// ---- Select（ルートコンテナ） ----------------------------------------------

/**
 * Select のルートコンテナ。
 * 子に SelectLabel・SelectTrigger・SelectContent を配置して使用する。
 */
export const Select = ({ children, className, ...props }: SelectRootProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <RadixSelect.Root {...props}>{children}</RadixSelect.Root>
    </div>
  )
}

// ---- SelectLabel ----------------------------------------------------------

/** セレクトのラベル */
export const SelectLabel = ({ children, className, ...props }: SelectLabelProps) => {
  return (
    <label {...props} className={clsx(styles.label, className)}>
      {children}
    </label>
  )
}

// ---- SelectValue --------------------------------------------------------

/** 選択中の値を表示するプレースホルダー */
export const SelectValue = RadixSelect.Value

// ---- SelectTrigger --------------------------------------------------------

/** セレクトのトリガーボタン（クリックでドロップダウンが開く） */
export const SelectTrigger = ({ children, className, ...props }: SelectTriggerProps) => {
  return (
    <RadixSelect.Trigger {...props} className={clsx(styles.trigger, className)}>
      <span className={styles.triggerText}>{children ?? <RadixSelect.Value />}</span>
      <RadixSelect.Icon className={styles.icon}>
        <ChevronDown size={16} />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  )
}

// ---- SelectContent --------------------------------------------------------

/** ドロップダウンのコンテンツ領域 */
export const SelectContent = ({ children, className, ...props }: SelectContentProps) => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        {...props}
        position="popper"
        side="bottom"
        sideOffset={4}
        className={clsx(styles.content, className)}
      >
        <RadixSelect.Viewport className={styles.viewport}>{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  )
}

// ---- SelectItem -----------------------------------------------------------

/** ドロップダウン内の選択肢アイテム */
export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <RadixSelect.Item {...props} className={clsx(styles.item, className)}>
      <RadixSelect.ItemIndicator className={styles.itemIndicator}>
        <Check size={16} />
      </RadixSelect.ItemIndicator>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  )
}
