import styled from 'styled-components';

import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';

export const StyledReview = styled.div`
  min-height: 40vh;
  padding: 1rem;
  ${flexMixin('space-between', 'flex-start', 'column')};

  h2 {
    font-size: 1.9rem;
    font-weight: ${({ theme }) => theme.typography.weights.subheading};
  }
  h3 {
    font-size: 2.25rem;
  }

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    min-height: 40vh;
  }

  & > button {
    height: 6rem;
    width: 100%;
  }
  @media ${devices.laptop} {
    min-height: 35vh;
    gap: 1rem;
    padding: 0 3%;
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
    font-size: 2.25rem;
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

  @media ${devices.laptop} {
    max-height: 55vh;
    gap: 3.5rem;
  }
`;
