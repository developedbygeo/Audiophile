import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { resetDefaults, flexMixin } from 'shared/mixins';
import { baseCtaButtonStyling, ctaStyling, secondaryStyling } from 'shared/styles/button.styles';
import { BaseProps, LinkProps } from 'shared/models/props.model';
import { interactCta } from 'shared/styles/interactive.styles';

export const UnstyledButton = styled.button<BaseProps>`
  ${resetDefaults};
  height: 5rem;
  width: 5rem;
  padding-block: 1rem;
  padding-inline: 2rem;
`;

export const CtaButton = styled.button<BaseProps>`
  ${resetDefaults}
  width: 25rem;
  height: 7rem;
  color: rgb(${({ theme }) => theme.colors.white});
  background: rgb(${({ theme }) => theme.colors.brand});
  font-weight: ${({ theme }) => theme.typography.weights.heading};
  letter-spacing: 0.125rem;
  ${interactCta}
`;

export const ProductLink = styled(NavLink)<LinkProps>`
  ${baseCtaButtonStyling};
  ${flexMixin('center', 'center', 'row')};
  &.sec {
    ${secondaryStyling};
  }
  &:not(.sec) {
    ${ctaStyling};
  }
`;
