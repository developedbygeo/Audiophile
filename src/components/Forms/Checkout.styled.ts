import styled from 'styled-components/macro';

import { flexMixin, gridMixin } from 'shared/mixins';
import { BigContainer } from 'components/Landing/Featured.styled';
import { devices } from 'shared/breakpoints';

export const PageBackground = styled.div`
  background: rgb(${({ theme }) => theme.colors.silver});
  width: 100%;
  height: auto;
  min-height: 100vh;
  ${gridMixin('1fr', 'auto')};
  gap: 4rem;

  /* desktop form layout */
  @media ${devices.laptop} {
    & > form {
      width: 82.5%;
      margin: auto;
      ${gridMixin('1fr 0.5fr', 'auto')};
      gap: 2rem;
      margin-top: 5vh;

      section,
      ul {
        margin-top: 0;
        width: 100%;
      }
    }
  }
`;

export const StyledCheckout = styled(BigContainer)`
  width: 90%;
  height: auto;
  min-height: 120vh;
  padding-top: 0;
  padding: 7.5% 5%;
  margin-top: 6vh;
  background: rgb(${({ theme }) => theme.colors.white});
  ${gridMixin('1fr', 'auto 1fr')};
  gap: 1rem;

  h1 {
    color: rgb(${({ theme }) => theme.colors.black});
    text-align: left;
    font-size: 2.8rem;
  }

  h1,
  h2 {
    margin: 0;
  }

  &::before {
    display: none;
  }

  h2 {
    font-size: 2rem;
    color: rgb(${({ theme }) => theme.colors.brand});
    letter-spacing: 0.1rem;
  }

  .error {
    width: 100%;
    text-align: center;
    color: rgb(${({ theme }) => theme.colors.ctaRed});
    font-weight: ${({ theme }) => theme.typography.weights.heading};
    letter-spacing: 0.12rem;
  }

  @media ${devices.tablet} {
    min-height: initial;
    grid-template-rows: auto minmax(40vh, auto);
    gap: 0;
  }

  @media ${devices.laptop} {
    width: 80%;
    padding: 2.5% 5%;
  }
`;

export const FormSection = styled.article`
  ${flexMixin('space-evenly', 'flex-start', 'column')};
  min-height: 60vh;
  gap: 2rem;
  padding-block: 3vh;

  &.shipping-section {
    h2 {
      margin-bottom: 2rem;
    }
  }

  &.payment-section {
    ${gridMixin('1fr', 'auto')};
    h3 {
      margin-block: 2rem;
      font-size: 1.8rem;
      font-weight: ${({ theme }) => theme.typography.weights.heading};
    }
    .radio {
      height: 10rem;
    }
    .radio-group {
      height: 30vh;
      ${flexMixin('space-evenly', 'flex-start', 'column')};
    }
    .payment-details {
      ${flexMixin('space-evenly', 'flex-start', 'column')};
      gap: 1.5rem;
      margin-block: 2.5rem;
    }
  }

  @media ${devices.tablet} {
    &.billing-section {
      ${gridMixin('repeat(2, 1fr)', '0.1fr repeat(2, minmax(10rem, 18rem))')};
      row-gap: 0;
      align-items: center;
      min-height: initial;
      height: 40vh;
      padding-bottom: 0;
      column-gap: 5vw;

      h2 {
        grid-area: 1/1/1/3;
        padding-block: 3rem;
      }
    }
    &.shipping-section {
      ${gridMixin('repeat(2, 1fr)', '0.1fr repeat(3, minmax(10rem, 18rem))')};
      align-items: center;
      row-gap: 0;
      min-height: initial;
      height: 50vh;

      h2 {
        grid-area: 1/1/1/3;
      }
      .address-cont {
        grid-area: 2/1/2/3;
      }
    }
  }
  &.payment-section {
    min-height: 40vh;
    ${gridMixin('repeat(2, 1fr)', '.05fr auto')};
    h3 {
      grid-area: 2/1/2/1;
    }
    .radio-group {
      grid-area: 2/2/3/2;
    }
    .payment-details {
      grid-area: 3/1/3/3;
      ${flexMixin('space-between', 'center', 'row')};
    }
  }
  @media ${devices.laptop} {
    &.billing-section,
    &.shipping-section {
      height: auto;
    }
    &.billing-section {
      grid-template-rows: 0.1fr repeat(2, minmax(10rem, 15rem));
    }
    &.shipping-section {
      grid-template-rows: 0.1fr repeat(3, minmax(10rem, 15rem));
    }
  }
`;

export const InputContainer = styled.div`
  ${flexMixin('space-between', 'flex-start', 'column')};
  gap: 1.5rem;
  width: 100%;

  &.error {
    label {
      color: rgb(${({ theme }) => theme.colors.ctaRed});
    }
    & p {
      color: rgb(${({ theme }) => theme.colors.ctaRed});
    }
    & input {
      border: 0.25rem solid rgb(${({ theme }) => theme.colors.ctaRed});
    }
  }
`;

export const InputField = styled.input`
  padding: 1rem;
  width: 100%;
  height: 6.5rem;
  border: none;
  outline: none;
  border-radius: 0.75rem;
  border: 0.125rem solid rgb(${({ theme }) => theme.colors.inputGray});

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

export const LabelContainer = styled.div`
  ${flexMixin('space-between', 'center', 'row')};
  width: 100%;

  label {
    font-weight: ${({ theme }) => theme.typography.weights.heading};
  }

  p {
    font-weight: ${({ theme }) => theme.typography.weights.subheading};
    letter-spacing: initial;
  }
`;
