import Carousel from 'react-bootstrap/Carousel';

import style from '../css/MainCarousel.module.css';
import { useNavigate } from 'react-router-dom';

export default function MainCarousel() {
  const navigate = useNavigate();
  return (
    <Carousel fade>
      <Carousel.Item>
        <div
          onClick={() => {
            navigate('/event?image=&title=');
          }}
          className={style.slidercontents}
        >
          <div className={style.wrapText}>
            <h1>칵테일 마시고 공연 보자</h1>
            <div className="d-none d-md-block">
              <p>구매 고객 중 추첨을 통해서 콘서트 티켓 제공</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.slidercontents2}>
          <div className={style.wrapText}>
            <h1>CockTail 고객 사은품</h1>
            <div className="d-none d-md-block">
              <p>CockTail에서 50000만원 이상 주문시 칵테일 글라스 증정</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
