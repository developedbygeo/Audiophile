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
      transform: translate(-27.5%, -35.5%);
    }

    &.success {
      height: 60vh;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
    }
  }
  @media ${devices.laptop}, ${devices.landscapeMobileSS} {
    &:not(.success) {
      width: 36.5vw;
      left: 67.5%;
    }
    &.success {
      width: 55vw;
      top: 55%;
      height: auto;
      padding: 5rem 3rem;
    }
  }
  @media ${devices.landscapeMobileSS} {
    &:not(.success) {
      top: 30%;
      left: 70%;
      transform: translate(-30%, -30%);
    }
    &.success {
      height: auto;
      width: 65vw;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      padding: 2%;
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
