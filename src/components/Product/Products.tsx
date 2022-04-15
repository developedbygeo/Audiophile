import useSelectedProduct from 'hooks/useSelectedProduct';

import ProductPreview from 'components/Product/ProductPreview';

type ProductsProps = {
  category: string;
};

const Products = ({ category }: ProductsProps) => {
  const selectedCategory = useSelectedProduct(category);

  return (
    <section>
      {selectedCategory.map((product) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
