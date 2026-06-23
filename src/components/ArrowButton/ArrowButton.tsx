import type { ButtonHTMLAttributes } from 'react';

import styles from './ArrowButton.module.scss';

import { ArrowIcon } from '../ArrowIcon';

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  arrowClassName?: string;
}

export const ArrowButton = ({
  arrowClassName = '',
  className = '',
  ...rest
}: ArrowButtonProps) => {
  return (
    <button className={`${styles.arrowButton} ${className}`} {...rest}>
      <ArrowIcon className={`${arrowClassName} ${styles.arrowIcon}`} />
    </button>
  );
};
