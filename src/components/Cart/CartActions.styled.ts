import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';

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
