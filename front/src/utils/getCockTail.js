import axios from 'axios';

export default function getCockTail(event) {
  event.preventDefault();
  axios({
    method: 'get',
    url: '/api/cocktail/id',
  }).then((res) => {
    return res.data;
  });
}
