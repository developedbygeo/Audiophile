import useSelectedProducts from 'hooks/useSelectedProducts';

import ProductPreview from 'components/Product/ProductPreview';
import { StyledProducts } from './Products.styled';

type ProductsProps = {
  category: string;
};

const Products = ({ category }: ProductsProps) => {
  const selectedCategory = useSelectedProducts(category);

  return (
    <StyledProducts>
      {selectedCategory.map((product) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </StyledProducts>
  );
};

export default Products;
