import styles from './ProductsList.module.scss';

import { ProductType } from '@/types/product.types';
import { ProductCard } from '@/components/ProductCard';

interface ProductListProps {
  products: ProductType[];
  className?: string;
}

export const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.productsList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
