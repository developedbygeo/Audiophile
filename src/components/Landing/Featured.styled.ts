import styled from 'styled-components/macro';

import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { flexMixin } from 'shared/mixins';
import { devices } from 'shared/breakpoints';
import { elevationOne } from 'shared/styles/shadows.styles';
import { tertiaryColorInteract } from 'shared/styles/interactive.styles';

import { zx9 as zx9Images, zx7 as zx7Images, yx1 as yx1Images } from 'shared/images';

export const BigContainer = styled(LargeSimpleContainer)`
  position: relative;
  background: rgb(${({ theme }) => theme.colors.brand});
  overflow: hidden;

  /* pseudo circle underneath h1 */
  @media screen and (max-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 0%;
      transform: translate(-15%, -50%) skew(-6deg);
      height: 135%;
      width: 175%;
      border-bottom: 0.2rem solid rgba(${({ theme }) => theme.colors.extraGrayish}, 0.35);
      border-radius: 50%;
    }
  }

  .zx9-btn {
    ${elevationOne};
    ${tertiaryColorInteract};
  }

  & > div {
    width: 100%;
    height: 100%;
    padding-block: 5vh;
    ${flexMixin('space-around', 'center', 'column')};
  }

  h1 {
    color: rgb(${({ theme }) => theme.colors.white});
    @media screen and (max-width: 768px) {
      position: relative;
    }
  }

  @media ${devices.tablet} {
    height: 80vh;
  }
`;

export const SmallerContainer = styled(LargeSimpleContainer)`
  height: 60vh;
  width: 90%;
  border-radius: 2rem;
  padding-inline: 4vw;
  margin-top: 3vh;

  @media ${devices.tablet} {
    height: 40vh;
  }

  button {
    ${elevationOne};
    background: transparent;
    border: 0.2rem solid rgb(${({ theme }) => theme.colors.black});
    color: rgb(${({ theme }) => theme.colors.black});
    width: 25rem;
  }
  h1 {
    color: rgb(${({ theme }) => theme.colors.black});
    font-size: 3.75rem;
  }

  &.zx7-home {
    ${flexMixin('center', 'flex-start', 'column')};
    gap: 2rem;
    background: url(${zx7Images[0]}) no-repeat center;
    background-size: cover;
    min-height: 20rem;
    min-width: 20rem;
  }

  &.yx1 {
    padding: 0;
    ${flexMixin('center', 'center', 'column')};
    gap: 0vh;

    @media ${devices.tablet} {
      flex-direction: row;
      gap: 0rem;
    }
    div {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
    }
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
    width: 200%;
    height: 200%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0.2rem solid rgba(${({ theme }) => theme.colors.extraGrayish}, 0.35);
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
    padding-inline: 2rem;
    h1 {
      text-align: left;
    }
    h1,
    button {
      margin-left: 5vw;
    }
  }
`;
