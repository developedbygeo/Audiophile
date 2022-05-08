import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { landing } from 'shared/images';
import { flexMixin } from 'shared/mixins';
import { elevationThree } from 'shared/styles/shadows.styles';
import { whiteishDescription } from 'components/UI/Text.styled';

const StyledHero = styled.section`
  min-height: 90vh;
  padding-inline: 10%;
  width: 100%;
  margin-bottom: 7.5vh;
  background: url(${landing[0]}) no-repeat center;
  background-size: cover;

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
    ${whiteishDescription};
  }
  .header-wrapper {
    margin-top: 10vh;
  }
  .cta-wrapper {
    margin-top: 3vh;
    button {
      ${elevationThree};
    }
  }

  @media ${devices.tablet} {
    background: url(${landing[1]}) no-repeat center;
    background-size: cover;
  }
  @media ${devices.laptop}, ${devices.landscapeMobileSS} {
    background: url(${landing[2]}) no-repeat center;
    background-size: cover;
    align-items: flex-start;

    .header-wrapper {
      margin-top: 0;
    }

    div {
      width: 40vw;
      h1,
      h2,
      p {
        text-align: left;
      }
    }
  }
  @media ${devices.landscapeMobileSS} {
    background: url(${landing[2]}) no-repeat center;
    background-size: cover;
  }
`;

export default StyledHero;
