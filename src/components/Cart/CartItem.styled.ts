import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';
import { StyledImageCont } from 'components/Product/ProductPreview.styled';

export const CartItemContainer = styled.li`
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
