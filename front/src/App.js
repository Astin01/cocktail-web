import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SiteNav from './components/SiteNav';

import Home from './router/Home';
import Login from './router/Login';
import SignIn from './router/SignIn';
import { useState } from 'react';
import EventDetail from './router/EventDetail';
import CockTailDetail from './router/CockTailDetail';
import Checkout from './router/CheckOut';
import Mypage from './router/Mypage';
import Cart from './router/Cart';
import Success from './router/Success';

function App() {
  const [isLogin, setIsLogin] = useState(0);
  return (
    <>
      <SiteNav isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/cocktail/:id" element={<CockTailDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
