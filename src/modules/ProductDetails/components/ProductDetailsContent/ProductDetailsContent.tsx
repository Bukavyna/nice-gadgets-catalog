import React from 'react';

import styles from './ProductDetailsContent.module.scss';

import { SuggestedProducts } from '../SuggestedProducts';
import { useCrossFade } from '../../../../hooks/useCrossFade';
import { ProductView } from '../ProductView';
import { ProductDetailsType } from '../../../../types/product-details.types';

interface ProductDetailsContentProps {
  details: ProductDetailsType | null;
  loading: boolean;
}

export const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  details,
  loading,
}) => {
  const { current, previous } = useCrossFade(details, 500);

  if (!current && !previous && loading) {
    return <div className={styles.containerProductDetailsPage}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.containerProductDetailsPage}>
        <div className={styles.fadeWrapper}>
          {previous && (
            <div className={styles.fadeLayerOld}>
              <ProductView details={previous} isLoading={false} />
            </div>
          )}

          {current && (
            <div className={styles.fadeLayerNew}>
              <ProductView details={current} isLoading={loading} />
            </div>
          )}
        </div>
      </div>
      {current?.category && <SuggestedProducts category={current.category} />}
    </>
  );
};
