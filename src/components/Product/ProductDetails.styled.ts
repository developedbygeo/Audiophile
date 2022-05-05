import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { flexMixin, gridMixin } from 'shared/mixins';
import { grayDescription } from 'components/UI/Text.styled';
import { UnstyledButton } from 'components/UI/Button.styled';
import { StyledPreview, StyledImageCont, StyledText } from './ProductPreview.styled';

export const DetailsContainer = styled(StyledPreview)`
  .desc {
    ${grayDescription};
  }
  article {
    ${flexMixin('center', 'center', 'column')};
    gap: 2.5vh;
  }

  @media ${devices.tablet} {
    ${gridMixin('auto', '0.05fr auto')};
    min-height: initial;
    height: 65vh;

    /* go back button */
    & > button {
      grid-area: 1/1/1/1;
      padding: 0;
      padding-top: 2rem;
      height: auto;
      @media ${devices.tablet} {
        padding-right: 1%;
      }
    }

    /* product img */
    & > figure {
      grid-area: 2/1/2/2;
      height: 100%;
      img {
        height: 100%;
        max-height: initial;
        width: 35vw;
      }
    }

    /* text */
    & > article {
      grid-area: 2/2/2/3;
    }
  }
  @media ${devices.laptop} {
    margin-top: 3vh;
    padding-inline: 10%;
    height: auto;
    article {
      align-items: flex-start;
    }
  }
`;

export const ProductImageCont = styled(StyledImageCont)`
  img {
    max-height: 45vh;
  }
`;

export const ProductText = styled(StyledText)`
  gap: 3rem;
  h1,
  h2,
  p {
    text-align: left;
    align-self: flex-start;
  }
  h1 {
    letter-spacing: 0.7rem;
  }

  @media ${devices.tablet} {
    grid-area: 2/3/3/4;
    padding: 0;
  }
`;

export const PriceTag = styled.p`
  font-weight: 700;
  letter-spacing: 0.25rem;
  color: rgba(${({ theme }) => theme.colors.black}, 1);
  font-size: 2.45rem;
`;

export const ProductActions = styled.div`
  ${gridMixin('repeat(2, 1fr)', '1fr')};
  margin-top: 2vh;
  width: 100%;

  & > div,
  button {
    height: 7vh;
    width: 100%;
  }

  @media ${devices.tablet} {
    margin-top: 0;
    ${flexMixin('space-between', 'center', 'row')};
    gap: 2rem;

    & > .quantity-btn {
      flex: 0.6;
      padding: 0 1rem;
    }
    & > .cart-btn {
      flex: 1;
    }
  }
  @media ${devices.laptop} {
    width: 80%;
    & > .quantity-btn,
    & > .cart-btn {
      height: 8.5vh;
    }
  }
`;

export const GoBackButton = styled(UnstyledButton)`
  width: 15rem;
  align-self: flex-start;
  text-align: left;
  padding-inline: 0;
  letter-spacing: 0.175rem;
  transition: all 100ms ease;
  font-weight: 400;
  ${grayDescription};

  @media (hover: hover) {
    &:hover {
      color: rgba(${({ theme }) => theme.colors.black}, 1);
      text-decoration: underline;
    }
  }
  &:active {
    transform: scale(0.98);
  }
`;

// TODO create product not found component
export const NotFoundProduct = styled.div`
  height: 100%;
  width: 100%;
  ${flexMixin('center', 'center', 'column')};
`;
