import { useTranslation } from 'react-i18next';

import styles from './ProductActions.module.scss';

import { ProductType } from '@/types/product.types';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { HeartIcon } from '@/components/HeartIcon';
import { Button } from '@/components/Button';
import classNames from 'classnames';

interface ProductActionsProps {
  product: ProductType;
  variant?: 'card' | 'details';
  className: string;
}

export const ProductActions = ({
  product,
  variant = 'card',
  className,
}: ProductActionsProps) => {
  const { addToCart, isInCart } = useCart();
  const { toggleFavorite, isFavorites } = useFavorites();

  const idToCheck = product.id;
  const added = isInCart(idToCheck);
  const favorite = isFavorites(idToCheck);

  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        `${styles.actions} ${styles[`actions--${variant}`]}`,
        className,
      )}
    >
      <Button
        className={styles.addButton}
        variant={added ? 'secondary' : 'primary'}
        disabled={added}
        onClick={() => addToCart(product)}
      >
        {added ? t('actions.AddedToCart') : t('actions.AddToCart')}
      </Button>

      <button
        type="button"
        className={`${styles.favoriteButton}`}
        onClick={() => toggleFavorite(product)}
      >
        <HeartIcon isSelected={favorite} />
      </button>
    </div>
  );
};
