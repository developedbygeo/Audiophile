import React, { useState, useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import { addProduct } from 'features/cartSlice';

import { ProductActions } from 'components/Product/ProductDetails.styled';
import { BsCheckLg } from 'react-icons/bs';
import { StyledQuantity, AddCartButton } from './QuantityForm.styled';

type FormProps = {
  productDetails: {
    name: string;
    price: number;
    id: number;
  };
};

const QuantityForm = ({ productDetails }: FormProps) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const decrementHandler = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementHandler = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  const addProductHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProduct({ ...productDetails, quantity }));
    setIsSubmitted(true);
    setQuantity(1);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isSubmitted]);

  return (
    <ProductActions as="form" onSubmit={addProductHandler}>
      <StyledQuantity>
        <button onClick={decrementHandler} type="button">
          -
        </button>
        <input type="text" min="1" max="99" step="1" value={quantity} readOnly />
        <button onClick={incrementHandler} type="button">
          +
        </button>
      </StyledQuantity>
      <AddCartButton type="submit" className={isSubmitted ? 'success' : ''} disabled={isSubmitted}>
        <BsCheckLg />
        <span>ADD TO CART</span>
      </AddCartButton>
    </ProductActions>
  );
};

export default QuantityForm;
