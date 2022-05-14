import { css } from 'styled-components';

import { devices } from './breakpoints';

export const gridMixin = (columns: string, rows: string, gap?: string) => css`
  display: grid;
  grid-template-columns: ${columns};
  grid-template-rows: ${rows};
  gap: ${gap};
`;

export const flexMixin = (justify: string, align: string, direction: string) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const maxContainer = css`
  height: 100%;
  width: 100%;
`;

export const resetDefaults = css`
  border: none;
  outline: none;
  background: transparent;
`;

export const opacityMixin = css`
  @supports ((-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))) {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px) brightness(0.6) contrast(0.9);
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const responsiveBaseFont = css`
  @media ${devices.mobileSS} {
    font-size: 27%;
  }
  @media (min-width: 260px) and (max-width: 319px) {
    font-size: 39%;
  }
  @media ${devices.mobileS} {
    font-size: 40%;
  }
  @media ${devices.mobileM} {
    font-size: 48.5%;
  }
  @media ${devices.mobileL} {
    font-size: 55%;
  }
  @media ${devices.tablet} {
    font-size: 56.5%;
  }
  @media ${devices.laptopM} {
    font-size: 55.5%;
  }
  @media ${devices.laptopL} {
    font-size: 57%;
  }
  @media ${devices.laptopXL} {
    font-size: 59.5%;
  }
  @media ${devices.desktop} {
    font-size: 92.5%;
  }
  @media ${devices.landscapeMobileSS} {
    font-size: 29%;
  }
  @media ${devices.landscapeMobileS} {
    font-size: 32.5%;
  }
  @media ${devices.landscapeMobileM} {
    font-size: 45%;
  }
  @media ${devices.landscapeMobileL} {
    font-size: 45%;
  }
  @media ${devices.desktop4K} {
    font-size: 135%;
  }
`;
