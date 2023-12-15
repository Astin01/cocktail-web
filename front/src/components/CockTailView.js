import { useNavigate } from 'react-router-dom';
import { decrease, increase, outCart } from '../store/store';

export default function CockTailView({ data }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.count}</td>
      <td>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={outCart}>x</button>
      </td>
      <td>{data.tprice}</td>
    </tr>
  );
}
