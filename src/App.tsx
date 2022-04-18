import { Routes, Route, Navigate } from 'react-router-dom';

import GlobalStyle from 'shared/globalStyle';

import Home from 'pages/Home';
import Speakers from 'pages/Speakers';
import Headphones from 'pages/Headphones';
import Earphones from 'pages/Earphones';
import Details from 'pages/Details';

import Header from 'components/Header/Header';
import Categories from 'components/Categories/Categories';
import Brand from 'components/Brand/Brand';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="products/:id" element={<Details />} />
        </Routes>
        <Categories />
        <Brand />
      </main>

      <Footer />
    </>
  );
}

export default App;
