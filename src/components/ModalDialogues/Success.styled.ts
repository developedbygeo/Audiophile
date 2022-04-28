import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';
import { CartItemText } from 'components/Cart/CartItem.styled';
import { Description, grayDescription } from 'components/UI/Text.styled';
import { StyledImageCont } from 'components/Product/ProductPreview.styled';

import { StyledReview } from './CartReview.styled';

export const SuccessContainer = styled(StyledReview)`
  gap: 1.5rem;
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
  ${flexMixin('center', 'center', 'column')};
  background: rgb(${({ theme }) => theme.colors.silver});
  .price {
    background: rgb(${({ theme }) => theme.colors.black});
    flex: 0.5;
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
  padding: 5rem 2rem;
  flex: 1;
  ${flexMixin('space-between', 'center', 'row')};

  & > div {
    ${flexMixin('center', 'center', 'column')};
    flex: 0.2;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: 2rem;
    right: 50%;
    transform: translate(50%, 0%);
    height: 0.2rem;
    width: 90%;
    background: rgba(${({ theme }) => theme.colors.black}, 0.15);
  }
`;

export const SuccessItemImageCont = styled(StyledImageCont)`
  img {
    width: 20vw;
  }
`;

export const SuccessItemText = styled(CartItemText)`
  h4 {
    font-size: 2rem;
    margin: 0;
  }
  h4,
  p {
    text-align: left;
    align-self: flex-start;
  }
`;

export const AdditionalItemsText = styled(Description)`
  padding: 0.5rem 1rem 2rem 1rem;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.typography.weights.heading};
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
`;
