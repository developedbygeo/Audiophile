/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from 'react';

import { paymentData } from 'utils/checkoutData';
import Radio from 'components/UI/Radio';

import { PaymentFieldType } from 'shared/models/payment.model';

import { FormSection, InputContainer, LabelContainer } from './Checkout.styled';

const CheckoutPayment = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [payment, setPayment] = useState('cod');

  const paymentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  return (
    <FormSection className="payment-section">
      {Object.entries(paymentData.paymentMethods).map(([key, value]) => (
        <Radio
          name={value.name}
          fieldName={value.fieldName}
          id={value.id}
          changeHandler={paymentHandler}
          selected={payment}
        />
      ))}
      {/* {payment === 'emoney' && <InputContainer></InputContainer>} */}
    </FormSection>
  );
};

export default CheckoutPayment;
