import ScrollTop from 'components/UI/ScrollTop';
import Hero from 'components/Landing/Hero';
import Featured from 'components/Landing/Featured';
import Categories from 'components/Categories/Categories';

const Home = () => {
  return (
    <>
      <ScrollTop />
      <Hero />
      <Categories />
      <Featured />
    </>
  );
};

export default Home;
