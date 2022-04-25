import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { CartItem as ICartItem, addProduct, removeProduct, resetCart } from 'features/cartSlice';

import { ModalBackdropProps as DialogueProps } from 'shared/models/props.model';

import { BigHeading } from 'components/UI/Text.styled';
import { GoBackButton as TextButton } from 'components/Product/ProductDetails.styled';
import CartItem from 'components/Cart/CartItem';
import CartActions from 'components/Cart/CartActions';
import { StyledReview, ReviewHeader, CartList } from './CartReview.styled';

const CartReview = ({ onDisable }: DialogueProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products, totalQuantity, totalCost } = useAppSelector((state) => state.cart);

  const incrementHandler = (dispatchInfo: ICartItem) => {
    dispatch(addProduct(dispatchInfo));
  };

  const decrementHandler = (id: number) => {
    dispatch(removeProduct(id));
  };

  const removeAllHandler = () => {
    dispatch(resetCart());
  };

  const checkoutHandler = () => {
    navigate('/checkout');
    if (onDisable) onDisable();
  };

  return (
    <StyledReview>
      <ReviewHeader>
        <BigHeading>Cart ({totalQuantity})</BigHeading>
        <TextButton onClick={removeAllHandler}>Remove all</TextButton>
      </ReviewHeader>
      <CartList>
        {products.map(({ name, price, id, quantity }) => {
          return (
            <CartItem
              isCartView
              name={name}
              price={price}
              id={id}
              quantity={quantity}
              key={id}
              onDecrement={decrementHandler}
              onIncrement={incrementHandler}
            />
          );
        })}
      </CartList>
      <CartActions cost={totalCost} onCheckout={checkoutHandler} />
    </StyledReview>
  );
};

export default CartReview;
