import useWindowWidth from 'hooks/useWindow';
import useImage from 'hooks/useImage';
import { derivedViewport } from 'utils/utilities';

import { ProductType } from 'shared/models/product.model';

import { Description, MediumHeading, SmallSubheading } from 'components/UI/Text.styled';
import { StyledPreview, StyledImageCont, StyledText, ProductLink } from './ProductPreview.styled';

type ProductProps = {
  product: ProductType;
};

const ProductPreview = ({ product }: ProductProps) => {
  const width = useWindowWidth();
  const viewport = derivedViewport(width);
  const productImage = useImage(product.categoryImage[viewport]);

  return (
    <StyledPreview as="article">
      {productImage && (
        <StyledImageCont>
          <img src={productImage} alt={product.name} />
        </StyledImageCont>
      )}
      <StyledText>
        {product.new && <SmallSubheading as="h1">NEW PRODUCT</SmallSubheading>}
        <MediumHeading as="h2">{product.name}</MediumHeading>
        <Description className="desc">{product.description}</Description>
      </StyledText>
      <ProductLink to={`/products/${product.slug}`}>SEE PRODUCT</ProductLink>
    </StyledPreview>
  );
};

export default ProductPreview;
