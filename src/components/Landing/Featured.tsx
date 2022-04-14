import useWindowWidth from 'hooks/useWindow';

import { Description, BigHeading } from 'components/UI/Text.styled';
import { CtaButton } from 'components/UI/Button.styled';
import {
  BigContainer,
  SmallerContainer,
  FeaturedText,
  EarphonesContainer,
  Zx9Image,
  SecondaryFeaturedBtn
} from './Featured.styled';

const Featured = () => {
  const width = useWindowWidth();
  const isNotMobile = width > 768;

  return (
    <>
      <BigContainer as="article">
        <div>
          <Zx9Image role="img" />
          <BigHeading>ZX9 SPEAKER</BigHeading>
          {isNotMobile && (
            <Description>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </Description>
          )}
          <CtaButton role="link" className="zx9-btn">
            SEE PRODUCT
          </CtaButton>
        </div>
      </BigContainer>
      <SmallerContainer as="article" className="zx7-home">
        <BigHeading>ZX7 SPEAKER</BigHeading>
        <SecondaryFeaturedBtn role="link">SEE PRODUCT</SecondaryFeaturedBtn>
      </SmallerContainer>
      <SmallerContainer as="article" className="yx1">
        <EarphonesContainer />
        <FeaturedText>
          <BigHeading>YX1 EARPHONES</BigHeading>
          <SecondaryFeaturedBtn role="link">SEE PRODUCT</SecondaryFeaturedBtn>
        </FeaturedText>
      </SmallerContainer>
    </>
  );
};

export default Featured;
