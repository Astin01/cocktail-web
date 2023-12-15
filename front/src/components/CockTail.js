import { useNavigate } from 'react-router-dom';

export default function CockTail({ data }) {
  const navigate = useNavigate();
  let CockTailView = data.map((data) => {
    return (
      <div
        className="col-md-4"
        onClick={() => navigate(`/cocktail/${data.id}`)}
      >
        <img
          src={data.address}
          width="265px"
          height="200px"
          paddingTop="20px"
          alt="img"
        />
        <div>
          <h4>{data.name}</h4>
          <div>{data.price}원</div>
        </div>
      </div>
    );
  });
  return <>{CockTailView}</>;
}
