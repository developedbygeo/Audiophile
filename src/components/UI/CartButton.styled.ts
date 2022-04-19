import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';
import { interactNav } from 'shared/styles/interactive.styles';
import { UnstyledButton } from './Button.styled';

export const StyledCartButton = styled(UnstyledButton)`
  position: relative;
  color: rgb(${({ theme }) => theme.colors.white});
  padding: 0;
  transform: scale(1.1);
  ${flexMixin('flex-start', 'center', 'row')};
  ${interactNav};
  svg {
    transition: all 100ms ease;
    transform: scale(1.5);
  }

  span {
    transition: all 100ms ease;
    position: absolute;
    bottom: 0.5rem;
    width: auto;
    min-width: 2.2rem;
    height: 2rem;
    border-radius: 50%;
    right: 0.5rem;
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.typography.weights.heading};
    background: rgb(${({ theme }) => theme.colors.smokeyBlack});
    ${flexMixin('center', 'center', 'row')};
  }
  @media (hover: hover) {
    &:hover > span {
      background: rgba(${({ theme }) => theme.colors.white}, 1);
      color: rgb(${({ theme }) => theme.colors.black});
    }
  }
  &:active > svg {
    transform: scale(1.25);
  }
`;
