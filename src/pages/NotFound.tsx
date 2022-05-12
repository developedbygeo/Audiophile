import { NotFoundLayout } from 'components/UI/Container.styled';
import { BigHeading, Description } from 'components/UI/Text.styled';
import { ProductLink } from 'components/UI/Button.styled';

const NotFound = () => {
  return (
    <NotFoundLayout>
      <article>
        <BigHeading>Oops, there is nothing here!</BigHeading>
        <Description>Let&apos;s get you back</Description>
        <ProductLink to="/" aria-label="Return to Home">
          Home
        </ProductLink>
      </article>
    </NotFoundLayout>
  );
};

export default NotFound;
