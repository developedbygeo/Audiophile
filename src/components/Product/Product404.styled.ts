import styled from 'styled-components';
import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
import { DetailsContainer } from './ProductDetails.styled';

export const StyledNotFound = styled(DetailsContainer)`
  height: auto;
  width: 100%;
  min-height: initial;
  margin-bottom: 10vh;
  gap: 0;

  h1 {
    text-transform: capitalize;
  }
  p {
    font-size: 2.2rem;
    font-weight: ${({ theme }) => theme.typography.weights.subheading};
  }

  .svg-cont {
    width: 100%;
    height: auto;
    svg {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    height: 85vh;
    grid-template-columns: 1fr;
    h1,
    a {
      justify-self: center;
    }
    .svg-cont svg {
      height: 50vh;
    }
  }
  @media ${devices.laptop} {
    ${flexMixin('center', 'center', 'column')};
    height: 90vh;
    margin: 0;
    gap: 2vh;
    a {
      align-self: center;
    }
  }
`;
