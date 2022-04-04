import StyledLanding from './Landing.styled';
import { CtaButton } from '../UI/Button.styled';
import { Description } from '../UI/Text.styled';

const Landing = () => {
  return (
    <StyledLanding>
      <div>
        <h1>New Product</h1>
        <h2>XX99 Mark II HeadphoneS</h2>
      </div>
      <div>
        <Description>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music
          enthusiast.
        </Description>
      </div>
      <div>
        <CtaButton>See Product</CtaButton>
      </div>
    </StyledLanding>
  );
};

export default Landing;
