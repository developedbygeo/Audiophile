import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { getCartImage } from 'utils/utilities';
import { CartItem as ICartItem, addProduct, removeProduct, resetCart } from 'features/cartSlice';

import { ModalBackdropProps as DialogueProps } from 'shared/models/props.model';

import { BigHeading } from 'components/UI/Text.styled';
import { GoBackButton as TextButton } from 'components/Product/ProductDetails.styled';
import { UnstyledButton, CtaButton } from 'components/UI/Button.styled';
import {
  StyledReview,
  ReviewHeader,
  CartList,
  CartItem,
  CartItemText,
  CartImageCont,
  CartItemQuantity,
  CartPrice
} from './CartReview.styled';

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
    onDisable();
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
                <p>$ {price.toLocaleString()}</p>
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
      <CartPrice>
        <BigHeading as="h2">TOTAL</BigHeading>
        <BigHeading as="h3" weight="bold">
          $ {totalCost.toLocaleString()}
        </BigHeading>
      </CartPrice>
      <CtaButton onClick={checkoutHandler} role="link">
        CHECKOUT
      </CtaButton>
    </StyledReview>
  );
};

export default CartReview;
