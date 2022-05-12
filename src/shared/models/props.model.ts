import React from 'react';

export type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onChange?: (id: number) => void;
  onBlur?: () => void;
};

export type ImageCont = {
  alt: string;
};

export type LinkProps = BaseProps & {
  $isSecondary?: boolean;
};

export type ModalOverlayProps = {
  children: React.ReactNode;
  className?: string;
};

export type ModalBackdropProps = {
  onDisable?: () => void | React.DispatchWithoutAction;
};

export type ModalDivProps = {
  backdrop?: boolean;
  className?: string;
};

export type ModalProps = ModalOverlayProps & ModalBackdropProps;
