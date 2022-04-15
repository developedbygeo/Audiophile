import { useAppSelector } from 'app/hooks';
import { useMemo } from 'react';

const useSelectedProducts = (identifier: string) => {
  const allProducts = useAppSelector((state) => state.products);

  const selectedProducts = useMemo(() => {
    return allProducts.filter((product) => product.category === identifier);
  }, [identifier, allProducts]);

  return selectedProducts;
};

export default useSelectedProducts;
