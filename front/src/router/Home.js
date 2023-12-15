import CockTail from '../components/CockTail';
import MainCarousel from '../components/MainCarousel';
import { data } from '../store/data';

export default function Home() {
  return (
    <>
      <MainCarousel />
      <div className="container" style={{ paddingTop: 20 }}>
        <div className="row">
          <CockTail data={data} />
        </div>
      </div>
    </>
  );
}
