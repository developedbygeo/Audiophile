import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
import { CartPrice } from 'components/Cart/CartActions.styled';
import { StyledCheckout } from './Checkout.styled';

export const SummaryList = styled(StyledCheckout)`
  height: auto;
  width: 90%;
  margin: auto;
  min-height: 30vh;
  padding-bottom: 7vh;
  margin-top: 5vh;
  gap: 2rem;

  .checkout-quantity {
    flex: initial;
    background: transparent;
    span {
      color: rgba(${({ theme }) => theme.colors.black}, 0.5);
      text-align: right;
      font-weight: ${({ theme }) => theme.typography.weights.heading};
    }
  }

  .item-text {
    flex: 0.6;
  }

  @media ${devices.tablet} {
    grid-template-rows: auto minmax(10vh, auto);
  }
`;

export const PriceBreakdown = styled.article`
  height: 100%;
  min-height: 45vh;
  ${flexMixin('space-between', 'center', 'column')};

  button {
    font-size: 1.7rem;
    margin-top: 3vh;
    letter-spacing: 0.195rem;
  }

  @media ${devices.tablet} {
    min-height: 35vh;

    button {
      width: 100%;
    }
  }
`;

export const GrandTotal = styled(CartPrice)`
  margin-block: 1.5rem;
  h3 {
    color: rgb(${({ theme }) => theme.colors.brand});
  }

  @media ${devices.tablet} {
    margin-block: 2.5rem;
  }
`;
