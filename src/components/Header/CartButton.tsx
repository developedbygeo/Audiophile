import { useAppSelector } from 'app/hooks';
import { useReducer } from 'react';

import Modal from 'components/UI/Modal';
import NoItems from 'components/ModalDialogues/NoItems';
import CartReview from 'components/ModalDialogues/CartReview';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledCartButton } from './CartButton.styled';

const CartButton = () => {
  const { totalQuantity, isCheckedOut } = useAppSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useReducer((state: boolean) => !state, false);

  const shouldQuantityRender = totalQuantity > 0 && !isCheckedOut && <span>{totalQuantity}</span>;

  const ModalDialogue = !totalQuantity ? (
    <NoItems onDisable={setIsCartOpen} />
  ) : (
    <CartReview onDisable={setIsCartOpen} />
  );

  return (
    <>
      <StyledCartButton onClick={setIsCartOpen} aria-label="Toggle cart">
        <AiOutlineShoppingCart />
        {shouldQuantityRender}
      </StyledCartButton>
      {isCartOpen && <Modal onDisable={setIsCartOpen}>{ModalDialogue}</Modal>}
    </>
  );
};

export default CartButton;
