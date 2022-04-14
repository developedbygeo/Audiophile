import styled from 'styled-components/macro';

import { bestGear } from 'shared/images';
import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
import { LargeSimpleContainer } from 'components/UI/Container.styled';

export const StyledBrand = styled(LargeSimpleContainer)`
  ${flexMixin('flex-start', 'center', 'column')};
  padding-block: 3vh;
  gap: 5vh;

  @media ${devices.tablet} {
    height: 75vh;
  }
  @media ${devices.laptop} {
    height: 70vh;
    ${flexMixin('flex-start', 'center', 'row-reverse')};
    div {
      flex: 1;
    }
  }
`;

export const BrandImage = styled.div`
  height: 100%;
  width: 100%;
  max-height: 30vh;
  background: url(${bestGear[0]}) no-repeat center;
  background-size: cover;
  border-radius: 2rem;

  @media ${devices.tablet} {
    background: url(${bestGear[1]}) no-repeat center;
    background-size: cover;
  }
  @media ${devices.laptop} {
    max-height: initial;
    background: url(${bestGear[2]}) no-repeat center;
    background-size: cover;
  }
`;

export const BrandText = styled.div`
  ${flexMixin('center', 'center', 'column')};
  gap: 3vh;
  padding-inline: 1rem;

  h1 {
    color: rgb(${({ theme }) => theme.colors.black});
    font-size: 3.75rem;
    letter-spacing: 0.125rem;
  }

  span {
    color: rgb(${({ theme }) => theme.colors.brand});
  }

  p {
    color: rgba(${({ theme }) => theme.colors.black}, 0.5);
    font-weight: 400;
  }

  @media ${devices.tablet} {
    padding-inline: 5vw;
  }
  @media ${devices.laptop} {
    h1,
    p {
      text-align: left;
    }
  }
`;
