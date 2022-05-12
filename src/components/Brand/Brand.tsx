import { BigHeading, Description } from 'components/UI/Text.styled';
import { StyledBrand, BrandImage, BrandText } from './Brand.styled';

const Brand = () => {
  return (
    <StyledBrand as="article">
      <BrandImage className="image-cont" role="img" aria-label="Brand model" />
      <BrandText>
        <BigHeading>
          BRINGING YOU THE<span> BEST</span> AUDIO GEAR
        </BigHeading>
        <Description>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones,
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
          available for you to browse and experience a wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best place to buy your portable audio
          equipment.
        </Description>
      </BrandText>
    </StyledBrand>
  );
};

export default Brand;
