import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ProductsSlider } from '@/modules/ProductsSlider';

interface SuggestedProductsProps {
  category: string;
}

export const SuggestedProducts = ({ category }: SuggestedProductsProps) => {
  const { productId } = useParams<{ productId: string }>();

  const { t } = useTranslation();

  return (
    <ProductsSlider
      title={t('title.mayAlsoLike')}
      category={category}
      excludeItemId={productId || ''}
      limit={12}
    />
  );
};
