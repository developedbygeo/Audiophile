import styled from 'styled-components';

import { flexMixin } from 'shared/mixins';
import { elevationFour, elevationLight } from 'shared/styles/shadows.styles';

export const RadioContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 0.185rem solid rgb(${({ theme }) => theme.colors.inputGray});
  ${flexMixin('flex-end', 'center', 'row-reverse')};
  gap: 1.5rem;
  padding-inline: 5%;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      border-color: rgb(${({ theme }) => theme.colors.brand});
      ${elevationLight};
    }
  }

  &.active {
    border-color: rgb(${({ theme }) => theme.colors.brand});
    ${elevationFour}
  }

  label {
    height: 100%;
    width: 100%;
    font-weight: ${({ theme }) => theme.typography.weights.heading};
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: rgb(${({ theme }) => theme.colors.inputGray});
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    display: grid;
    place-content: center;
  }

  input::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em rgba(${({ theme }) => theme.colors.brand});
  }
  input:checked::before {
    transform: scale(1);
  }
`;
