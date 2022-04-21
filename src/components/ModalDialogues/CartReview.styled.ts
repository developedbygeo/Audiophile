import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';
import { StyledImageCont } from 'components/Product/ProductPreview.styled';

export const StyledReview = styled.div`
  min-height: 40vh;
  padding: 1rem;
  ${flexMixin('space-between', 'flex-start', 'column')};

  & > button {
    height: 6rem;
    width: 100%;
  }
`;

export const ReviewHeader = styled.div`
  width: 100%;
  ${flexMixin('space-between', 'center', 'row')};
  height: 7vh;

  h1,
  button {
    height: 100%;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
  button {
    ${flexMixin('center', 'flex-end', 'column')};
    font-size: 1.8rem;
    text-align: center;
    padding-block: 5%;
    text-decoration: underline;
    letter-spacing: 0.15rem;
  }
`;

export const CartList = styled.ul`
  width: 100%;
  max-height: 60vh;
  overflow-y: auto;
  ${flexMixin('flex-start', 'center', 'column')};
  gap: 2rem;
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

export const CartPrice = styled.div`
  width: 100%;
  ${flexMixin('space-between', 'center', 'row')};
  h2 {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.weights.body};
    color: rgba(${({ theme }) => theme.colors.black}, 0.6);
  }
  h3 {
    font-size: 2.4rem;
  }
`;
