import Products from 'components/Product/Products';
import ScrollTop from 'components/UI/ScrollTop';
import PageBanner from 'components/Header/PageBanner';

const Earphones = () => (
  <>
    <ScrollTop />
    <PageBanner page="earphones" />
    <Products category="earphones" />
  </>
);

export default Earphones;
