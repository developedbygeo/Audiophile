import { css } from 'styled-components';
import { interactCta, secondaryColorInteract } from './interactive.styles';
import { elevationOne } from './shadows.styles';

const commonStyling = css`
  letter-spacing: 0.125rem;
  font-weight: ${({ theme }) => theme.typography.weights.heading};
`;

export const ctaStyling = css`
  color: rgb(${({ theme }) => theme.colors.white});
  background: rgb(${({ theme }) => theme.colors.brand});
  ${commonStyling};
  ${elevationOne};
  ${interactCta};
`;

export const secondaryStyling = css`
  background: transparent;
  border: 0.2rem solid rgb(${({ theme }) => theme.colors.black});
  color: rgb(${({ theme }) => theme.colors.black});
  ${commonStyling};
  ${secondaryColorInteract};
  ${elevationOne};
`;

export const baseCtaButtonStyling = css`
  height: 7rem;
  width: 25rem;
  text-align: center;
`;
