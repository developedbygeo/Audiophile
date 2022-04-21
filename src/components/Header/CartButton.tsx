import { useAppSelector } from 'app/hooks';
import { useState } from 'react';

import Modal from 'components/UI/Modal';
import NoItems from 'components/ModalDialogues/NoItems';
import CartReview from 'components/ModalDialogues/CartReview';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledCartButton } from './CartButton.styled';

const CartButton = () => {
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const ModalDialogue = !totalQuantity ? (
    <NoItems onDisable={cartHandler} />
  ) : (
    <CartReview onDisable={cartHandler} />
  );

  return (
    <>
      <StyledCartButton onClick={cartHandler}>
        <AiOutlineShoppingCart />
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
      </StyledCartButton>
      {isCartOpen && <Modal onDisable={cartHandler}>{ModalDialogue}</Modal>}
    </>
  );
};

export default CartButton;
