import Carousel from 'react-bootstrap/Carousel';
import style from '../css/MainCarousel.module.css';
export default function MainCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className={style.slidercontents}>
          <div className={style.wrapText}>
            <h1>Organic fresh fruits for your health</h1>
            <div className="d-none d-md-block">
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor
                gravida aliquet
              </p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.slidercontents2}>
          <div className={style.wrapText}>
            <h1>Organic fresh fruits for your health</h1>
            <div className="d-none d-md-block">
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor
                gravida aliquet
              </p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
