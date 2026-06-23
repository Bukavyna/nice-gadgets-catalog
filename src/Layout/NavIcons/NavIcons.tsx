import { Link } from 'react-router-dom';
import { Player } from '@lordicon/react';
import { useRef } from 'react';

import baseStyles from './NavIcons.module.scss';

import { useFavorites } from '@/hooks/useFavorites';
import { useCart } from '@/hooks/useCart';
import { HeartIcon } from '../../components/HeartIcon';
import { WiredTrolley } from '../../components/WiredTrolley';

interface NavIconsProps {
  styles: { [key: string]: string };
  onClose: () => void;
}

export const NavIcons = ({ styles, onClose }: NavIconsProps) => {
  const { favorites } = useFavorites();
  const { cartCount } = useCart();

  const favoritesCount = favorites.length;
  const cartRef = useRef<Player | null>(null);

  const getClassName = (className: string) => {
    return `${baseStyles[className] || ''} ${styles[className] || ''}`.trim();
  };

  return (
    <div className={styles.navigation__right}>
      <Link
        to="/favorites"
        className={styles.navigation__iconLink}
        onClick={onClose}
      >
        <div className={styles.containerIcon}>
          <div className={styles.heartIcon}>
            <HeartIcon
              isSelected={favoritesCount > 0}
              trigger={favoritesCount}
            />
          </div>

          {favoritesCount > 0 && (
            <span className={baseStyles.counter}>{favoritesCount}</span>
          )}
        </div>
      </Link>

      <div className={baseStyles.divider}></div>

      <Link
        to="/cart"
        className={styles.navigation__iconLink}
        onClick={onClose}
      >
        <div className={styles.containerIcon}>
          <WiredTrolley
            ref={cartRef}
            className={getClassName('navigation__icon')}
            trigger={cartCount}
          />

          {cartCount > 0 && (
            <span className={baseStyles.counter}>{cartCount}</span>
          )}
        </div>
      </Link>
    </div>
  );
};
