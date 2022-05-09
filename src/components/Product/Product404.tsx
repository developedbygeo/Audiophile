import { ReactComponent as SVG404 } from 'assets/shared/product404.svg';
import { ProductLink } from 'components/UI/Button.styled';
import { MediumHeading, Description } from 'components/UI/Text.styled';
import { StyledNotFound } from './Product404.styled';

const ProductNotFound = () => {
  return (
    <StyledNotFound as="section">
      <MediumHeading as="h1">Oops...</MediumHeading>
      <div className="svg-cont">
        <SVG404 />
      </div>
      <Description>Let&apos;s get you back home</Description>
      <ProductLink to="/">Home</ProductLink>
    </StyledNotFound>
  );
};

export default ProductNotFound;
