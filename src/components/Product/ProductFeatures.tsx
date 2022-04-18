import { MediumHeading, Description } from 'components/UI/Text.styled';
import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { FeaturesType } from 'shared/models/product.model';

type FeatureProps = {
  features: FeaturesType;
};

const ProductFeatures = ({ features }: FeatureProps) => {
  return (
    <LargeSimpleContainer as="article">
      <MediumHeading as="h4" weight="bold">
        Features
      </MediumHeading>
      <Description>{features}</Description>
    </LargeSimpleContainer>
  );
};

export default ProductFeatures;
