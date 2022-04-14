import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
import { interactNav } from 'shared/styles/interactive.styles';

// TODO add active mixin

export const StyledHeader = styled.header`
  padding-inline: 5%;
  ${flexMixin('space-between', 'center', 'row')};
  background: rgb(${({ theme }) => theme.colors.black});
  border-bottom: 0.2rem solid rgba(${({ theme }) => theme.colors.white}, 0.15);

  .menu,
  .cart {
    color: rgb(${({ theme }) => theme.colors.white});
    ${interactNav};
    svg {
      transform: scale(1.5);
    }
  }

  & > .menu {
    z-index: 10;
    @media ${devices.tablet} {
      display: none;
    }
  }
  .logo {
    transform: scale(0.75);
  }
  .num {
    font-weight: 800;
  }
`;
