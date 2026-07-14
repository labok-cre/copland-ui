import clsx from 'clsx';
import { ComponentProps, PropsWithChildren } from 'react';
import styles from './Frame.module.scss';

export const Frame = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<'div'>>) => {
  return (
    <div {...props} className={clsx(styles.frame, props.className)}>
      {children}
    </div>
  );
};
