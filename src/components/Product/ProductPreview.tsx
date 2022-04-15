import useWindowWidth from 'hooks/useWindow';
// import useImage from 'hooks/useImage';
import { derivedViewport } from 'utils/utilities';

import { ProductType } from 'shared/models/product.model';

import { Description, MediumHeading, SmallSubheading } from 'components/UI/Text.styled';
import { CtaButton } from 'components/UI/Button.styled';

type ProductProps = {
  product: ProductType;
};

const ProductPreview = ({ product }: ProductProps) => {
  const width = useWindowWidth();
  const viewport = derivedViewport(width);

  const imageName = product.categoryImage[viewport].slice(8);

  return (
    <article>
      <div className="img-wrapper">
        <img src={`images/${imageName}`} alt={product.name} />
      </div>
      {product.new && <SmallSubheading as="h1">NEW PRODUCT</SmallSubheading>}
      <MediumHeading as="h2">{product.name}</MediumHeading>
      <Description>{product.description}</Description>
      <CtaButton role="link">SEE PRODUCT</CtaButton>
    </article>
  );
};

export default ProductPreview;
