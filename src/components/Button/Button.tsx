import classNames from 'classnames';
import type { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className: '';
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
