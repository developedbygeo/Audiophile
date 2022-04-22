import { getCartImage } from 'utils/utilities';
import { UnstyledButton } from 'components/UI/Button.styled';
import { CartItem as ICartItem } from 'features/cartSlice';
import { CartItemContainer, CartImageCont, CartItemText, CartItemQuantity } from './CartItem.styled';

type ItemProps = {
  isCartView: boolean;
  onDecrement?: (id: number) => void;
  onIncrement?: (details: ICartItem) => void;
} & ICartItem;

const CartItem = ({ name, price, id, quantity, onDecrement, onIncrement, isCartView }: ItemProps) => {
  const productImage = getCartImage(name);
  const individualProductPrice = +price / +quantity;
  const detailsToDispatch = { name, price: individualProductPrice, id, quantity: 1 };

  const cartViewActions = onDecrement && onIncrement && (
    <>
      <UnstyledButton onClick={() => onDecrement(id)} type="button">
        -
      </UnstyledButton>
      <span>{quantity}</span>
      <UnstyledButton onClick={() => onIncrement(detailsToDispatch)} type="button">
        +
      </UnstyledButton>
    </>
  );

  const checkoutActions = <span>{quantity}</span>;

  return (
    <CartItemContainer key={id}>
      <CartImageCont>
        <img src={productImage} alt={name} />
      </CartImageCont>
      <CartItemText>
        <h4>{name}</h4>
        <p>$ {price.toLocaleString()}</p>
      </CartItemText>
      <CartItemQuantity>{isCartView ? cartViewActions : checkoutActions}</CartItemQuantity>
    </CartItemContainer>
  );
};

export default CartItem;
