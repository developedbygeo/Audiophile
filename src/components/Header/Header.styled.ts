import styled from 'styled-components';

import { devices } from 'shared/breakpoints';
import { landing } from 'shared/images';
import { flexMixin } from 'shared/mixins';
import { interactNav } from 'shared/styles/interactive.styles';

export const StyledHeader = styled.header`
  padding-inline: 6%;
  ${flexMixin('space-between', 'center', 'row')};
  background: rgb(${({ theme }) => theme.colors.black});

  &.home-header {
    background: url(${landing[0]}) no-repeat top;
    background-size: cover;
  }

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
    @media ${devices.laptop} {
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

  @media ${devices.tablet} {
    padding-inline: 4%;
    .logo-wrapper {
      flex: 0.7;
      justify-content: flex-start;
    }
    .logo {
      transform: scale(1.5);
    }
    .menu {
      justify-content: center;
      svg {
        transform: scale(2);
      }
    }
  }
  @media (min-width: 1024px) {
    padding-inline: 10%;
    justify-content: space-between;

    &.home-header {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0%;
        width: 80vw;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 0.1rem;
        background: rgba(${({ theme }) => theme.colors.white}, 0.25);
      }
    }
    .logo-wrapper {
      justify-content: flex-start;
      order: 1;
      flex: initial;
    }
    .logo {
      transform: scale(1);
    }
    nav {
      order: 2;
    }
    button {
      order: 3;
    }
  }
  @media ${devices.laptop} {
    .logo {
      transform: scale(1.3);
    }
  }
  @media ${devices.desktop4K} {
    .logo {
      transform: scale(2);
    }
  }
  @media ${devices.landscapeMobileSS} {
    .logo-wrapper {
      ${flexMixin('center', 'center', 'row')};
    }
    .logo {
      transform: scale(1);
    }
  }
`;
