import { BigHeading } from 'components/UI/Text.styled';

import { StyledBanner } from './PageBanner.styled';

type PageBannerProps = {
  page: string;
};

const PageBanner = ({ page }: PageBannerProps) => {
  return (
    <StyledBanner>
      <BigHeading>{page.toUpperCase()}</BigHeading>
    </StyledBanner>
  );
};

export default PageBanner;
