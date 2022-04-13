import useWindowWidth from '../../hooks/useWindow';

import { BigContainer, SmallerContainer } from './Featured.styled';
import { Card } from '../UI/Card.styled';
import { Description, BigHeading } from '../UI/Text.styled';
import { CtaButton } from '../UI/Button.styled';

const Featured = () => {
  const width = useWindowWidth();
  const isNotMobile = width > 768;

  return (
    <>
      <BigContainer as="article">
        <div>
          <div className="zx9-cont" role="img" />
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
        <CtaButton role="link">SEE PRODUCT</CtaButton>
      </SmallerContainer>
      <SmallerContainer as="article" className="yx1">
        <div className="yx1-cont" />
        <Card className="text">
          <BigHeading>YX1 EARPHONES</BigHeading>
          <CtaButton role="link">SEE PRODUCT</CtaButton>
        </Card>
      </SmallerContainer>
    </>
  );
};

export default Featured;
