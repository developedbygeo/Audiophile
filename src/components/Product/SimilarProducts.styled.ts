import styled from 'styled-components/macro';

import { Container } from 'components/UI/Container.styled';
import { flexMixin } from 'shared/mixins';
import { ProductLink } from 'components/UI/Button.styled';
import { StyledGallery } from './ProductGallery.styled';
import { StyledImageCont } from './ProductPreview.styled';

export const StyledSimilar = styled(StyledGallery)`
  gap: 3vh;
  a {
    margin-top: 0;
  }

  ul {
    ${flexMixin('flex-start', 'center', 'column')};
    gap: 5vh;
  }
`;

// product list item
export const ProductContainer = styled(Container)`
  ${flexMixin('space-evenly', 'center', 'column')};
  gap: 2rem;
  width: 100%;

  h5 {
    font-size: 2.75rem;
    color: rgb(${({ theme }) => theme.colors.black});
  }
`;

export const SimilarLink = styled(ProductLink)`
  width: 20rem;
  height: 6rem;
`;

export const SimilarImageCont = styled(StyledImageCont)`
  flex: 0.8;
`;
