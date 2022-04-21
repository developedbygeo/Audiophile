import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';
import { StyledImageCont } from 'components/Product/ProductPreview.styled';

export const StyledReview = styled.div`
  min-height: 70vh;
`;

export const ReviewHeader = styled.div`
  ${flexMixin('space-between', 'center', 'row')};
  height: 7vh;

  h1,
  button {
    height: 100%;
  }

  h1 {
    font-size: 2.8rem;
    margin: 0;
  }
  button {
    ${flexMixin('center', 'flex-end', 'column')};
    font-size: 2rem;
    text-align: center;
    padding-block: 5%;
    text-decoration: underline;
    letter-spacing: 0.15rem;
  }
`;

export const CartList = styled.ul`
  max-height: 50vh;
  overflow-y: auto;
  ${flexMixin('space-evenly', 'center', 'column')};
`;

export const CartItem = styled.li`
  width: 100%;
  ${flexMixin('space-between', 'center', 'row')};
`;

export const CartImageCont = styled(StyledImageCont)`
  flex: 0.3;
  height: 100%;
  width: 100%;
  img {
    height: 10vh;
    width: 20vw;
  }
`;

export const CartItemText = styled.div`
  flex: 0.3;
  gap: 1rem;
  ${flexMixin('space-evenly', 'flex-start', 'column')};

  p {
    font-weight: ${({ theme }) => theme.typography.weights.heading};
    color: rgba(${({ theme }) => theme.colors.black}, 0.6);
  }
`;

export const CartItemQuantity = styled.div`
  flex: 0.3;
  ${flexMixin('space-evenly', 'center', 'row')};
  background: rgb(${({ theme }) => theme.colors.silver});
  border-radius: 0.25rem;

  button {
    font-weight: ${({ theme }) => theme.typography.weights.heading};
    color: rgba(${({ theme }) => theme.colors.black}, 0.3);
    @media (hover: hover) {
      &:hover {
        color: rgb(${({ theme }) => theme.colors.brand});
      }
    }
  }
`;
