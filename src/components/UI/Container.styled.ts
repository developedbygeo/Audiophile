import styled from 'styled-components/macro';

import placeholderImage from 'assets/shared/404-cover.jpg';
import { flexMixin } from 'shared/mixins';
import { devices } from 'shared/breakpoints';

export const Container = styled.div`
  height: 100%;
  width: 95%;
  margin: auto;
`;

export const LargeSimpleContainer = styled(Container)`
  height: 100vh;
  padding-top: 2vh;
  width: 90%;
  border-radius: 2rem;
`;

export const NotFoundLayout = styled.section`
  ${flexMixin('space-around', 'flex-end', 'row')};
  background: url(${placeholderImage}) top no-repeat;
  background-size: cover;
  padding: 1rem;
  padding-top: 5vh;
  margin-bottom: 10vh;
  position: relative;

  & > article {
    width: 100%;
    height: auto;
    ${flexMixin('space-evenly', 'center', 'column')};
    min-height: 40vh;
    padding: 2vw;
    gap: 1vh;
    color: rgb(${({ theme }) => theme.colors.white});
    background: rgba(${({ theme }) => theme.colors.smokeyBlack}, 0.55);
    border-radius: 2rem;
    h1 {
      margin: 0;
      text-transform: initial;
      font-size: 3.5rem;
    }
    p {
      font-size: 2rem;
      padding-block: 1rem;
      color: rgb(${({ theme }) => theme.colors.white});
    }
    @supports ((-webkit-backdrop-filter: blur(5px)) or (backdrop-filter: blur(5px))) {
      backdrop-filter: blur(7.5px);
      background: rgba(${({ theme }) => theme.colors.smokeyBlack}, 0.1);
    }
  }

  @media ${devices.tablet} {
    align-items: center;
    & > article {
      background: rgba(${({ theme }) => theme.colors.smokeyBlack}, 0.75);
    }
  }

  @media ${devices.laptop} {
    flex-direction: column;
    align-items: flex-end;
    background: url(${placeholderImage}) center no-repeat;
    background-size: cover;

    & > article {
      ${flexMixin('space-evenly', 'center', 'column')};
      background: rgba(${({ theme }) => theme.colors.smokeyBlack}, 0.45);
      width: 35%;
      margin-right: 2vw;
    }
  }
  @media ${devices.landscapeMobileSS} {
    justify-content: flex-end;
    background: url(${placeholderImage}) center no-repeat;
    background-size: cover;

    & > article {
      ${flexMixin('space-evenly', 'center', 'column')};
      background: rgba(${({ theme }) => theme.colors.smokeyBlack}, 0.45);
      width: 35%;
      margin-right: 2vw;
    }
  }
`;
