import { NotFoundLayout } from 'components/UI/Container.styled';
import { BigHeading } from 'components/UI/Text.styled';

const NotFound = () => {
  return (
    <NotFoundLayout>
      <BigHeading>Oops, there is nothing here!</BigHeading>
      <div className="placeholder" role="img" />
    </NotFoundLayout>
  );
};

export default NotFound;
