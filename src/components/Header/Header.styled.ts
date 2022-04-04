import styled from 'styled-components/macro';

import { devices } from '../../shared/breakpoints';
import { flexMixin, opacityMixin } from '../../shared/mixins';
import { interactAndHover, showActive } from '../../shared/styles/interactive.styles';

const StyledHeader = styled.header`
  padding-inline: 5%;
  ${flexMixin('space-between', 'center', 'row')};
  background: rgb(${({ theme }) => theme.colors.black});
  border-bottom: 0.2rem solid rgba(${({ theme }) => theme.colors.white}, 0.2);

  & > .menu {
    z-index: 10;
    color: rgb(${({ theme }) => theme.colors.accent});
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

  .mobile-nav {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
    height: 100vh;
    width: 60vw;
    padding: 25% 8vw;
    ${flexMixin('flex-start', 'flex-start', 'column')};
    background: rgba(${({ theme }) => theme.colors.mainBg}, 0.965);

    ${opacityMixin};
    .link-wrapper {
      height: 40%;
      width: 100%;
      ${flexMixin('space-around', 'flex-start', 'column')};
      gap: 3vh;
      a {
        display: flex;
        gap: 2vw;
        letter-spacing: 2.7px;
        ${interactAndHover};
        font-family: 'Barlow Condensed', sans-serif;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
        @media (hover: hover) {
          &::after,
          &::before {
            bottom: -5px;
          }
        }
      }
      span,
      p {
        font-size: 2.5rem;
      }
    }
  }
`;

export default StyledHeader;
