import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import OnLogin from './OnLogin';
import OffLogin from './OffLogin';

export default function SiteNav({ isLogin }) {
  const navigate = useNavigate();
  const userInfo = {};

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <span className="logoTitle">CockTail</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/event')}>Event</Nav.Link>
          <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
        </Nav>
        {isLogin === 0 ? (
          <OffLogin navigate={navigate} />
        ) : (
          <OnLogin user={userInfo} navigate={navigate} />
        )}
      </Container>
    </Navbar>
  );
}
