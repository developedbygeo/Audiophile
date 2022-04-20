import React from 'react';
import reactDom from 'react-dom';
import { ModalOverlayProps, ModalBackdropProps, ModalProps } from 'shared/models/props.model';
import DynamicDiv from './Modal.styled';

const modalContainer = document.querySelector('#overlay') as HTMLElement;

const Backdrop = ({ onDisable }: ModalBackdropProps) => {
  return <DynamicDiv onClick={onDisable} backdrop />;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return <DynamicDiv>{children}</DynamicDiv>;
};

const Modal = ({ onDisable, children }: ModalProps) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onDisable={onDisable} />, modalContainer)}
      {reactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, modalContainer)}
    </>
  );
};

export default React.memo(Modal);
