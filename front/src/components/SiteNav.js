import { Navbar, Container, Nav } from 'react-bootstrap';

import OnLogin from './OnLogin';
import OffLogin from './OffLogin';

export default function SiteNav({ navigate }) {
  const isLogin = 1;
  const userInfo = {};

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <span className="logoTitle">Fruity</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/event')}>Event</Nav.Link>
          <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
        </Nav>
        {isLogin === 0 ? (
          <OnLogin user={userInfo} navigate={navigate} />
        ) : (
          <OffLogin />
        )}
      </Container>
    </Navbar>
  );
}
