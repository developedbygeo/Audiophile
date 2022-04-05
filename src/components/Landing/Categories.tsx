import { Link } from 'react-router-dom';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { Card } from '../UI/Card.styled';
import { thumbnails } from '../../shared/images';

import { MediumHeading } from '../UI/Text.styled';

import StyledCategories from './Categories.styled';

const Categories = () => {
  return (
    <StyledCategories>
      {thumbnails.map(({ path, alt, id }) => (
        <Card as="article" key={id} className="category">
          <div className="floating-img-wrapper">
            <img src={path} alt="sample category thumbnail" />
          </div>
          <div className="text-wrapper">
            <MediumHeading as="h1">{alt}</MediumHeading>
          </div>
          <div>
            <Link to={`/${alt.toLowerCase()}`} title={`Shop the latest ${alt.toLowerCase()}`}>
              <span>SHOP</span>
              <IoChevronForwardSharp />
            </Link>
          </div>
        </Card>
      ))}
    </StyledCategories>
  );
};

export default Categories;
