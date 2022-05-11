import React, { Suspense } from 'react';
import { useAppSelector } from 'app/hooks';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import GlobalStyle from 'shared/globalStyle';
import Loader from 'components/UI/Loader';

import Home from 'pages/Home';
import Header from 'components/Header/Header';
import Categories from 'components/Categories/Categories';
import Brand from 'components/Brand/Brand';
import Footer from 'components/Footer/Footer';

const Earphones = React.lazy(() => import('pages/Earphones'));
const Headphones = React.lazy(() => import('pages/Headphones'));
const Details = React.lazy(() => import('pages/Details'));
const Speakers = React.lazy(() => import('pages/Speakers'));
const Checkout = React.lazy(() => import('pages/Checkout'));
const NotFound = React.lazy(() => import('pages/NotFound'));

function App() {
  const { pathname } = useLocation();
  const isHome = pathname.slice(1) === 'home';
  const isCheckout = pathname === '/checkout';
  const { totalCost } = useAppSelector((state) => state.cart);
  const headerClass = isHome ? 'home-header' : '';
  return (
    <>
      <GlobalStyle />
      <Header className={headerClass} />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="earphones" element={<Earphones />} />
            <Route path="products/:id" element={<Details />} />
            <Route path="checkout" element={totalCost ? <Checkout /> : <Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {!isCheckout && (
          <>
            {!isHome && <Categories />}
            <Brand />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
