import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';

export const StyledReview = styled.div`
  min-height: 55vh;
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
