import CockTail from '../components/CockTail';
import MainCarousel from '../components/MainCarousel';
export default function Home() {
  const data = [
    {
      title: '감홍약주',
      price: '10000',
      src: 'https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=18540&fileTy=MEDIA&fileNo=1',
    },
    {
      title: '파인 콜라다',
      price: '8000',
      src: 'https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=18542&fileTy=MEDIA&fileNo=1',
    },
  ];
  return (
    <>
      <MainCarousel />
      <div className="container" style={{ paddingTop: 20 }}>
        <div>
          <CockTail data={data} />
        </div>
      </div>
    </>
  );
}
