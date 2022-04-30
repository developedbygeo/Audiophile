import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
import { CtaButton } from 'components/UI/Button.styled';
import { fadeOut, fadeIn } from 'shared/animations';

export const StyledQuantity = styled.div`
  background: rgb(${({ theme }) => theme.colors.silver});
  border: none;
  outline: none;
  padding: 1rem;
  max-width: 20vh;
  border-radius: 0.5rem;
  transition: all 250ms ease;
  ${flexMixin('space-between', 'center', 'row')};

  input {
    width: 50%;
    text-align: center;
    background: none;
    outline: none;
    border: none;
  }
  /* input form buttons */
  button {
    font-size: 2.25rem;
    font-weight: 700;
    padding: 0.25rem;
    height: 80%;
    width: 20%;
    ${flexMixin('center', 'center', 'column')};
    border-radius: 50%;
    transition: all 100ms ease;
    border: none;
    outline: none;
    background: transparent;
    @media (hover: hover) {
      &:hover {
        color: rgb(${({ theme }) => theme.colors.brand});
        background: rgb(${({ theme }) => theme.colors.mainBg});
      }
    }
    &:active {
      box-shadow: inset 0 0 0.05rem 0.025rem rgba(${({ theme }) => theme.colors.black}, 0.25);
    }
  }

  @media ${devices.tablet} {
    button {
      height: auto;
      width: auto;
      padding: 0.5rem;
    }
  }
`;

export const AddCartButton = styled(CtaButton)`
  overflow: hidden;
  position: relative;
  transition: all 200ms ease;
  ${flexMixin('center', 'center', 'row')};
  svg {
    position: absolute;
    opacity: 0;
  }

  &.success {
    background: transparent;
    box-shadow: none;
    cursor: not-allowed;
    span {
      position: absolute;
      animation: ${fadeOut} 0.15s ease-in-out;
      opacity: 0;
      transform: translate(150%, -100%);
    }
    svg {
      position: relative;
      transform: scale(2);
      color: rgb(25, 135, 84);
      left: 0;
      animation: ${fadeIn} 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;
