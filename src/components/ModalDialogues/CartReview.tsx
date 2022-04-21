import { useAppSelector, useAppDispatch } from 'app/hooks';
import { getCartImage } from 'utils/utilities';
import { CartItem as ICartItem, addProduct, removeProduct, resetCart } from 'features/cartSlice';

import { BigHeading } from 'components/UI/Text.styled';
import { GoBackButton as TextButton } from 'components/Product/ProductDetails.styled';
import { UnstyledButton } from 'components/UI/Button.styled';
import {
  StyledReview,
  ReviewHeader,
  CartList,
  CartItem,
  CartItemText,
  CartImageCont,
  CartItemQuantity
} from './CartReview.styled';

const CartReview = () => {
  const dispatch = useAppDispatch();
  const { products, totalQuantity } = useAppSelector((state) => state.cart);

  const incrementHandler = (dispatchInfo: ICartItem) => {
    dispatch(addProduct(dispatchInfo));
  };

  const decrementHandler = (id: number) => {
    dispatch(removeProduct(id));
  };

  const removeAllHandler = () => {
    dispatch(resetCart());
  };

  return (
    <StyledReview>
      <ReviewHeader>
        <BigHeading>Cart ({totalQuantity})</BigHeading>
        <TextButton onClick={removeAllHandler}>Remove all</TextButton>
      </ReviewHeader>
      <CartList>
        {products.map(({ name, price, id, quantity }) => {
          const individualProductPrice = +price / +quantity;
          const productImage = getCartImage(name);
          const detailsToDispatch = { name, price: individualProductPrice, id, quantity: 1 };

          return (
            <CartItem key={id}>
              <CartImageCont>
                <img src={productImage} alt={name} />
              </CartImageCont>
              <CartItemText>
                <h4>{name}</h4>
                <p>$ {price}</p>
              </CartItemText>
              <CartItemQuantity>
                <UnstyledButton onClick={() => decrementHandler(id)} type="button">
                  -
                </UnstyledButton>
                <span>{quantity}</span>
                <UnstyledButton onClick={() => incrementHandler(detailsToDispatch)} type="button">
                  +
                </UnstyledButton>
              </CartItemQuantity>
            </CartItem>
          );
        })}
      </CartList>
    </StyledReview>
  );
};

export default CartReview;
