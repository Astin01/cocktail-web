import axios from 'axios';

export default function onLogin(e) {
  e.preventDefault();
  axios({
    method: 'post',
    url: '/api/login',
    data: {
      id: e.target[0].value,
      pw: e.target[1].value,
    },
  });
}
