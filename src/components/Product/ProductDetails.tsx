import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from 'hooks/useWindow';
import useImage from 'hooks/useImage';
import { derivedViewport } from 'utils/utilities';
import ScrollTop from 'components/UI/ScrollTop';

import { ProductType } from 'shared/models/product.model';

import QuantityInput from 'components/UI/QuantityInput/Input';
import { Description, MediumHeading, SmallSubheading } from 'components/UI/Text.styled';
import { CtaButton } from 'components/UI/Button.styled';
import { StyledPreview as StyledProduct } from './ProductPreview.styled';
import {
  ProductImageCont,
  ProductText,
  PriceTag,
  ProductActions,
  GoBackButton
} from './ProductDetails.styled';

type DetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: DetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const width = useWindowWidth();
  const viewport = derivedViewport(width);
  const navigate = useNavigate();

  const productImage = useImage(product!.categoryImage[viewport]) || '';

  const goBackHandler = () => navigate(-1);

  const decrementHandler = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementHandler = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  if (!product)
    return (
      <div>
        <p>Error loading the product</p>
      </div>
    );

  return (
    <>
      <ScrollTop />
      <StyledProduct as="section">
        <GoBackButton onClick={goBackHandler}>Go Back</GoBackButton>
        <ProductImageCont>
          <img src={productImage} alt={product.name} />
        </ProductImageCont>
        <ProductText>
          {product.new && <SmallSubheading as="h1">NEW PRODUCT</SmallSubheading>}
          <MediumHeading as="h2">{product.name}</MediumHeading>
          <Description className="desc">{product.description}</Description>
          <PriceTag>{`$ ${Number(product.price).toLocaleString()}`}</PriceTag>
        </ProductText>
        <ProductActions>
          <QuantityInput onDecrement={decrementHandler} onIncrement={incrementHandler} quantity={quantity} />
          <CtaButton>ADD TO CART</CtaButton>
        </ProductActions>
      </StyledProduct>
    </>
  );
};

export default ProductDetails;
