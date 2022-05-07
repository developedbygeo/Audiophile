import styled, { css } from 'styled-components';

import { ModalDivProps } from 'shared/models/props.model';
import { devices } from 'shared/breakpoints';
import { maxContainer } from 'shared/mixins';

const backdropStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  ${maxContainer};
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.65);
`;

const modalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 85%;
  z-index: 30;
  background-color: rgb(${({ theme }) => theme.colors.white});
  transform: translate(-50%, -50%);
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  min-height: 25vh;

  @media ${devices.tablet} {
    &:not(.success) {
      width: 65%;
      top: 25%;
      right: 25%;
      transform: translate(-27.5%, -22.5%);
    }

    &.success {
      height: 60vh;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
    }
  }
  @media ${devices.laptop} {
    &:not(.success) {
      width: 32.5vw;
      left: 67.5%;
    }
    &.success {
      width: 40%;
      top: 55%;
      height: auto;
      padding: 5rem 3rem;
    }
  }
`;

const getDivStyle = ({ backdrop }: ModalDivProps) => {
  if (backdrop) {
    return backdropStyle;
  }
  return modalStyle;
};

const DynamicDiv = styled.div`
  ${getDivStyle}
`;

export default DynamicDiv;
