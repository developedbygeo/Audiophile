import styled from 'styled-components';

import { devices } from 'shared/breakpoints';
import { flexMixin, gridMixin } from 'shared/mixins';
import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { grayDescription } from 'components/UI/Text.styled';

export const StyledPreview = styled(LargeSimpleContainer)`
  background: transparent;
  ${flexMixin('space-between', 'center', 'column')};
  height: auto;
  width: 100%;
  padding-inline: 5%;
  gap: 2vh;

  a {
    margin-top: 3vh;
  }

  @media ${devices.laptop}, ${devices.landscapeMobileM} {
    ${gridMixin('repeat(2, 1fr)', '1fr 0.1fr')};
    height: 60vh;
    column-gap: 5vw;
    row-gap: 3vh;
    padding-top: 0;

    & > a {
      grid-area: 2/2/2/3;
      align-self: flex-end;
      justify-self: flex-start;
      margin: 0 0 3vh 0;
    }
  }
  @media ${devices.landscapeMobileM} {
    height: auto;
  }
`;

export const StyledImageCont = styled.div`
  width: 100%;
  flex: 0.75;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
  @media ${devices.laptop}, ${devices.landscapeMobileM} {
    grid-area: 1/1/3/1;
    height: 100%;
  }
`;

export const StyledText = styled.div`
  flex: 1;
  text-align: center;
  ${flexMixin('space-evenly', 'center', 'column')};
  gap: 2vh;

  h1 {
    font-size: 2.25rem;
    letter-spacing: 0.75rem;
    color: rgb(${({ theme }) => theme.colors.brand});
  }

  h2 {
    font-size: 3.25rem;
  }

  .desc {
    ${grayDescription};
    font-size: 1.9rem;
  }

  @media ${devices.tablet} {
    padding-inline: 1%;
  }
  @media ${devices.laptop}, ${devices.landscapeMobileM} {
    padding: 0;
    grid-area: 1/2/1/3;
    align-self: center;
    justify-content: flex-start;

    h1,
    h2,
    p {
      width: 100%;
      text-align: left;
    }
  }
`;
