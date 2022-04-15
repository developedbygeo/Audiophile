import Products from 'components/Product/Products';
import ScrollTop from 'components/UI/ScrollTop';
import PageBanner from 'components/Header/PageBanner';

const Speakers = () => (
  <>
    <ScrollTop />
    <PageBanner page="speakers" />
    <Products category="speakers" />
  </>
);

export default Speakers;
