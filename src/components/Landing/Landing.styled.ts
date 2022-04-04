import styled from 'styled-components/macro';

import { devices } from '../../shared/breakpoints';
import { landing } from '../../shared/images';

const StyledLanding = styled.section`
  background: url(${landing[0]}) no-repeat center;
  background-size: cover;

  @media ${devices.tablet} {
    background: url(${landing[1]}) no-repeat center;
  }
  @media ${devices.laptop} {
    background: url(${landing[2]}) no-repeat center;
  }
`;

export default StyledLanding;
