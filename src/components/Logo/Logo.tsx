import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

import LogoIcon from '../../img/Logo.svg?react';

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <LogoIcon className={styles.logoIcon} />
    </Link>
  );
};
