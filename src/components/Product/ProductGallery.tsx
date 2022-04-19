/* eslint-disable react/no-array-index-key */
import useWindowWidth from 'hooks/useWindow';

import { derivedViewport, getImagePath, getOrdinal } from 'utils/utilities';
import { GalleryType } from 'shared/models/product.model';
import { StyledGallery, ImageContainer, GalleryImage } from './ProductGallery.styled';

type ProductGalleryProps = {
  gallery: GalleryType;
  productTitle: string;
};

const ProductGallery = ({ gallery, productTitle }: ProductGalleryProps) => {
  const width = useWindowWidth();
  const viewport = derivedViewport(width);

  return (
    <StyledGallery>
      {Object.keys(gallery).map((key, index) => {
        const ordinal = getOrdinal(index);
        const image = getImagePath(gallery[ordinal as keyof GalleryType][viewport]);

        return (
          <ImageContainer key={index}>
            <GalleryImage src={image} alt={`${productTitle} depiction #${index + 1}`} />
          </ImageContainer>
        );
      })}
    </StyledGallery>
  );
};

export default ProductGallery;
