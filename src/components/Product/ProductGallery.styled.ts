import styled from 'styled-components';

import { devices } from 'shared/breakpoints';
import { flexMixin, gridMixin } from 'shared/mixins';

export const StyledGallery = styled.section`
  height: auto;
  padding-inline: 5%;
  margin-block: 10vh;
  ${flexMixin('flex-start', 'center', 'column')};
  gap: 1vh;

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    ${gridMixin('0.5fr 1fr', 'auto')};
    min-height: initial;
    height: auto;

    .cont-3 {
      grid-area: 1/2/3/2;
      max-height: 100%;
    }
  }

  @media ${devices.laptop} {
    gap: 0.75vw;
    padding-inline: 10%;
  }
`;

export const ImageContainer = styled.div`
  height: auto;
  max-height: 80vh;
  width: 100%;
  margin: auto;

  @media ${devices.tablet} {
    height: 100%;
    object-fit: contain;
    &.cont-3 img {
      object-fit: cover;
      max-height: 85vh;
    }
  }
  @media ${devices.laptop} {
    &.cont-3 img {
      max-height: 70vh;
    }
  }
  @media ${devices.landscapeMobileSS} {
    &.cont-3 {
      height: 100%;
      img {
        object-fit: cover;
        max-height: 90vh;
        height: 100%;
      }
    }
    &:not(.cont-3) {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;

  @media ${devices.tablet} {
    height: 100%;
  }
`;
