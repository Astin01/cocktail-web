import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { inCart } from '../store';

export default function CockTailDetail(props) {
  let [input, setInput] = useState('');
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const product = {};

  return (
    <div className="container">
      <div className="row" style={{ paddingTop: 10 }}>
        <div className="col-md-6">
          <img
            src={`../img/fruit/${product.title}.jpg`}
            width="100%"
            alt="product"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <input
            type="number"
            id="points"
            name="points"
            step="1"
            min="1"
            max="100"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(
                inCart({
                  id: product.id,
                  name: product.title,
                  count: parseInt(input),
                  price: product.price,
                  tprice: product.price * input,
                })
              );
              navigate('/cart');
            }}
            className="btn btn-danger"
          >
            장바구니
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}
function TabContent({ tab }) {
  let [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      setFade('');
    };
  }, [tab]);

  return (
    <div className={'start ' + fade}>
      {[<div>정보</div>, <div>후기</div>][tab]}
    </div>
  );
}
