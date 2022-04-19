import useWindowWidth from 'hooks/useWindow';

import { SimilarProductsType } from 'shared/models/product.model';

import { MediumHeading, SmallSubheading } from 'components/UI/Text.styled';
import { derivedViewport, getImagePath } from 'utils/utilities';
import { StyledSimilar, SimilarLink, SimilarImageCont, ProductContainer } from './SimilarProducts.styled';

type SimilarProps = {
  products: SimilarProductsType;
};

const SimilarProducts = ({ products }: SimilarProps) => {
  const width = useWindowWidth();
  const viewport = derivedViewport(width);

  return (
    <StyledSimilar as="article">
      <MediumHeading as="h4">YOU MAY ALSO LIKE</MediumHeading>
      <ul>
        {products.map((product, index) => {
          const productImage = getImagePath(product.image[viewport], 9);

          return (
            <ProductContainer as="li" key={index}>
              <SimilarImageCont>
                <img src={productImage} alt={`Depiction of ${product.name}`} />
              </SimilarImageCont>
              <SmallSubheading as="h5" weight="bold">
                {product.name}
              </SmallSubheading>
              <SimilarLink to={`/products/${product.slug}`}>SEE PRODUCT</SimilarLink>
            </ProductContainer>
          );
        })}
      </ul>
    </StyledSimilar>
  );
};

export default SimilarProducts;
