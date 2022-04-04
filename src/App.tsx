import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './shared/globalStyle';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
