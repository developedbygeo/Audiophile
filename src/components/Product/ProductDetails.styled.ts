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
    gap: 2.5vw;
    min-height: initial;
    height: 65vh;
    row-gap: 3rem;

    & > button {
      grid-area: 1/1/3/1;
      padding: 0;
      height: auto;
    }

    & > figure {
      grid-area: 2/1/2/2;
      height: 100%;
      img {
        height: 100%;
        max-height: initial;
        width: 35vw;
      }
    }

    & > article {
      grid-area: 2/2/2/3;
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
