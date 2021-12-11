import Axios from '../utils/http-common';

const userCreate = async (name, nickname, email, password) => {
  await Axios({
    url: '/user/',
    method: 'POST',
    data: {
      name: name,
      nickname: nickname,
      email: email,
      password: password,
    },
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

const login = async (email, password) => {
  await Axios({
    url: `/user/${email}`,
    method: 'POST',
    data: {
      email: email,
      password: password,
    },
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

const userFind = async email => {
  await Axios({
    url: `/user/${email}`,
    method: 'GET',
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

const userDelete = async id => {
  await Axios({
    url: `/user/${id}`,
    method: 'DELETE',
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

const userUpdate = async (name, nickname, email, password) => {
  await Axios({
    url: `/user/${id}`,
    method: 'PUT',
    data: {
      name: name,
      nickname: nickname,
      email: email,
      password: password,
    },
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export default login;
export {login, userCreate, userDelete, userFind, userUpdate};
