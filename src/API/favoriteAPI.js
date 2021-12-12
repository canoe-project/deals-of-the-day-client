import Axios from '../utils/http-common';

const favoriteAdd = async (pcode, email) => {
  return await Axios({
    url: '/favorite/',
    method: 'POST',
    data: {
      pcode: pcode,
      email: email,
    },
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};
const favoriteDelete = async pcode => {
  return await Axios({
    url: '/favorite/',
    method: 'DELETE',
    data: {
      pcode: pcode,
      email: email,
    },
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};
const favoriteRead = async pcode => {
  return await Axios({
    url: '/favorite/',
    method: 'GET',
  })
    .then(async result => {
      return JSON.stringify(result.data);
    })
    .catch(async error => {
      return await error;
    });
};

export default favoriteAdd;
export {favoriteAdd, favoriteDelete, favoriteRead};
