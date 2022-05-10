import styled from 'styled-components/macro';

import { bestGear } from 'shared/images';
import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { grayDescription } from 'components/UI/Text.styled';

export const StyledBrand = styled(LargeSimpleContainer)`
  ${flexMixin('flex-start', 'center', 'column')};
  margin-top: 10vh;
  padding-block: 3vh;
  gap: 5vh;
  height: auto;

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    height: 75vh;
    margin-top: 7.5vh;
  }
  @media ${devices.laptop} {
    height: 75vh;
    padding-inline: 5%;
    ${flexMixin('flex-start', 'center', 'row-reverse')};
    gap: 5vw;
    div {
      flex: 1;
    }
  }
  @media ${devices.landscapeMobileS} {
    height: auto;
  }
`;

export const BrandImage = styled.div`
  min-height: 30vh;
  width: 100%;
  max-height: 30vh;
  background: url(${bestGear[0]}) no-repeat center;
  background-size: cover;
  border-radius: 2rem;

  @media ${devices.tablet}, ${devices.landscapeMobileSS} {
    background: url(${bestGear[1]}) no-repeat center;
    background-size: cover;
  }
  @media ${devices.laptop} {
    min-height: 60vh;
    max-height: initial;
    background: url(${bestGear[2]}) no-repeat center;
    background-size: cover;
  }
  @media ${devices.landscapeMobileS} {
    min-height: 50vh;
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
    ${grayDescription};
    font-weight: 400;
  }

  @media ${devices.tablet} {
    padding-inline: 7.075vw;
  }
  @media ${devices.laptop} {
    padding-inline: 0;
    gap: 0;
    h1,
    p {
      text-align: left;
    }
    p {
      padding-right: 5%;
    }
  }
`;
