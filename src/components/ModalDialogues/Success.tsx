/* eslint-disable @typescript-eslint/no-unused-vars */

// TODO finish component;

import { useAppSelector, useAppDispatch } from 'app/hooks';
import { resetCart } from 'features/cartSlice';
import useWindowWidth from 'hooks/useWindow';
import { getSpecificItem, derivedViewport, getImagePath } from 'utils/utilities';

import { ModalBackdropProps as DialogueProps } from 'shared/models/props.model';

import { BsCheckLg } from 'react-icons/bs';
import { BigHeading, Description } from 'components/UI/Text.styled';
import { StyledImageCont } from 'components/Product/ProductPreview.styled';
import { CtaButton } from 'components/UI/Button.styled';

import { StyledReview as StyledContainer } from './CartReview.styled';
import {
  Checkmark,
  SuccessText,
  SuccessItem,
  SuccessItemText,
  SuccessQuantity,
  SuccessSummary
} from './Success.styled';

const Success = ({ onDisable }: DialogueProps) => {
  const { products, totalCost, shipping } = useAppSelector((state) => state.cart);
  const allProducts = useAppSelector((state) => state.products);
  const topProductInCart = products[0];
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
    <StyledContainer as="section">
      <Checkmark>
        <BsCheckLg />
      </Checkmark>
      <SuccessText>
        <BigHeading as="h1">Thank you for your order</BigHeading>
        <Description>You will receive an email confirmation shortly.</Description>
      </SuccessText>
      <SuccessSummary>
        <SuccessItem>
          <StyledImageCont>
            <img src={productImage} alt={topProductInCart.name} />
          </StyledImageCont>
          <SuccessItemText>
            <BigHeading as="h4">{topProductInCart.name}</BigHeading>
            <Description>$ {topProductInCart.price.toLocaleString()}</Description>
          </SuccessItemText>
          <SuccessQuantity>
            <Description>x{topProductInCart.quantity}</Description>
          </SuccessQuantity>
        </SuccessItem>
      </SuccessSummary>
      <CtaButton onClick={resetCartHandler} type="button">
        Back to Home
      </CtaButton>
    </StyledContainer>
  );
};

export default Success;
