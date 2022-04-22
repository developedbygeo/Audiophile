import checkoutData from 'utils/checkoutData';
import { BigHeading, MediumHeading } from 'components/UI/Text.styled';
import { StyledCheckout, FormSection, InputContainer, InputField } from './Checkout.styled';

const CheckoutForm = () => {
  return (
    <StyledCheckout as="section">
      <BigHeading>Checkout</BigHeading>
      <form>
        <FormSection className="billing-section">
          <MediumHeading as="h2">Billing Details</MediumHeading>
          {checkoutData.billing.map(({ field, id, type, placeholder }) => (
            <InputContainer key={id}>
              <InputField type={type} id={id} placeholder={placeholder} required />
              <div>
                <label htmlFor={id}>{field}</label>
              </div>
            </InputContainer>
          ))}
        </FormSection>
        <FormSection className="shipping-section">
          <MediumHeading as="h2">Shipping Info</MediumHeading>
          {checkoutData.shipping.map(({ field, id, type, placeholder }) => (
            <InputContainer key={id}>
              <InputField type={type} id={id} placeholder={placeholder} />
              <label htmlFor={id}>{field}</label>
            </InputContainer>
          ))}
        </FormSection>
      </form>
    </StyledCheckout>
  );
};

export default CheckoutForm;
