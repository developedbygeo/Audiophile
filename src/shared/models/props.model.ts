export type BaseProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onChange?: (id: number) => void;
  onBlur?: () => void;
};
