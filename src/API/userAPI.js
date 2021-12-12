import Axios from '../utils/http-common';

const userCreate = async (name, nickname, email, password) => {
  return await Axios({
    url: '/users/',
    method: 'POST',
    data: {
      name: name,
      nickname: nickname,
      email: email,
      password: password,
    },
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};

const login = async (email, password) => {
  return await Axios({
    url: `/users/`,
    method: 'POST',
    data: {
      email: email,
      password: password,
    },
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};

const userFind = async email => {
  return await Axios({
    url: `/users/${email}`,
    method: 'GET',
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};

const userDelete = async id => {
  return await Axios({
    url: `/users/${id}`,
    method: 'DELETE',
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};

const userUpdate = async (name, nickname, email, password) => {
  return await Axios({
    url: `/users/${id}`,
    method: 'PUT',
    data: {
      name: name,
      nickname: nickname,
      email: email,
      password: password,
    },
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};

export default login;
export {login, userCreate, userDelete, userFind, userUpdate};
