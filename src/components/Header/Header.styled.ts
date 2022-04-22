import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
import { interactNav } from 'shared/styles/interactive.styles';

// TODO add active mixin

export const StyledHeader = styled.header`
  padding-inline: 6%;
  ${flexMixin('space-between', 'center', 'row')};
  background: rgb(${({ theme }) => theme.colors.black});

  .menu {
    color: rgb(${({ theme }) => theme.colors.white});
    padding: 0;
    transform: scale(1.1);
    ${flexMixin('flex-start', 'center', 'row')};
    ${interactNav};
    svg {
      transform: scale(1.5);
    }
  }

  & > .cart {
    justify-content: flex-end;
  }

  & > .menu {
    z-index: 10;
    @media ${devices.tablet} {
      display: none;
    }
  }
  .logo-wrapper {
    ${flexMixin('center', 'center', 'row')};
  }
  .logo {
    transform: scale(0.75);
  }
  .num {
    font-weight: 800;
  }
`;
