import styled from 'styled-components/macro';

import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { flexMixin, gridMixin } from 'shared/mixins';
import { elevationOne } from 'shared/styles/shadows.styles';
import { tertiaryColorInteract } from 'shared/styles/interactive.styles';
import { devices } from 'shared/breakpoints';

import { zx9 as zx9Images, zx7 as zx7Images, yx1 as yx1Images } from 'shared/images';
import { whiteishDescription } from 'components/UI/Text.styled';

export const BigContainer = styled(LargeSimpleContainer)`
  position: relative;
  background: rgb(${({ theme }) => theme.colors.brand});
  overflow: hidden;
  margin-top: 10vh;
  height: 80vh;

  @media ${devices.tablet} {
    margin-top: 5vh;
  }

  @media ${devices.laptop} {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
  }

  /* pseudo circle underneath h1 */
  @media (max-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0%;
      transform: translate(-15%, -50%) skew(-6deg);
      height: 155%;
      width: 175%;
      border-bottom: 0.2rem solid rgba(${({ theme }) => theme.colors.extraGrayish}, 0.35);
      border-radius: 50%;
    }
  }
  @media ${devices.landscapeMobileSS} {
    &::before {
      height: 195%;
    }
  }

  .zx9-btn {
    ${elevationOne};
    ${tertiaryColorInteract};
  }

  /* zx9 container */
  &.featured > div {
    width: 100%;
    height: 100%;
    padding: 5rem 10rem;
    ${flexMixin('space-around', 'center', 'column')};

    p {
      ${whiteishDescription};
    }

    @media ${devices.tablet} {
      padding: 5rem 15rem;
    }
  }

  h1 {
    color: rgb(${({ theme }) => theme.colors.white});
    @media screen and (max-width: 768px) {
      position: relative;
    }
  }

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    height: 80vh;
  }
  @media ${devices.landscapeMobileM} {
    height: 85vh;
  }
  @media ${devices.laptop} {
    height: 60vh;

    &.featured > div {
      ${gridMixin('repeat(2, 1fr)', '0.5fr 0.1fr 0.5fr .5fr')};
      row-gap: 2rem;
      column-gap: 8vw;
      align-items: flex-start;
      padding: 0rem 10rem;
      h1 {
        grid-area: 2/2/2/3;
        text-align: left;
      }
      p {
        grid-area: 3/2/3/3;
        text-align: left;
      }
      a {
        grid-area: 4/2/4/3;
        justify-self: flex-start;
      }
    }
  }
  @media ${devices.landscapeMobileM} {
    &.featured > div {
      padding: 1rem 15rem;
    }
  }
`;

export const SmallerContainer = styled(LargeSimpleContainer)`
  height: 60vh;
  width: 90%;
  border-radius: 2rem;
  padding-inline: 4vw;
  margin-top: 4vh;

  @media ${devices.tablet} {
    height: 40vh;
    padding-inline: 0;
    a {
      box-shadow: none;
      width: 20rem;
    }
  }
  @media ${devices.laptop} {
    width: 80%;
  }
  h1 {
    color: rgb(${({ theme }) => theme.colors.black});
    font-size: 3rem;
  }

  &.zx7-home {
    ${flexMixin('center', 'flex-start', 'column')};
    gap: 2rem;
    background: url(${zx7Images[0]}) no-repeat center;
    background-size: cover;
    min-height: 20rem;
    min-width: 20rem;

    @media ${devices.tablet}, ${devices.landscapeMobileSS} {
      padding-left: 3vw;
      background: url(${zx7Images[1]}) no-repeat center;
      background-size: cover;
      height: 35vh;
    }
    @media ${devices.laptop} {
      padding: 0 3rem 0 10vw;
      background: url(${zx7Images[2]}) no-repeat center;
      background-size: cover;
      height: 45vh;
      h1 {
        font-size: 3rem;
      }
    }
    @media ${devices.landscapeMobileM} {
      height: 40vh;
    }
  }

  &.yx1 {
    padding: 0;
    ${flexMixin('center', 'center', 'column')};
    gap: 2vh;

    @media ${devices.tablet}, ${devices.landscapeMobileSS} {
      height: 30vh;
      margin-top: 4vh;
      flex-direction: row;
      gap: 1rem;
    }
    div {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      margin-top: 0;
    }
  }
  @media ${devices.laptop} {
    padding-inline: 10rem;
    gap: 0;
    h1 {
      font-size: 3rem;
    }
  }
  @media ${devices.landscapeMobileM} {
    height: 35vh;
  }
`;

export const Zx9Image = styled.div`
  position: relative;
  background: url(${zx9Images[0]}) no-repeat center;
  background-size: contain;
  min-height: 25rem;
  min-width: 20rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 225%;
    height: 210%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0.2rem solid rgba(${({ theme }) => theme.colors.extraGrayish}, 0.35);
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 175%;
    height: 175%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0.2rem solid rgba(${({ theme }) => theme.colors.extraGrayish}, 0.35);
    pointer-events: none;
  }

  @media ${devices.tablet} {
    background: url(${zx9Images[1]}) no-repeat center;
    background-size: contain;
    min-height: 30rem;
    min-width: 30rem;
  }
  @media ${devices.laptop} {
    background: url(${zx9Images[2]}) no-repeat center;
    background-size: contain;
    height: 100%;
    margin-top: 1rem;
    grid-area: 2/1/5/1;
    &::before {
      height: 160%;
      width: 125%;
    }
    &::after {
      height: 190%;
      width: 150%;
    }
  }
  @media ${devices.landscapeMobileSS} {
    &::before {
      width: 220%;
      height: 185%;
    }
    &::after {
      width: 170%;
      height: 160%;
    }
  }
  @media ${devices.landscapeMobileM} {
    min-height: 30vh;
  }
`;

export const EarphonesContainer = styled(SmallerContainer)`
  background: url(${yx1Images[0]}) no-repeat center;
  background-size: cover;
  @media ${devices.tablet} {
    background: url(${yx1Images[1]}) no-repeat center;
    background-size: cover;
  }
  @media ${devices.laptop} {
    background: url(${yx1Images[2]}) no-repeat center;
    background-size: cover;
  }
`;

export const FeaturedText = styled(SmallerContainer)`
  ${flexMixin('center', 'flex-start', 'column')};
  background: rgb(${({ theme }) => theme.colors.silver});
  gap: 3vh;
  padding: 2rem 3rem;
  @media ${devices.tablet} {
    align-items: center;
    padding-inline: 1vw;
    h1 {
      padding-inline: 1vw;
      text-align: left;
      margin-left: 0;
    }
    h1,
    button {
      margin-left: 0;
    }
  }
  @media ${devices.laptop} {
    padding-left: 3vw;
    h1,
    a {
      align-self: flex-start;
    }
  }
`;
