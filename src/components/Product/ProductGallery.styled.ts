import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { flexMixin, gridMixin } from 'shared/mixins';

export const StyledGallery = styled.section`
  height: auto;
  padding-inline: 5%;
  margin-block: 10vh;
  ${flexMixin('flex-start', 'center', 'column')};
  gap: 1vh;

  @media ${devices.tablet} {
    ${gridMixin('0.5fr 1fr', 'auto')};
    min-height: initial;
    height: auto;

    .cont-3 {
      grid-area: 1/2/3/2;
    }
  }
  /* specific for the third child to be bigger */
  & > div:nth-child(3) {
    img {
      height: 50vh;
      @media ${devices.tablet} {
        height: 100%;
        object-fit: contain;
      }
    }
  }
  @media ${devices.laptop} {
    gap: 0.75vw;
    padding-inline: 10%;
  }
`;

export const ImageContainer = styled.div`
  height: auto;
  width: 100%;
  margin: auto;

  @media ${devices.tablet} {
    height: 100%;
    object-fit: contain;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 1rem;

  @media ${devices.tablet} {
    height: 100%;
  }
`;
