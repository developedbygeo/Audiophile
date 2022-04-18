import styled from 'styled-components/macro';

import { flexMixin } from 'shared/mixins';

export const StyledGallery = styled.section`
  height: auto;
  padding-inline: 5%;
  ${flexMixin('flex-start', 'center', 'column')};
  gap: 1vh;

  & > div:nth-child(3) {
    img {
      height: 50vh;
    }
  }
`;

export const ImageContainer = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 1rem;
`;
