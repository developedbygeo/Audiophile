import { useAppSelector } from 'app/hooks';
import { getCartImage } from 'utils/utilities';
import { StyledReview, CartList, CartItem, CartItemText, CartImageCont } from './CartReview.styled';

const CartReview = () => {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <StyledReview>
      <CartList>
        {products.map(({ name, price, id, quantity }) => {
          const productImage = getCartImage(name);

          return (
            <CartItem key={id}>
              <CartImageCont>
                <img src={productImage} alt={name} />
              </CartImageCont>
              <CartItemText>
                <p>{name}</p>
                <p>$ {price}</p>
              </CartItemText>
              <div>{quantity}</div>
            </CartItem>
          );
        })}
      </CartList>
    </StyledReview>
  );
};

export default CartReview;
