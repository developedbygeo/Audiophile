import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setShipping } from 'features/cartSlice';
import { getVatValue, getShippingCost } from 'utils/utilities';

import CartActions from 'components/Cart/CartActions';
import { CartPrice } from 'components/Cart/CartActions.styled';
import CartItem from 'components/Cart/CartItem';
import { BigHeading } from 'components/UI/Text.styled';
import { SummaryList, PriceBreakdown, GrandTotal } from './CheckoutSummary.styled';

const CheckoutSummary = () => {
  const { products, totalCost } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const vatValue = getVatValue(totalCost);
  const shippingValue = getShippingCost(totalCost);

  const grandTotal = totalCost + +vatValue;

  useEffect(() => {
    dispatch(setShipping(+shippingValue.replace(',', '')));
  }, [dispatch, shippingValue]);

  return (
    <SummaryList as="ul">
      <BigHeading as="h1">Summary</BigHeading>
      {products.map(({ name, price, id, quantity }) => (
        <CartItem
          className="summary-item"
          isCartView={false}
          name={name}
          price={price}
          id={id}
          quantity={quantity}
          key={id}
        />
      ))}
      <PriceBreakdown>
        <CartActions cost={totalCost} isPay>
          <CartPrice>
            <BigHeading as="h2">Shipping</BigHeading>
            <BigHeading as="h3" weight="bold">
              $ {shippingValue}
            </BigHeading>
          </CartPrice>
          <CartPrice>
            <BigHeading as="h2">Vat (Included)</BigHeading>
            <BigHeading as="h3" weight="bold">
              $ {vatValue.toLocaleString()}
            </BigHeading>
          </CartPrice>
          <GrandTotal>
            <BigHeading as="h2">Grand Total</BigHeading>
            <BigHeading as="h3" weight="bold">
              $ {grandTotal.toLocaleString()}
            </BigHeading>
          </GrandTotal>
        </CartActions>
      </PriceBreakdown>
    </SummaryList>
  );
};

export default CheckoutSummary;
