import useWindowWidth from 'hooks/useWindow';

import { Description, BigHeading } from 'components/UI/Text.styled';
import { ProductLink } from 'components/UI/Button.styled';
import {
  BigContainer,
  SmallerContainer,
  FeaturedText,
  EarphonesContainer,
  Zx9Image
} from './Featured.styled';

const Featured = () => {
  const width = useWindowWidth();
  const isNotMobile = width > 768;

  return (
    <>
      <BigContainer className="featured" as="article">
        <div>
          <Zx9Image role="img" />
          <BigHeading>ZX9 SPEAKER</BigHeading>
          {isNotMobile && (
            <Description>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </Description>
          )}
          <ProductLink to="/products/zx9-speaker" className="zx9-btn" title="Find out more about ZX9">
            SEE PRODUCT
          </ProductLink>
        </div>
      </BigContainer>
      <SmallerContainer as="article" className="zx7-home">
        <BigHeading>ZX7 SPEAKER</BigHeading>
        <ProductLink to="/products/zx7-speaker" look="secondary" title="Find out more about ZX7">
          SEE PRODUCT
        </ProductLink>
      </SmallerContainer>
      <SmallerContainer as="article" className="yx1" title="Find out more about YX1">
        <EarphonesContainer />
        <FeaturedText>
          <BigHeading>YX1 EARPHONES</BigHeading>
          <ProductLink to="/products/yx1-earphones" look="secondary">
            SEE PRODUCT
          </ProductLink>
        </FeaturedText>
      </SmallerContainer>
    </>
  );
};

export default Featured;
