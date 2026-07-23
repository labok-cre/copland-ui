// ---- features ---------------------------------------------------------------
export { default as Header } from './components/features/header/Header'
export { default as Footer } from './components/features/footer/Footer'

// ---- ui: 単一コンポーネント --------------------------------------------------
export { Button } from './components/ui/button/Button'
export { Check, type CheckProps } from './components/ui/check/Check'
export { Frame } from './components/ui/frame/Frame'
export { Label, type LabelProps } from './components/ui/label/Label'
export { Radio, type RadioProps } from './components/ui/radio/Radio'
export { Title, type TitleProps } from './components/ui/title/Title'

// ---- ui: Compound Component -------------------------------------------------
export { default as Breadcrumb } from './components/ui/breadcrumb/Breadcrumb'
export {
  BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/ui/breadcrumb/Breadcrumb'

export { default as Input } from './components/ui/input/Input'
export {
  InputRoot,
  InputHeader,
  InputLabel,
  InputHint,
  InputField,
  InputRow,
} from './components/ui/input/Input'

export { default as Message } from './components/ui/message/Message'
export {
  MessageRoot,
  MessageIcon,
  MessageContent,
  MessageTitle,
  MessageText,
} from './components/ui/message/Message'

export { default as Pagination } from './components/ui/pagination/Pagination'
export {
  PaginationRoot,
  PaginationItem,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
} from './components/ui/pagination/Pagination'

export { default as Select } from './components/ui/select/Select'
export {
  SelectRoot,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from './components/ui/select/Select'

export { default as Table } from './components/ui/table/Table'
export {
  TableRoot,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableCellContent,
  TableLink,
} from './components/ui/table/Table'

export { default as Textarea } from './components/ui/textarea/Textarea'
export {
  TextareaRoot,
  TextareaHeader,
  TextareaLabel,
  TextareaCounter,
  TextareaField,
} from './components/ui/textarea/Textarea'
