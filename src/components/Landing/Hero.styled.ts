import styled from 'styled-components/macro';

import { devices } from '../../shared/breakpoints';
import { landing } from '../../shared/images';
import { flexMixin } from '../../shared/mixins';

const StyledHero = styled.section`
  background: url(${landing[0]}) no-repeat center;
  background-size: cover;

  @media ${devices.tablet} {
    background: url(${landing[1]}) no-repeat center;
  }
  @media ${devices.laptop} {
    background: url(${landing[2]}) no-repeat center;
  }

  ${flexMixin('center', 'center', 'column')};
  gap: 1rem;

  h1,
  h2 {
    text-align: center;
  }
  h1 {
    font-weight: 300;
    color: rgba(${({ theme }) => theme.colors.silver}, 0.35);
    font-size: 2rem;
    letter-spacing: 1rem;
  }
  h2 {
    color: rgba(${({ theme }) => theme.colors.white}, 1);
  }
  p {
    color: rgba(${({ theme }) => theme.colors.white}, 0.75);
    letter-spacing: 0.25rem;
    line-height: 1.75;
  }
  .header-wrapper {
    margin-top: 10vh;
  }
  .cta-wrapper {
    margin-top: 3vh;
  }
`;

export default StyledHero;
