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

export { Button, Footer, Header };
