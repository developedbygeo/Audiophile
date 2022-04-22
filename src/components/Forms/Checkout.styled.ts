import styled from 'styled-components/macro';

import { flexMixin, gridMixin } from 'shared/mixins';
import { BigContainer } from 'components/Landing/Featured.styled';

export const PageBackground = styled.div`
  background: rgb(${({ theme }) => theme.colors.silver});
  width: 100%;
  height: auto;
  min-height: 100vh;

  h1 {
    color: rgb(${({ theme }) => theme.colors.black});
    text-align: left;
    font-size: 2.8rem;
  }

  h1,
  h2 {
    margin: 0;
  }
`;

export const StyledCheckout = styled(BigContainer)`
  width: 90%;
  height: auto;
  min-height: 120vh;
  padding-top: 0;
  padding: 7.5% 5%;
  margin-block: 7.5vh;
  background: rgb(${({ theme }) => theme.colors.white});
  ${gridMixin('1fr', 'auto 1fr')};
  gap: 1rem;

  &::before {
    display: none;
  }

  h2 {
    font-size: 2rem;
    color: rgb(${({ theme }) => theme.colors.brand});
    letter-spacing: 0.1rem;
  }

  form {
    ${gridMixin('1fr', 'repeat(2, 1fr)')};
    gap: 4rem;
  }
`;

export const FormSection = styled.div`
  ${flexMixin('space-evenly', 'flex-start', 'column')};
  min-height: 30vh;
  gap: 2rem;

  label {
    font-weight: ${({ theme }) => theme.typography.weights.heading};
  }

  &.shipping-section {
    h2 {
      margin-bottom: 2rem;
    }
  }
`;

export const InputContainer = styled.div`
  ${flexMixin('space-between', 'flex-start', 'column-reverse')};
  gap: 1.5rem;
  width: 100%;
`;

export const InputField = styled.input`
  padding: 1rem;
  width: 100%;
  height: 6.5rem;
  border: none;
  outline: none;
  border-radius: 0.75rem;
  border: 0.125rem solid rgb(${({ theme }) => theme.colors.inputGray});

  &.error {
    border: 0.175rem solid rgb(${({ theme }) => theme.colors.ctaRed});
    & ~ div > label {
      color: rgb(${({ theme }) => theme.colors.ctaRed});
    }
    & ~ p {
      color: rgb(${({ theme }) => theme.colors.ctaRed});
    }
  }

  @media (hover: hover) {
    &:hover {
      border-color: rgb(${({ theme }) => theme.colors.brand});
    }
  }

  &::placeholder {
    opacity: 1;
    font-weight: ${({ theme }) => theme.typography.weights.body};
    color: rgba(${({ theme }) => theme.colors.black}, 0.45);
  }

  &:focus {
    font-weight: ${({ theme }) => theme.typography.weights.body};
    color: rgb(${({ theme }) => theme.colors.black});
    border: 0.17rem solid rgb(${({ theme }) => theme.colors.brand});
    caret-color: rgb(${({ theme }) => theme.colors.brand});
  }
`;
