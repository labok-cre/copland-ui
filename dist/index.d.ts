import * as react from 'react';
import { ComponentProps } from 'react';

type ButtonSize = 'S' | 'M' | 'L' | 'XL' | 'S-flex' | 'M-flex' | 'L-flex' | 'XL-flex' | 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'danger-primary' | 'danger-secondary' | 'info';
interface ButtonProps extends ComponentProps<'button'> {
    /** ボタンのサイズ（必須） */
    size: ButtonSize;
    /** ボタンのバリアント（必須） */
    variant: ButtonVariant;
    /** ローディング状態 */
    isLoading?: boolean;
    /** 背景色 */
    backgroundColor?: string;
}
declare const Button: ({ children, variant, size, className, isLoading, disabled, backgroundColor, style, ...props }: ButtonProps) => react.JSX.Element;

interface WebHeaderProps {
    siteName: string;
}
declare function WebHeader({ siteName }: WebHeaderProps): react.JSX.Element;

interface WebFooterProps {
    siteName: string;
}
declare function WebFooter({ siteName }: WebFooterProps): react.JSX.Element;

export { Button, WebFooter, WebHeader };
