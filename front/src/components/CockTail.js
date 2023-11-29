import { useNavigate } from 'react-router-dom';

export default function CockTail({ data }) {
  const navigate = useNavigate();
  let CockTailView = data.map((data) => {
    return (
      <div
        className="col-md-4"
        onClick={() => navigate(`/detail/${data.title}`)}
      >
        <img
          src={data.src}
          width="265px"
          height="200px"
          paddingTop="20px"
          alt="img"
        />
        <div>
          <h4>{data.title}</h4>
          <div>{data.price}원</div>
        </div>
      </div>
    );
  });
  return <>{CockTailView}</>;
}
