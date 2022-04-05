import styled from 'styled-components/macro';

export const Card = styled.div`
  position: relative;
  height: 15rem;
  width: 20rem;
  border-radius: 1.5rem;
  background: rgb(${({ theme }) => theme.colors.silver});

  h1,
  a {
    color: rgb(${({ theme }) => theme.colors.black});
  }

  & > .floating-img-wrapper {
    position: absolute;
    top: -50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, 0);
    img {
      width: 20rem;
      height: 15rem;
      object-fit: contain;
    }
  }
`;
