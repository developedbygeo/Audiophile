import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';

export const StyledNoItems = styled.div`
  position: relative;
  overflow: hidden;
  height: 35vh;
  padding-inline: 20%;
  ${flexMixin('space-evenly', 'center', 'column')};

  div {
    ${flexMixin('center', 'center', 'column')};
    gap: 1.5rem;
  }

  h2,
  h3 {
    text-align: center;
    text-transform: initial;
  }
  h3 {
    color: rgb(${({ theme }) => theme.colors.smokeyBlack});
  }
`;
