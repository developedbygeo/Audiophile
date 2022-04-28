import styled from 'styled-components/macro';

import placeholderImage from 'assets/shared/404-cover.jpg';
import { flexMixin } from 'shared/mixins';

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
  ${flexMixin('space-around', 'flex-end', 'column')};
  padding: 1rem;
  padding-top: 5vh;
  position: relative;
  h1 {
    width: 35vw;
    margin: 0;
    font-size: 3rem;
    text-align: left;
    text-transform: initial;
    z-index: 10;
  }

  .placeholder {
    position: absolute;
    top: 0;
    right: 25vw;
    width: 100vw;
    height: 100vh;
    background: url(${placeholderImage}) center no-repeat;
    background-size: cover;
    &::before {
      position: absolute;
      content: '';
      right: -20vh;
      bottom: -20vh;
      width: 30%;
      height: 120vh;
      background: white;
      transform: rotate(25deg);
      pointer-events: none;
    }
  }
`;
