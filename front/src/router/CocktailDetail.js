import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { inCart } from '../store/store';
import { data } from '../store/data';

export default function CockTailDetail() {
  let [input, setInput] = useState('');
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let params = useParams();

  const product = data[params.id - 1];

  return (
    <div className="container">
      <div className="row" style={{ paddingTop: 10 }}>
        <div className="col-md-6">
          <img src={product?.address} width="100%" alt="product" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.name}</h4>
          <p>{product.description}</p>
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
                  name: product.name,
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
              setTab(1);
            }}
            eventKey="link1"
          >
            후기
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
    <div className={'start ' + fade}>{[<div></div>, <div></div>][tab]}</div>
  );
}
