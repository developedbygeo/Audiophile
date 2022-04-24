import CheckoutForm from 'components/Forms/Checkout';
import CheckoutSummary from 'components/Forms/CheckoutSummary';
import { PageBackground } from 'components/Forms/Checkout.styled';

const Checkout = () => {
  return (
    <PageBackground>
      <CheckoutForm>
        <CheckoutSummary />
      </CheckoutForm>
    </PageBackground>
  );
};

export default Checkout;
