import { useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import { setCheckout } from 'features/cartSlice';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import checkoutData from 'utils/checkoutData';

import { CheckoutDataKeys, CheckoutDataType, CheckoutInputType } from 'shared/models/checkout.model';
import { BaseProps } from 'shared/models/props.model';

import Modal from 'components/UI/Modal';
import Success from 'components/ModalDialogues/Success';
import { BigHeading } from 'components/UI/Text.styled';
import CheckoutPayment from './CheckoutPayment';
import { StyledCheckout } from './Checkout.styled';
import FormFieldsCheckout from './CheckoutFormFields';

const CheckoutForm = ({ children }: BaseProps) => {
  const methods = useForm<CheckoutInputType>();
  const dispatch = useAppDispatch();
  const [isOrderPaid, setIsOrderPaid] = useState(false);

  const disableViewHandler = () => setIsOrderPaid((prevState) => !prevState);

  // toggles success modal view and sets isCheckedOut to true to hide quantity in cart button - success dispatches the cart reset
  const submitHandler: SubmitHandler<CheckoutInputType> = () => {
    setIsOrderPaid(true);
    dispatch(setCheckout(true));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <StyledCheckout as="section">
          <BigHeading>Checkout</BigHeading>
          {Object.entries(checkoutData).map(([key, value]) => (
            <FormFieldsCheckout name={key as CheckoutDataKeys} data={value as CheckoutDataType} key={key} />
          ))}
          <CheckoutPayment />
        </StyledCheckout>
        {children}
      </form>
      {isOrderPaid && (
        <Modal>
          <Success onDisable={disableViewHandler} />
        </Modal>
      )}
    </FormProvider>
  );
};

export default CheckoutForm;
