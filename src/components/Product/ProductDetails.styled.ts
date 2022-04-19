import styled from 'styled-components/macro';

import { gridMixin } from 'shared/mixins';
import { grayDescription } from 'components/UI/Text.styled';
import { UnstyledButton } from 'components/UI/Button.styled';
import { StyledPreview, StyledImageCont, StyledText } from './ProductPreview.styled';

export const DetailsContainer = styled(StyledPreview)`
  .desc {
    ${grayDescription};
  }
`;

export const ProductImageCont = styled(StyledImageCont)`
  img {
    max-height: 45vh;
  }
`;

export const ProductText = styled(StyledText)`
  gap: 3rem;
  h1,
  h2,
  p {
    text-align: left;
    align-self: flex-start;
  }
  h1 {
    letter-spacing: 0.7rem;
  }
`;

export const PriceTag = styled.p`
  font-weight: 700;
  letter-spacing: 0.25rem;
  color: rgba(${({ theme }) => theme.colors.black}, 1);
  font-size: 2.45rem;
`;

export const ProductActions = styled.div`
  ${gridMixin('repeat(2, 1fr)', '1fr')};
  margin-top: 2vh;
  width: 100%;

  & > div,
  button {
    height: 7vh;
    width: 100%;
  }
`;

export const GoBackButton = styled(UnstyledButton)`
  width: 15rem;
  align-self: flex-start;
  text-align: left;
  padding-inline: 0;
  letter-spacing: 0.175rem;
  transition: all 100ms ease;
  color: rgba(${({ theme }) => theme.colors.black}, 0.6);
  font-weight: 400;

  @media (hover: hover) {
    &:hover {
      color: rgba(${({ theme }) => theme.colors.black}, 1);
      text-decoration: underline;
    }
  }
  &:active {
    transform: scale(0.98);
  }
`;
