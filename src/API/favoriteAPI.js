import Axios from '../utils/http-common';

const favoriteAdd = async (
  email,
  pcode,
  shippingCost,
  mallName,
  mallImg,
  price,
  link,
) => {
  return await Axios({
    url: `/favorite/${mallName}`,
    method: 'POST',
    data: {
      email: email,
      pcode: pcode,
      shippingCost: shippingCost,
      mallName: mallName,
      mallImg: mallImg,
      price: price,
      link: link,
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
