import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';
import { CartItemText } from 'components/Cart/CartItem.styled';

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
  padding: 1rem;
  .price {
    background: rgb(${({ theme }) => theme.colors.black});
    flex: 0.5;
  }
`;

export const SuccessQuantity = styled.div`
  ${flexMixin('center', 'center', 'column')};

  p {
    color: rgba(${({ theme }) => theme.colors.black}, 0.6);
    font-weight: ${({ theme }) => theme.typography.weights.heading};
  }
`;

export const SuccessItem = styled.div`
  position: relative;
  padding: 5rem 2rem;
  flex: 1;
  ${flexMixin('space-between', 'center', 'row')};
  background: rgb(${({ theme }) => theme.colors.silver});

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
