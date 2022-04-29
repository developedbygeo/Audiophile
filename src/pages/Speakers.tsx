import Products from 'components/Product/Products';
import ScrollTop from 'components/UI/ScrollTop';
import PageBanner from 'components/Header/PageBanner';

const Speakers = () => (
  <>
    <ScrollTop />
    <PageBanner />
    <Products category="speakers" />
  </>
);

export default Speakers;
