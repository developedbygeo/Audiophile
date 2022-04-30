import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { gridMixin } from 'shared/mixins';

export const StyledProducts = styled.section`
  ${gridMixin('1fr', 'auto')};
  padding: 0;
  gap: 10vh;
  margin: 2vh 0 10vh 0;

  @media ${devices.tablet} {
    margin-block: 10vh;
  }
`;
