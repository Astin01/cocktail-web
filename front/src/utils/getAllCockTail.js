import axios from 'axios';

export default async function getCockTailAll() {
  axios({
    method: 'get',
    url: '/api/cocktail/all',
  }).then((res) => {
    return res.data;
  });
}
