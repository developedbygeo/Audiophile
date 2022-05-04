/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/macro';

import { flexMixin, opacityMixin } from 'shared/mixins';
import { interactAndHover } from 'shared/styles/interactive.styles';
import { devices } from 'shared/breakpoints';

// TODO implement StyledNav for desktop/tablet
export const StyledDesktopNav = styled.nav`
  ${flexMixin('space-between', 'center', 'row')};
  gap: 4rem;

  a {
    color: rgb(${({ theme }) => theme.colors.white});
    font-size: 1.6rem;
    ${interactAndHover};
  }
  .active {
    color: rgb(${({ theme }) => theme.colors.accent});
    &::after {
      display: none;
    }
  }
`;

export const StyledMobileNav = styled.nav`
  position: absolute;
  width: 100%;
  height: 20vh;
  top: 10vh;
  right: 0;
  z-index: 9;
  background: rgb(${({ theme }) => theme.colors.white});

  section {
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10rem;
    box-shadow: 0px 12px 14px 4px rgba(0, 0, 0, 0.5);
    padding-block: 10vh;

    & > div {
      width: 80%;
    }
  }

  h1 {
    font-size: 1.8rem;
  }

  img {
    width: 15rem;
  }

  @media ${devices.tablet} {
    section {
      flex-direction: row;
      gap: 1rem;
      padding-block: 0;
      padding: 11vh 0 5vh 0;

      & > div {
        width: 30vw;
      }
    }
  }
`;
