import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { gridMixin } from 'shared/mixins';

export const StyledProducts = styled.section`
  ${gridMixin('1fr', 'auto')};
  padding: 0;
  gap: 10vh;
  margin: 2vh 0 10vh 0;

  @media ${devices.laptop} {
    min-height: initial;
    padding-inline: 5%;
    margin-block: 0;
    margin: 5vh 0 12.5vh 0;

    /* reversing the order of the second product in preview */
    & > :nth-child(2) {
      & > :nth-child(1) {
        grid-area: 1/2/3/3;
      }
      & > :nth-child(2) {
        grid-area: 1/1/2/1;
      }
      & > a {
        grid-area: 2/1/2/1;
      }
    }
  }
  @media ${devices.landscapeMobileM} {
    margin: 5vh 0 15vh 0;
  }
`;
