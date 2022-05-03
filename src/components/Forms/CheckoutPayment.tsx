import { ChangeEvent, useState } from 'react';

import { paymentData } from 'utils/checkoutData';
import Radio from 'components/UI/Radio';
import { MediumHeading } from 'components/UI/Text.styled';

import CheckoutFormFields from './CheckoutFormFields';
import { FormSection } from './Checkout.styled';

const CheckoutPayment = () => {
  const [payment, setPayment] = useState('cod');

  const paymentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
  };

  return (
    <FormSection className="payment-section">
      <MediumHeading as="h2">Payment Details</MediumHeading>
      <MediumHeading as="h3">Payment Method</MediumHeading>
      <article className="radio-group">
        {Object.entries(paymentData.paymentMethods).map(([key, value]) => (
          <Radio
            key={key}
            name={value.name}
            fieldName={value.fieldName}
            id={value.id}
            changeHandler={paymentHandler}
            selected={payment}
          />
        ))}
      </article>
      {payment === 'emoney' && (
        <div className="payment-details">
          <CheckoutFormFields data={paymentData.paymentDetails} isPayment />
        </div>
      )}
    </FormSection>
  );
};

export default CheckoutPayment;
