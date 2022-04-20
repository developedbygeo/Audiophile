import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';
import { StyledImageCont } from 'components/Product/ProductPreview.styled';

export const StyledReview = styled.div`
  min-height: 70vh;
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
    width: 10vw;
  }
`;

export const CartItemText = styled.div`
  flex: 0.3;
`;
