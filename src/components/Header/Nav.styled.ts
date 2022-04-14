import styled from 'styled-components';

import { flexMixin, opacityMixin } from 'shared/mixins';
import { interactAndHover } from 'shared/styles/interactive.styles';

const StyledNav = styled.nav`
  &.mobile-nav {
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

export default StyledNav;
