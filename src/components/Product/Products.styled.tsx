import styled from 'styled-components/macro';

import { gridMixin } from 'shared/mixins';

export const StyledProducts = styled.section`
  ${gridMixin('1fr', 'auto')};
  gap: 10vh;
`;
