/* eslint-disable @typescript-eslint/no-unused-vars */
// import { ModalBackdropProps as DialogueProps } from 'shared/models/props.model';

// TODO finish component;

import { useAppSelector } from 'app/hooks';

import { BsCheckLg } from 'react-icons/bs';
import { BigHeading, Description } from 'components/UI/Text.styled';

import { StyledReview as StyledContainer } from './CartReview.styled';
import { Checkmark, SuccessText } from './Success.styled';

const Success = () => {
  const { totalCost, shipping } = useAppSelector((state) => state.cart);

  return (
    <StyledContainer as="section">
      <Checkmark>
        <BsCheckLg />
      </Checkmark>
      <SuccessText>
        <BigHeading as="h1">Thank you for your order</BigHeading>
        <Description>You will receive an email confirmation shortly.</Description>
      </SuccessText>
      <button type="button">Hi</button>
    </StyledContainer>
  );
};

export default Success;
