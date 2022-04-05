import StyledHero from './Hero.styled';
import { CtaButton } from '../UI/Button.styled';
import { Description, BigHeading, MediumHeading } from '../UI/Text.styled';

const Hero = () => {
  return (
    <StyledHero>
      <div className="header-wrapper">
        <MediumHeading as="h1">New Product</MediumHeading>
        <BigHeading as="h2">XX99 Mark II HeadphoneS</BigHeading>
      </div>
      <div>
        <Description>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music
          enthusiast.
        </Description>
      </div>
      <div className="cta-wrapper">
        <CtaButton>SEE PRODUCT</CtaButton>
      </div>
    </StyledHero>
  );
};

export default Hero;
