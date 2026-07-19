import clsx from 'clsx'
import { Bell, Info, AlertTriangle, AlertCircle } from 'lucide-react'
import { ComponentProps, createContext, useContext } from 'react'
import styles from './Message.module.scss'

// ---- 型定義 ---------------------------------------------------------------

type MessageVariant = 'notice' | 'info' | 'warning' | 'error'

interface MessageContextValue {
  variant: MessageVariant
}

const MessageContext = createContext<MessageContextValue | null>(null)

function useMessageContext() {
  const context = useContext(MessageContext)
  if (!context) {
    throw new Error('Message components must be rendered within a Message provider')
  }
  return context
}

interface MessageProps extends ComponentProps<'div'> {
  /** メッセージの種類（必須） */
  variant: MessageVariant
}

type MessageIconProps = ComponentProps<'span'>
type MessageContentProps = ComponentProps<'div'>
type MessageTitleProps = ComponentProps<'h2'>

interface MessageTextProps extends ComponentProps<'p'> {
  /** テキストを太字にするかどうか */
  isBold?: boolean
}

// ---- コンポーネント --------------------------------------------------------

export const MessageRoot = ({ children, variant, className, ...props }: MessageProps) => {
  return (
    <MessageContext.Provider value={{ variant }}>
      <div className={clsx(styles.root, styles[`root-${variant}`], className)} {...props}>
        {children}
      </div>
    </MessageContext.Provider>
  )
}

export const MessageIcon = ({ children, className, ...props }: MessageIconProps) => {
  const { variant } = useMessageContext()

  const renderDefaultIcon = () => {
    const iconSize = 20
    switch (variant) {
      case 'notice':
        return <Bell size={iconSize} />
      case 'info':
        return <Info size={iconSize} />
      case 'warning':
        return <AlertTriangle size={iconSize} />
      case 'error':
        return <AlertCircle size={iconSize} />
    }
  }

  return (
    <span className={clsx(styles.iconWrapper, className)} {...props}>
      {children ?? renderDefaultIcon()}
    </span>
  )
}

export const MessageContent = ({ children, className, ...props }: MessageContentProps) => {
  return (
    <div className={clsx(styles.content, className)} {...props}>
      {children}
    </div>
  )
}

export const MessageTitle = ({ children, className, ...props }: MessageTitleProps) => {
  return (
    <h2 className={clsx(styles.title, className)} {...props}>
      {children}
    </h2>
  )
}

export const MessageText = ({
  isBold = false,
  children,
  className,
  ...props
}: MessageTextProps) => {
  return (
    <p className={clsx(styles.text, isBold && styles['text-bold'], className)} {...props}>
      {children}
    </p>
  )
}

// ---- Compound Component マッピング -----------------------------------------

export const Message = Object.assign(MessageRoot, {
  Icon: MessageIcon,
  Content: MessageContent,
  Title: MessageTitle,
  Text: MessageText,
})

export default Message
