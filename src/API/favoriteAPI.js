import Axios from '../utils/http-common';

const favoriteAdd = async pcode => {
  await Axios({
    url: '/favorite/',
    method: 'POST',
    data: {
      pcode: pcode,
      email: email,
    },
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};
const favoriteDelete = async pcode => {
  await Axios({
    url: '/favorite/',
    method: 'DELETE',
    data: {
      pcode: pcode,
      email: email,
    },
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};
const favoriteRead = async pcode => {
  await Axios({
    url: '/favorite/',
    method: 'DELETE',
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export default favoriteAdd;
export {favoriteAdd, favoriteDelete, favoriteRead};
