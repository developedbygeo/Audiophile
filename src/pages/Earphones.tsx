import Products from 'components/Product/Products';
import ScrollTop from 'components/UI/ScrollTop';
import PageBanner from 'components/Header/PageBanner';

const Earphones = () => (
  <>
    <ScrollTop />
    <PageBanner />
    <Products category="earphones" />
  </>
);

export default Earphones;
