import { useAppSelector } from 'app/hooks';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledCartButton } from './CartButton.styled';

const CartButton = () => {
  const { totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <StyledCartButton>
      <AiOutlineShoppingCart />
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </StyledCartButton>
  );
};

export default CartButton;
