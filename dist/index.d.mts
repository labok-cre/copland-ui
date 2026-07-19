import * as react from 'react';
import { ComponentProps, ReactNode } from 'react';

type ButtonSize = 'S' | 'M' | 'L' | 'XL' | 'S-flex' | 'M-flex' | 'L-flex' | 'XL-flex' | 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps extends ComponentProps<'button'> {
    /** ボタンのサイズ（必須） */
    size: ButtonSize;
    /** スマートフォン用のサイズ（任意） */
    sizeSp?: ButtonSize;
    /** ボタンのバリアント（必須） */
    variant: ButtonVariant;
    /** ローディング状態 */
    isLoading?: boolean;
    /** 背景色 */
    backgroundColor?: string;
}
declare const Button: ({ children, variant, size, sizeSp, className, isLoading, disabled, backgroundColor, style, ...props }: ButtonProps) => react.JSX.Element;

type HeaderRootProps = ComponentProps<'header'>;
interface HeaderLogoProps extends ComponentProps<'div'> {
    /** ロゴ画像の URL。指定すると `<img>` を自動生成します。 */
    src?: string;
    /** `src` を指定したときの alt テキスト。 */
    alt?: string;
    /** テキストや JSX をそのまま渡す場合は children を使います。 */
    children?: ReactNode;
}
type HeaderNavProps = ComponentProps<'nav'>;
interface HeaderNavItemProps extends ComponentProps<'a'> {
    /** リンク先 URL */
    href: string;
}
declare const Header: (({ children, className, ...props }: HeaderRootProps) => react.JSX.Element) & {
    Logo: ({ src, alt, children, className, ...props }: HeaderLogoProps) => react.JSX.Element;
    Nav: ({ children, className, ...props }: HeaderNavProps) => react.JSX.Element;
    NavItem: ({ href, children, className, ...props }: HeaderNavItemProps) => react.JSX.Element;
};

type FooterRootProps = ComponentProps<'footer'>;
interface FooterCopyProps extends ComponentProps<'p'> {
    /**
     * サイト名。コピーライト表記に使われます。
     * `children` を渡した場合はそちらが優先されます。
     */
    siteName?: string;
    /** 自由なコピーライトテキストを渡す場合に使います。 */
    children?: ReactNode;
}
declare const Footer: (({ children, className, ...props }: FooterRootProps) => react.JSX.Element) & {
    Copy: ({ siteName, children, className, ...props }: FooterCopyProps) => react.JSX.Element;
};

type TableHeaderProps = ComponentProps<'thead'>;
type TableBodyProps = ComponentProps<'tbody'>;
type TableRowProps = ComponentProps<'tr'>;
type TableCellContentProps = ComponentProps<'div'>;
type TableLinkProps = ComponentProps<'a'>;
interface TableProps extends ComponentProps<'table'> {
    /** 横スクロールを有効にするかどうか */
    isScrollable?: boolean;
}
interface TableHeaderCellProps extends ComponentProps<'th'> {
    /** 列を左端に固定するかどうか */
    isSticky?: boolean;
    /** 左端からの固定位置 (例: 0, 120, '100px' など。デフォルトは 0) */
    stickyLeft?: number | string;
}
interface TableCellProps extends ComponentProps<'td'> {
    /** セルが空状態かどうか */
    isEmpty?: boolean;
    /** 列を左端に固定するかどうか */
    isSticky?: boolean;
    /** 左端からの固定位置 (例: 0, 120, '100px' など。デフォルトは 0) */
    stickyLeft?: number | string;
}
declare const Table: (({ children, className, isScrollable, ...props }: TableProps) => react.JSX.Element) & {
    Header: ({ children, className, ...props }: TableHeaderProps) => react.JSX.Element;
    Body: ({ children, className, ...props }: TableBodyProps) => react.JSX.Element;
    Row: ({ children, className, ...props }: TableRowProps) => react.JSX.Element;
    HeaderCell: ({ children, className, isSticky, stickyLeft, style, ...props }: TableHeaderCellProps) => react.JSX.Element;
    Cell: ({ children, isEmpty, isSticky, stickyLeft, className, style, ...props }: TableCellProps) => react.JSX.Element;
    CellContent: ({ children, className, ...props }: TableCellContentProps) => react.JSX.Element;
    Link: ({ children, className, ...props }: TableLinkProps) => react.JSX.Element;
};

type MessageVariant = 'notice' | 'info' | 'warning' | 'error';
interface MessageProps extends ComponentProps<'div'> {
    /** メッセージの種類（必須） */
    variant: MessageVariant;
}
type MessageIconProps = ComponentProps<'span'>;
type MessageContentProps = ComponentProps<'div'>;
type MessageTitleProps = ComponentProps<'h2'>;
interface MessageTextProps extends ComponentProps<'p'> {
    /** テキストを太字にするかどうか */
    isBold?: boolean;
}
declare const Message: (({ children, variant, className, ...props }: MessageProps) => react.JSX.Element) & {
    Icon: ({ children, className, ...props }: MessageIconProps) => react.JSX.Element;
    Content: ({ children, className, ...props }: MessageContentProps) => react.JSX.Element;
    Title: ({ children, className, ...props }: MessageTitleProps) => react.JSX.Element;
    Text: ({ isBold, children, className, ...props }: MessageTextProps) => react.JSX.Element;
};

export { Button, Footer, Header, Message, Table };
