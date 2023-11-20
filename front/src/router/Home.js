import { useNavigate } from 'react-router-dom';
import SiteNav from '../components/SiteNav';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <SiteNav navigate={navigate} />
    </>
  );
}
