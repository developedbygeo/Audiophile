import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';

import ProductDetails from 'components/Product/ProductDetails';
import ProductFeatures from 'components/Product/ProductFeatures';
import ProductGallery from 'components/Product/ProductGallery';
import SimilarProducts from 'components/Product/SimilarProducts';

const Details = () => {
  const { pathname } = useLocation();
  const products = useAppSelector((state) => state.products);
  const productSlug = pathname.split('/')[2];
  const product = products.find((p) => p.slug === productSlug);

  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <ProductDetails product={product} />
      <ProductFeatures features={product.features} included={product.includes} />
      <ProductGallery gallery={product.gallery} productTitle={product.name} />
      <SimilarProducts products={product.others} />
    </>
  );
};

export default Details;
