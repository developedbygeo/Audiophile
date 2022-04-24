import { CtaButton } from 'components/UI/Button.styled';
import { BigHeading } from 'components/UI/Text.styled';
import { CartPrice } from './CartActions.styled';

type ActionProps = {
  cost: number;
  onCheckout?: () => void;
  children?: React.ReactNode;
  isPay?: boolean;
};

const CartActions = ({ children, cost, onCheckout, isPay }: ActionProps) => {
  return (
    <>
      <CartPrice>
        <BigHeading as="h2">TOTAL</BigHeading>
        <BigHeading as="h3" weight="bold">
          $ {cost.toLocaleString()}
        </BigHeading>
      </CartPrice>
      {children}
      <CtaButton onClick={onCheckout} role="link">
        {isPay ? 'CONTINUE & PAY' : 'CHECKOUT'}
      </CtaButton>
    </>
  );
};

export default CartActions;
