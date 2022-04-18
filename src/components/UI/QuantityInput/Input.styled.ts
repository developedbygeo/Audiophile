import { flexMixin } from 'shared/mixins';
import styled from 'styled-components/macro';

export const StyledQuantity = styled.div`
  background: rgb(${({ theme }) => theme.colors.silver});
  border: none;
  outline: none;
  padding: 1rem;
  max-width: 20vh;
  border-radius: 0.5rem;
  ${flexMixin('space-between', 'center', 'row')};

  input {
    width: 50%;
    text-align: center;
    background: none;
    outline: none;
    border: none;
  }
  button {
    font-size: 2.25rem;
    font-weight: 700;
    color: rgb(${({ theme }) => theme.colors.smokeyBlack});
    padding: 0.25rem;
    width: 20%;
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
`;
