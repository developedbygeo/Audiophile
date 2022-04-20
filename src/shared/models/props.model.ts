export type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onChange?: (id: number) => void;
  onBlur?: () => void;
};

export type LinkProps = BaseProps & {
  look?: string;
};

export type ModalOverlayProps = {
  children: React.ReactNode;
};

export type ModalBackdropProps = {
  onDisable: () => void;
};

export type ModalDivProps = {
  backdrop?: boolean;
};

export type ModalProps = ModalOverlayProps & ModalBackdropProps;
