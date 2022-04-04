import styled from 'styled-components/macro';

export const Description = styled.p`
  color: rgba(${({ theme }) => theme.colors.white}, 0.75);
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.typography.weights.body};
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.2rem;
  font-weight: 300;
`;

export const BigHeading = styled.h1`
  color: rgba(${({ theme }) => theme.colors.white}, 0.75);
  font-size: 4.5rem;
  padding-block: 1rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0rem 0rem 1rem 0rem;
`;

export const MediumHeading = styled.h2`
  color: rgba(${({ theme }) => theme.colors.white}, 0.75);
  font-size: 3rem;
  text-transform: uppercase;
  margin-block: 1rem;
`;

export const SmallSubheading = styled.h4`
  color: rgba(${({ theme }) => theme.colors.white}, 0.75);
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.weights.subheading};
  color: rgb(${({ theme }) => theme.colors.accent});
  letter-spacing: 0.15rem;
`;
