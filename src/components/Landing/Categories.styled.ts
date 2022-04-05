import styled from 'styled-components/macro';

import { flexMixin } from '../../shared/mixins';
import { colorInteract, interactAndHover } from '../../shared/styles/interactive.styles';

const StyledCategories = styled.section`
  background: rgb(${({ theme }) => theme.colors.white});
  padding: 11vh 0 5vh 0;
  ${flexMixin('space-between', 'center', 'column')};
  gap: 2rem;

  .category {
    height: 17.5vh;
    width: 70vw;
    ${flexMixin('center', 'center', 'column')};
    padding-top: 2vh;
  }
  h1 {
    font-size: 2rem;
  }
  a {
    ${flexMixin('center', 'center', 'row')};
    gap: 1rem;
    ${interactAndHover};
    span {
      color: rgba(${({ theme }) => theme.colors.black}, 0.5);
    }
    @media (hover: hover) {
      &:hover {
        span {
          color: rgba(${({ theme }) => theme.colors.black}, 1);
        }
      }
    }
    svg {
      color: rgb(${({ theme }) => theme.colors.brand});
      ${colorInteract}
    }
  }
`;

export default StyledCategories;
