import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SiteNav from './components/SiteNav';

import Home from './router/Home';
import Login from './router/Login';
import SignIn from './router/SignIn';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(0);
  return (
    <>
      <SiteNav isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
