import styled from 'styled-components';

import { devices } from 'shared/breakpoints';
import { flexMixin, gridMixin } from 'shared/mixins';
import { CartItemText } from 'components/Cart/CartItem.styled';
import { Description, grayDescription } from 'components/UI/Text.styled';
import { StyledImageCont } from 'components/Product/ProductPreview.styled';

import { StyledReview } from './CartReview.styled';

export const SuccessContainer = styled(StyledReview)`
  gap: 1.5rem;

  button {
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.typography.weights.subheading};
    letter-spacing: 0.175rem;
  }

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    height: 100%;
  }

  @media ${devices.laptop} {
    gap: 3rem;
  }
`;

export const Checkmark = styled.div`
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  padding: 3rem;
  background: rgb(${({ theme }) => theme.colors.brand});

  svg {
    color: rgb(${({ theme }) => theme.colors.white});
    height: 100%;
    width: 100%;
  }
  @media ${devices.laptop}, ${devices.landscapeMobileSS} {
    svg {
      transform: scale(1.25);
    }
  }
  @media ${devices.landscapeMobileSS} {
    padding: 2vw;
  }
`;

export const SuccessText = styled.article`
  ${flexMixin('center', 'center', 'column')};
  gap: 1rem;
  h1 {
    font-size: 3rem;
  }

  h1,
  p {
    text-align: left;
  }
`;

export const SuccessSummary = styled.article`
  width: 100%;
  ${flexMixin('center', 'center', 'column')};
  background: rgb(${({ theme }) => theme.colors.silver});
  .price {
    background: rgb(${({ theme }) => theme.colors.black});
    flex: 0.5;
  }
  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    ${gridMixin('repeat(2, 1fr)', '1fr')};
    border-radius: 1rem 0rem 0rem 1rem;
  }
`;

export const SuccessQuantity = styled.div`
  ${flexMixin('center', 'center', 'column')};

  p {
    ${grayDescription};
    font-weight: ${({ theme }) => theme.typography.weights.heading};
  }
`;

export const SuccessItem = styled.div`
  position: relative;
  padding: 5rem 0rem;
  flex: 1;
  width: 100%;
  ${flexMixin('space-between', 'center', 'row')};

  & > div {
    ${flexMixin('center', 'center', 'column')};
    flex: 0.2;
  }

  &.extra::before {
    position: absolute;
    content: '';
    bottom: 2rem;
    right: 50%;
    transform: translate(50%, 0%);
    height: 0.2rem;
    width: 90%;
    background: rgba(${({ theme }) => theme.colors.black}, 0.15);
  }

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    ${flexMixin('flex-start', 'center', 'row')};
    padding: 5rem 0rem;
    overflow: hidden;
  }

  @media ${devices.laptop} {
    justify-content: space-around;
    padding: 1rem 0rem;

    &.extra {
      padding: 2rem 0rem;
    }
  }
`;

export const SuccessItemImageCont = styled(StyledImageCont)`
  flex: 0.3;
  img {
    width: 20vw;
  }
  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    ${flexMixin('flex-start', 'center', 'row')};
    img {
      width: 12.5vw;
    }
  }
  @media ${devices.laptop} {
    img {
      width: 7.5vw;
    }
  }
`;

export const SuccessItemText = styled(CartItemText)`
  width: 100%;
  flex: 0.4 !important;
  h4 {
    font-size: 2rem;
    margin: 0;
  }
  h4,
  p {
    text-align: left;
    align-self: flex-start;
  }
  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    flex: 0.85;
    gap: 0;
  }
`;

export const AdditionalItemsText = styled(Description)`
  padding: 0.5rem 1rem 2rem 1rem;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.typography.weights.heading};
  letter-spacing: 0.19rem;
  ${grayDescription};
`;

export const GrandTotal = styled.article`
  width: 100%;
  padding: 1.5rem 4rem;
  ${flexMixin('space-evenly', 'flex-start', 'column')};
  background: rgb(${({ theme }) => theme.colors.black});
  border-radius: 0rem 0rem 1rem 1rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 2rem;
    color: rgba(${({ theme }) => theme.colors.white}, 0.6);
  }
  h4 {
    font-size: 2.8rem;
    color: rgb(${({ theme }) => theme.colors.white});
  }
  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    grid-area: 1/2/3/3;
    justify-content: center;
    height: 100%;
    margin-bottom: 0;
    border-radius: 0rem 1rem 1rem 0rem;
  }
  @media ${devices.laptop} {
    h4 {
      padding-block: 0;
    }
  }
`;
