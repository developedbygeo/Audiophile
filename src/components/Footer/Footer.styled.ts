import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { Description } from 'components/UI/Text.styled';
import { flexMixin, gridMixin } from 'shared/mixins';
import { interactNav, interactAndHover } from 'shared/styles/interactive.styles';

export const StyledFooter = styled(LargeSimpleContainer)`
  ${flexMixin('space-evenly', 'center', 'column')};
  position: relative;
  min-height: 70vh;
  height: auto;
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

  @media ${devices.tablet} {
    min-height: 40vh;
    padding: 2rem 5vw;
    align-items: flex-start;
    &::before {
      left: 17%;
    }
  }
  @media ${devices.laptop} {
    min-height: 50vh;
    padding: 2.5% 10%;
    ${gridMixin('1fr 0.7fr', ' 0.1fr 1fr repeat(2, 0.8fr)')};

    & > small {
      grid-area: 4/1/4/3;
      align-self: center;
      padding-right: 2.5%;
    }
    & > p {
      grid-area: 2/1/4/1;
      align-self: center;
      padding-right: 2.5%;
    }

    &::before {
      transform: translateX(-30%);
    }
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

  @media ${devices.tablet} {
    flex-direction: row;
    gap: 1vw;
  }
`;

export const FooterDescription = styled(Description)`
  font-weight: 500;
  line-height: 1.5;
  font-size: 1.7rem;
  color: rgba(${({ theme }) => theme.colors.white}, 0.5);

  @media ${devices.tablet} {
    text-align: left;
  }
`;

export const Copyright = styled(FooterDescription)`
  font-weight: 600;
`;

export const FinePrint = styled.small`
  width: 100%;
  height: 100%;
  ${flexMixin('space-evenly', 'center', 'column')};
  gap: 3rem;

  @media ${devices.tablet} {
    ${flexMixin('space-between', 'center', 'row')};
    height: auto;
  }
`;

export const Social = styled(FooterDescription)`
  ${flexMixin('center', 'center', 'row')};
  gap: 10vw;

  svg {
    transform: scale(1.6);
    color: rgb(${({ theme }) => theme.colors.white});
  }

  @media ${devices.tablet} {
    gap: 5vw;
  }
  @media ${devices.laptop} {
    gap: 3.5vw;
  }
`;
