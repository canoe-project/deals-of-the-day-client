import Axios from '../utils/http-common';

const user = {
  userCreate: (name, nickname, email, password) => {
    return Axios({
      url: '/user/',
      method: 'POST',
      data: {
        name: name,
        nickname: nickname,
        email: email,
        password: password,
      },
    });
  },
  userFindOne: email => {
    return Axios({
      url: `user/${email}`,
      method: 'GET',
    });
  },
};

export default user;
