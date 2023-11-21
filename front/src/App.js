import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './router/Home';
import SiteNav from './components/SiteNav';

function App() {
  return (
    <>
      <BrowserRouter>
        <SiteNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
