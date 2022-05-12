import styled from 'styled-components';

import { devices } from 'shared/breakpoints';
import { flexMixin, gridMixin } from 'shared/mixins';
import { LargeSimpleContainer } from 'components/UI/Container.styled';
import { grayDescription } from 'components/UI/Text.styled';

export const FeaturesContainer = styled(LargeSimpleContainer)`
  ${flexMixin('center', 'flex-start', 'column')};
  height: auto;
  margin-top: 5vh;
  gap: 5vh;
  article {
    ${gridMixin('1fr', 'auto')};
    gap: 3rem;
    margin-top: 5vh;
  }
  .desc {
    ${grayDescription};
    text-align: left;
  }

  @media ${devices.tablet} {
    .contained {
      ${flexMixin('space-between', 'flex-start', 'row')};
      width: 100%;
      padding-right: 10vw;
    }
  }
  @media ${devices.laptop} {
    padding-inline: 5%;
    flex-direction: row;
    gap: 2.5vw;

    .features {
      flex: 0.6;
    }

    .contained {
      flex: 0.4;
      padding-left: 5vw;
      padding-right: 0;
      flex-direction: column;
    }
  }
`;

export const StyledList = styled.ul`
  ${gridMixin('1fr', 'auto')};
  gap: 1.5rem;
`;

export const Included = styled.li`
  ${flexMixin('flex-start', 'center', 'row')};
  gap: 4rem;
`;

export const Quantity = styled.p`
  color: rgb(${({ theme }) => theme.colors.brand});
  font-weight: ${({ theme }) => theme.typography.weights.body};
  font-size: 2.1rem;
`;

export const Unit = styled(Quantity)`
  color: rgba(${({ theme }) => theme.colors.black}, 0.6);
  font-weight: ${({ theme }) => theme.typography.weights.subheading};
`;
