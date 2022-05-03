import React from 'react';
import reactDom from 'react-dom';
import { ModalOverlayProps, ModalBackdropProps, ModalProps } from 'shared/models/props.model';
import DynamicDiv from './Modal.styled';

const modalContainer = document.querySelector('#overlay') as HTMLElement;

const Backdrop = ({ onDisable }: ModalBackdropProps) => {
  return <DynamicDiv onClick={onDisable} backdrop />;
};

const ModalOverlay = ({ children, className }: ModalOverlayProps) => {
  return <DynamicDiv className={className}>{children}</DynamicDiv>;
};

const Modal = ({ onDisable, className, children }: ModalProps) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onDisable={onDisable} />, modalContainer)}
      {reactDom.createPortal(<ModalOverlay className={className}>{children}</ModalOverlay>, modalContainer)}
    </>
  );
};

export default React.memo(Modal);
