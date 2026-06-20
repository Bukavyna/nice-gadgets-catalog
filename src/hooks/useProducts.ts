import { useState, useEffect } from 'react';

import { getProducts } from '../api';
import { ProductDetailsType } from '../types/product-details.types';
import { useErrorHandler } from '../utils/errors';

interface UseProductsResult {
  products: ProductDetailsType[];
  loading: boolean;
  error: string;
}

export const useProducts = (category?: string): UseProductsResult => {
  const [products, setProducts] = useState<ProductDetailsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { handleError } = useErrorHandler();

  useEffect(() => {
    setLoading(true);
    setError('');

    getProducts(category)
      .then(data => {
        setProducts(data);
      })
      .catch(caughtError => {
        handleError('NETWORK', caughtError);
        if (caughtError instanceof Error) {
          setError(caughtError.message);
        } else {
          setError('Something went wrong');
        }
      })
      .finally(() => setLoading(false));
  }, [category, handleError]);

  return { products, loading, error };
};
