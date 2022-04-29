import styled, { css } from 'styled-components/macro';

type FontProps = {
  weight?: string;
};

const bold = css`
  font-weight: ${({ theme }) => theme.typography.weights.heading};
`;

const subheading = css`
  font-weight: ${({ theme }) => theme.typography.weights.subheading};
`;

const normal = css`
  font-weight: ${({ theme }) => theme.typography.weights.body};
`;

const getWeight = (props: FontProps) => {
  if (props.weight === 'bold') return bold;
  if (props.weight === 'subheading') return subheading;
  if (props.weight === 'normal') return normal;
  return '';
};

export const grayDescription = css`
  color: rgba(${({ theme }) => theme.colors.black}, 0.7);
  line-height: 1.75;
  letter-spacing: 0.25rem;
`;

export const whiteishDescription = css`
  color: rgba(${({ theme }) => theme.colors.white}, 0.75);
  line-height: 1.75;
  letter-spacing: 0.25rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.typography.weights.body};
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.2rem;
  font-weight: 300;
  ${getWeight};
`;

export const BigHeading = styled.h1`
  font-size: 4.5rem;
  padding-block: 1rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0rem 0rem 1rem 0rem;
  ${getWeight};
`;

export const MediumHeading = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  margin-block: 1rem;
  ${getWeight};
`;

export const SmallSubheading = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.weights.subheading};
  color: rgb(${({ theme }) => theme.colors.accent});
  letter-spacing: 0.15rem;
  ${getWeight};
`;
