import { css } from 'styled-components';

export const interactCta = css`
  transition: all 100ms ease;

  &:active {
    box-shadow: inset 0px 9px 14px 5px rgba(0, 0, 0, 0.15);
  }
  @media (hover: hover) {
    &:hover {
      background: rgb(${({ theme }) => theme.colors.accent});
    }
  }
`;

export const colorInteract = css`
  transition: all 100ms ease;
  position: relative;
  @media (hover: hover) {
    &:hover {
      color: rgb(${({ theme }) => theme.colors.accent});
    }
  }
`;

export const secondaryColorInteract = css`
  transition: all 100ms ease;
  background: transparent;
  color: rgb(${({ theme }) => theme.colors.black});
  @media (hover: hover) {
    &:hover {
      color: rgb(${({ theme }) => theme.colors.white});
      background: rgb(${({ theme }) => theme.colors.black});
    }
  }
`;

export const tertiaryColorInteract = css`
  transition: all 100ms ease;
  background: rgb(${({ theme }) => theme.colors.black});
  color: rgb(${({ theme }) => theme.colors.white});
  @media (hover: hover) {
    &:hover {
      color: rgb(${({ theme }) => theme.colors.white});
      background: rgb(${({ theme }) => theme.colors.davysGray});
    }
  }
`;

export const interactNav = css`
  transition: all 100ms ease;
  @media (hover: hover) {
    &:hover {
      color: rgb(${({ theme }) => theme.colors.brand});
    }
  }
`;

export const interactAndHover = css`
  ${colorInteract};
  @media (hover: hover) {
    &::after {
      position: absolute;
      content: '';
      left: 0%;
      bottom: -0.4rem;
      width: 100%;
      height: 0.25rem;
      transform-origin: right;
      transform: scaleX(0);
      background: rgb(${({ theme }) => theme.colors.accent});
      transition: transform 350ms ease;
    }
    &:hover {
      &::after {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`;

export const showActive = css`
  color: rgb(${({ theme }) => theme.colors.brand});
  font-weight: 500;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.35rem;
    bottom: -0.4rem;
    left: 0%;
    background: rgb(${({ theme }) => theme.colors.brand});
  }
`;
