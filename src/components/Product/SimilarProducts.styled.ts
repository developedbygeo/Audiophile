import styled from 'styled-components';

import { devices } from 'shared/breakpoints';
import { Container } from 'components/UI/Container.styled';
import { flexMixin } from 'shared/mixins';
import { ProductLink } from 'components/UI/Button.styled';
import { StyledGallery } from './ProductGallery.styled';
import { StyledImageCont } from './ProductPreview.styled';

export const StyledSimilar = styled(StyledGallery)`
  margin-top: 0;
  margin-bottom: 10vh;
  gap: 3vh;
  a {
    margin-top: 0;
  }

  ul {
    ${flexMixin('flex-start', 'center', 'column')};
    gap: 5vh;
  }

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    ${flexMixin('center', 'center', 'column')};
    ul {
      flex-direction: row;
      gap: 2vw;

      li {
        gap: 3rem;
      }
      h5 {
        font-size: 2.3rem;
      }
    }
  }
  @media ${devices.laptop} {
    padding-inline: 10%;
    ul {
      margin-bottom: 5vh;
    }
  }
  @media ${devices.landscapeMobileSS} {
    margin-bottom: 15vh;
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
