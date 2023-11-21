import { Nav } from 'react-bootstrap';

export default function OnLogin({ navigate, user }) {
  return (
    <Nav className="ms-auto">
      <Nav.Link onClick={() => navigate('/mypage')}></Nav.Link>
      <Nav.Link onClick={() => {}}>로그아웃</Nav.Link>
    </Nav>
  );
}
