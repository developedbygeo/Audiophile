import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';

import ProductDetails from 'components/Product/ProductDetails';
import ProductFeatures from 'components/Product/ProductFeatures';

const Details = () => {
  const { pathname } = useLocation();
  const products = useAppSelector((state) => state.products);
  const productSlug = pathname.split('/')[2];
  const product = products.find((p) => p.slug === productSlug);

  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <ProductDetails product={product} />
      <ProductFeatures features={product.features} />
    </>
  );
};

export default Details;
