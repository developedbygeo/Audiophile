import Products from 'components/Product/Products';
import ScrollTop from 'components/UI/ScrollTop';
import PageBanner from 'components/Header/PageBanner';

const Headphones = () => (
  <>
    <ScrollTop />
    <PageBanner page="headphones" />
    <Products category="headphones" />
  </>
);

export default Headphones;
