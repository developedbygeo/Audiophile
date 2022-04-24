/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from 'components/UI/Modal';
import Success from 'components/ModalDialogues/Success';

import checkoutData from 'utils/checkoutData';
import { BigHeading, MediumHeading } from 'components/UI/Text.styled';
import { StyledCheckout, FormSection, InputContainer, InputField } from './Checkout.styled';

type FormProps = {
  children: React.ReactNode;
};

type FieldNameType = 'address' | 'zip' | 'country' | 'name' | 'email' | 'phone';

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  country: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

const CheckoutForm = ({ children }: FormProps) => {
  const [isPaid, setIsPaid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>();

  const paidHandler = () => setIsPaid((prevState) => !prevState);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledCheckout as="section">
          <BigHeading>Checkout</BigHeading>

          {/* TODO separate components */}
          <FormSection className="billing-section">
            <MediumHeading as="h2">Billing Details</MediumHeading>
            {checkoutData.billing.map(({ field, fieldName, id, type, placeholder, validation }) => (
              <InputContainer key={id} className={errors[fieldName as FieldNameType] && 'error'}>
                <label htmlFor={id}>{field}</label>
                <InputField
                  {...register(fieldName as FieldNameType, {
                    required: 'Required',
                    pattern: {
                      value: new RegExp(validation),
                      message: `Invalid ${field.toLowerCase()}`
                    },
                    validate: (value) => new RegExp(validation).test(value)
                  })}
                  type={type}
                  id={id}
                  placeholder={placeholder}
                />
                {errors[fieldName as FieldNameType] && <p>Incorrect {field}</p>}
              </InputContainer>
            ))}
          </FormSection>
          {/* TODO separate components */}
          <FormSection className="shipping-section">
            <MediumHeading as="h2">Shipping Info</MediumHeading>
            {checkoutData.shipping.map(({ field, id, type, placeholder, validation }) => (
              <InputContainer key={id}>
                <InputField type={type} id={id} placeholder={placeholder} pattern={validation} required />
                <label htmlFor={id}>{field}</label>
              </InputContainer>
            ))}
          </FormSection>
        </StyledCheckout>
        {children}
      </form>
      {isPaid && (
        <Modal onDisable={paidHandler}>
          <Success onDisable={paidHandler} />
        </Modal>
      )}
    </>
  );
};

export default CheckoutForm;
