import * as react from 'react';

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}
declare function Button({ label, variant, onClick }: ButtonProps): react.JSX.Element;

interface WebHeaderProps {
    siteName: string;
}
declare function WebHeader({ siteName }: WebHeaderProps): react.JSX.Element;

interface WebFooterProps {
    siteName: string;
}
declare function WebFooter({ siteName }: WebFooterProps): react.JSX.Element;

export { Button, WebFooter, WebHeader };
