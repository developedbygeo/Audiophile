import styled from 'styled-components/macro';

import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { Description } from 'components/UI/Text.styled';
import { flexMixin } from 'shared/mixins';
import { interactNav, interactAndHover } from 'shared/styles/interactive.styles';

export const StyledFooter = styled(LargeSimpleContainer)`
  ${flexMixin('space-evenly', 'center', 'column')};
  position: relative;
  height: 70vh;
  width: 100%;
  gap: 2rem;
  border-radius: 0;
  padding: 2rem 5vh;
  margin-top: 5vh;
  background: rgb(${({ theme }) => theme.colors.black});

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.25rem;
    width: 25%;
    height: 0.75rem;
    background: rgb(${({ theme }) => theme.colors.brand});
  }
`;

export const StyledLinks = styled.div`
  ${flexMixin('space-evenly', 'center', 'column')};
  gap: 2rem;
  a {
    color: rgb(${({ theme }) => theme.colors.white});
    font-weight: 500;
    ${interactNav};
    ${interactAndHover};
  }
`;

export const FooterDescription = styled(Description)`
  font-weight: 500;
  line-height: 1.5;
  font-size: 1.7rem;
  color: rgba(${({ theme }) => theme.colors.white}, 0.5);
`;

export const Copyright = styled(FooterDescription)`
  font-weight: 600;
`;

export const Social = styled(FooterDescription)`
  ${flexMixin('center', 'center', 'row')};
  gap: 10vw;

  svg {
    transform: scale(1.6);
    color: rgb(${({ theme }) => theme.colors.white});
  }
`;
