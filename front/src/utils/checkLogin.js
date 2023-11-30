import axios from 'axios';

export default function ckLogin(setLogin) {
  axios({
    method: 'get',
    url: '/ckLogin',
  }).then((result) => {
    if (result.data === '로그인안하셨는데요?') {
      setLogin(0);
    } else {
      setLogin(1);
    }
  });
}
