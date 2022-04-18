import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollTop;
