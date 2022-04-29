import { useAppSelector, useAppDispatch } from 'app/hooks';
import { resetCart } from 'features/cartSlice';
import useWindowWidth from 'hooks/useWindow';
import { getSpecificItem, derivedViewport, getImagePath } from 'utils/utilities';

import { ModalBackdropProps as DialogueProps } from 'shared/models/props.model';

import { BsCheckLg } from 'react-icons/bs';
import { BigHeading, Description } from 'components/UI/Text.styled';
import { CtaButton } from 'components/UI/Button.styled';

import {
  SuccessContainer,
  Checkmark,
  SuccessText,
  SuccessItem,
  SuccessItemImageCont,
  SuccessItemText,
  SuccessSummary,
  SuccessQuantity,
  AdditionalItemsText,
  GrandTotal
} from './Success.styled';

const Success = ({ onDisable }: DialogueProps) => {
  const { products, totalCost, shipping } = useAppSelector((state) => state.cart);
  const aggregateCost = totalCost + shipping;
  const allProducts = useAppSelector((state) => state.products);
  const topProductInCart = products[0];
  const extraProductsInCart = products.length - 1;
  const productData = getSpecificItem(allProducts, topProductInCart.id);
  const dispatch = useAppDispatch();
  const width = useWindowWidth();
  const viewport = derivedViewport(width);
  const productImage = getImagePath(productData.categoryImage[viewport]);

  const resetCartHandler = () => {
    dispatch(resetCart());
    if (onDisable) onDisable();
  };

  return (
    <SuccessContainer as="section">
      <Checkmark>
        <BsCheckLg />
      </Checkmark>
      <SuccessText>
        <BigHeading as="h1">Thank you for your order</BigHeading>
        <Description>You will receive an email confirmation shortly.</Description>
      </SuccessText>
      <SuccessSummary>
        <SuccessItem>
          <SuccessItemImageCont>
            <img src={productImage} alt={topProductInCart.name} />
          </SuccessItemImageCont>
          <SuccessItemText>
            <BigHeading as="h4">{topProductInCart.name}</BigHeading>
            <Description>$ {topProductInCart.price.toLocaleString()}</Description>
          </SuccessItemText>
          <SuccessQuantity>
            <Description>x{topProductInCart.quantity}</Description>
          </SuccessQuantity>
        </SuccessItem>
        {products.length > 1 && (
          <AdditionalItemsText>{`and ${extraProductsInCart} other item(s)`}</AdditionalItemsText>
        )}
        <GrandTotal>
          <BigHeading as="h3">Grand Total</BigHeading>
          <BigHeading as="h4">$ {aggregateCost.toLocaleString()}</BigHeading>
        </GrandTotal>
      </SuccessSummary>
      <CtaButton onClick={resetCartHandler} type="button" role="link">
        Back to Home
      </CtaButton>
    </SuccessContainer>
  );
};

export default Success;
