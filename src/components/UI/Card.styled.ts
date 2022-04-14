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
`;
