import styled from 'styled-components';

import { flexMixin } from 'shared/mixins';
import { colorInteract, interactAndHover } from 'shared/styles/interactive.styles';
import { Card } from 'components/UI/Card.styled';
import { devices } from 'shared/breakpoints';
import { grayDescription } from 'components/UI/Text.styled';

export const StyledCategories = styled.section`
  background: rgb(${({ theme }) => theme.colors.white});
  padding: 11vh 0 5vh 0;
  ${flexMixin('space-between', 'center', 'column')};
  gap: 2rem;

  &.mobile-nav {
    height: 100vh;
  }

  /* when it is being used a custom nav */
  &.tablet-nav {
    padding: 12.5vh 0 5vh 0;
    & > div {
      height: 15vh;
    }
  }

  @media (max-width: 330px) {
    &.mobile-nav {
      gap: 10vh;
      & > div {
        height: 19.5vh;
      }
    }
    &:not(.mobile-nav) {
      min-height: 100vh;

      & > div {
        height: 20.5vh;
      }
    }
  }
  @media (min-width: 240px) and (max-width: 767px) and (min-height: 900px) {
    &.mobile-nav {
      height: 100vh;
    }
    & > div {
      height: 15.5vh;
    }
  }

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    padding-inline: 5%;
    flex-direction: row;
    min-height: 30vh;
    & > div {
      width: 30vw;
      height: 15vh;
    }
  }

  @media ${devices.laptop} {
    margin-top: 5vh;
    padding-inline: 10%;
    & > div {
      height: 22.5vh;
    }
  }
  @media ${devices.landscapeMobileSS} {
    & > div {
      height: 25vh;
    }
  }
  @media ${devices.landscapeMobileM} {
    & > div {
      height: 30vh;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) and (min-height: 451px) and (max-height: 680px) {
    & > div {
      height: 25vh;
    }
    &.tablet-nav > div {
      height: 25vh;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, 0);
  img {
    width: 20rem;
    height: 15rem;
    object-fit: contain;
  }
`;

export const CategoryCard = styled(Card)`
  height: 17.5vh;
  width: 70vw;
  ${flexMixin('center', 'center', 'column')};
  padding-top: 2vh;

  h1 {
    font-size: 2rem;
  }
  a {
    ${flexMixin('center', 'center', 'row')};
    gap: 1rem;
    padding: 1rem;
    ${interactAndHover};

    span {
      ${grayDescription};
      font-weight: 400;
    }
    @media (hover: hover) {
      &:hover {
        span {
          font-weight: ${({ theme }) => theme.typography.weights.heading};
        }
      }
    }
    svg {
      color: rgb(${({ theme }) => theme.colors.brand});
      ${colorInteract}
    }
  }
`;
