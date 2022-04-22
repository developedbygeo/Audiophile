/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO finish this component
import { useAppSelector } from 'app/hooks';

import CartItem from 'components/Cart/CartItem';
import { StyledSummary } from './CheckoutSummary.styled';

const CheckoutSummary = () => {
  const { products, totalQuantity, totalCost } = useAppSelector((state) => state.cart);

  return (
    <StyledSummary as="ul">
      {products.map(({ name, price, id, quantity }) => (
        <CartItem isCartView={false} name={name} price={price} id={id} quantity={quantity} key={id} />
      ))}
    </StyledSummary>
  );
};

export default CheckoutSummary;
