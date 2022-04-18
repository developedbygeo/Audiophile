/* eslint-disable react/no-array-index-key */
import { MediumHeading, Description } from 'components/UI/Text.styled';
import { FeaturesType, IncludedType } from 'shared/models/product.model';
import { FeaturesContainer, StyledList, Included, Quantity, Unit } from './ProductFeatures.styled';

type FeatureProps = {
  features: FeaturesType;
  included: IncludedType;
};

const ProductFeatures = ({ features, included }: FeatureProps) => {
  return (
    <FeaturesContainer as="article">
      <article>
        <MediumHeading as="h4" weight="bold">
          Features
        </MediumHeading>
        <Description className="desc">{features}</Description>
      </article>
      <article>
        <MediumHeading as="h4" weight="bold">
          IN THE BOX
        </MediumHeading>
        <StyledList>
          {included.map((piece, index) => (
            <Included key={index}>
              <Quantity>{piece.quantity}x</Quantity>
              <Unit>{piece.item}</Unit>
            </Included>
          ))}
        </StyledList>
      </article>
    </FeaturesContainer>
  );
};

export default ProductFeatures;
