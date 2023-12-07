import axios from 'axios';

export default function onLogout() {
  axios({
    method: 'post',
    url: '/logout',
  });
}
