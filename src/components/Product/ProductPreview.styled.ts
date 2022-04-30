import styled from 'styled-components/macro';

import { devices } from 'shared/breakpoints';
import { flexMixin } from 'shared/mixins';
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
  }

  @media ${devices.tablet} {
    padding-inline: 10%;
  }
`;
