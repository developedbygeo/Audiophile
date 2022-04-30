import { useNavigate } from 'react-router-dom';
import useWindowWidth from 'hooks/useWindow';
import { derivedViewport, getImagePath } from 'utils/utilities';
import ScrollTop from 'components/UI/ScrollTop';

import { ProductType } from 'shared/models/product.model';

import QuantityForm from 'components/Forms/QuantityForm';
import { Description, MediumHeading, SmallSubheading } from 'components/UI/Text.styled';
import {
  DetailsContainer,
  ProductImageCont,
  ProductText,
  PriceTag,
  GoBackButton
} from './ProductDetails.styled';

type DetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: DetailsProps) => {
  const width = useWindowWidth();
  const viewport = derivedViewport(width);
  const navigate = useNavigate();
  const productImage = getImagePath(product!.image[viewport]);
  const { name, price, id } = product;

  const goBackHandler = () => navigate(-1);

  if (!product)
    return (
      <div>
        <p>Error loading the product</p>
      </div>
    );

  return (
    <>
      <ScrollTop />
      <DetailsContainer as="section">
        <GoBackButton onClick={goBackHandler} title="Return to the previous page">
          Go Back
        </GoBackButton>
        <ProductImageCont as="figure">
          <img src={productImage} alt={product.name} />
        </ProductImageCont>
        <article>
          <ProductText>
            {product.new && <SmallSubheading as="h1">NEW PRODUCT</SmallSubheading>}
            <MediumHeading as="h2">{product.name}</MediumHeading>
            <Description className="desc">{product.description}</Description>
            <PriceTag>{`$ ${Number(product.price).toLocaleString()}`}</PriceTag>
          </ProductText>
          <QuantityForm productDetails={{ name, price, id }} />
        </article>
      </DetailsContainer>
    </>
  );
};

export default ProductDetails;
