import { flexMixin } from 'shared/mixins';
import styled from 'styled-components/macro';

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
