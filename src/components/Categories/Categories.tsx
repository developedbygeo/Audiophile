import { Link } from 'react-router-dom';
import { IoChevronForwardSharp } from 'react-icons/io5';

import { thumbnails } from 'shared/images';
import { MediumHeading } from 'components/UI/Text.styled';
import { BaseProps } from 'shared/models/props.model';

import { StyledCategories, CategoryCard, ImageWrapper } from './Categories.styled';

const Categories = ({ className }: BaseProps) => {
  return (
    <StyledCategories className={className || ''}>
      {thumbnails.map(({ path, alt, id }) => (
        <CategoryCard key={id}>
          <ImageWrapper>
            <img src={path} alt="sample category thumbnail" />
          </ImageWrapper>
          <div className="text-wrapper">
            <MediumHeading as="h1">{alt}</MediumHeading>
          </div>
          <div>
            <Link to={`/${alt.toLowerCase()}`} title={`Shop the latest ${alt.toLowerCase()}`}>
              <span>SHOP</span>
              <IoChevronForwardSharp />
            </Link>
          </div>
        </CategoryCard>
      ))}
    </StyledCategories>
  );
};

export default Categories;
