import React, { useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import { setCheckout } from 'features/cartSlice';
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from 'components/UI/Modal';
import Success from 'components/ModalDialogues/Success';

import checkoutData from 'utils/checkoutData';
import { BigHeading, MediumHeading } from 'components/UI/Text.styled';
import { StyledCheckout, FormSection, InputContainer, LabelContainer, InputField } from './Checkout.styled';

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

// TODO could use useNavigate here

const CheckoutForm = ({ children }: FormProps) => {
  const dispatch = useAppDispatch();
  const [isOrderPaid, setIsOrderPaid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>();

  const disableViewHandler = () => setIsOrderPaid((prevState) => !prevState);

  // toggles success modal view and sets isCheckedOut to true to hide quantity in cart button - success dispatches the cart reset
  const submitHandler: SubmitHandler<IFormInputs> = () => {
    setIsOrderPaid(true);
    dispatch(setCheckout(true));
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <StyledCheckout as="section">
          <BigHeading>Checkout</BigHeading>
          <FormSection className="billing-section">
            <MediumHeading as="h2">Billing Details</MediumHeading>
            {checkoutData.billing.map(({ field, fieldName, id, type, placeholder, validation }) => {
              const fieldIdentifier = fieldName.toLowerCase();

              return (
                <InputContainer key={id} className={errors[fieldName as FieldNameType] && 'error'}>
                  <LabelContainer>
                    <label htmlFor={id}>{field}</label>
                    {errors[fieldName as FieldNameType] && <p>Incorrect {fieldIdentifier} field</p>}
                  </LabelContainer>
                  <InputField
                    {...register(fieldName as FieldNameType, {
                      required: 'Required',
                      pattern: {
                        value: new RegExp(validation),
                        message: `Invalid ${fieldIdentifier}`
                      },
                      validate: (value) => new RegExp(validation).test(value)
                    })}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                  />
                </InputContainer>
              );
            })}
          </FormSection>
          <FormSection className="shipping-section">
            <MediumHeading as="h2">Shipping Info</MediumHeading>
            {checkoutData.shipping.map(({ field, fieldName, id, type, placeholder, validation }) => {
              const fieldIdentifier = fieldName.toLowerCase();

              return (
                <InputContainer key={id} className={errors[fieldName as FieldNameType] && 'error'}>
                  <LabelContainer>
                    <label htmlFor={id}>{field}</label>
                    {errors[fieldName as FieldNameType] && <p>Incorrect {fieldIdentifier}</p>}
                  </LabelContainer>
                  <InputField
                    {...register(fieldName as FieldNameType, {
                      required: true,
                      pattern: {
                        value: new RegExp(validation),
                        message: `Invalid ${fieldIdentifier}`
                      },
                      validate: (value) => new RegExp(validation).test(value)
                    })}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                  />
                </InputContainer>
              );
            })}
          </FormSection>
        </StyledCheckout>
        {children}
      </form>
      {isOrderPaid && (
        <Modal>
          <Success onDisable={disableViewHandler} />
        </Modal>
      )}
    </>
  );
};

export default CheckoutForm;
