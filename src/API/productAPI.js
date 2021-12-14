import Axios from '../utils/http-common';

const productFindAll = async () => {
  return await Axios({
    url: '/info/',
    method: 'GET',
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};
const productFindOne = async id => {
  return await Axios({
    url: `/info/${id}`,
    method: 'GET',
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};
const testProducFindAll = async () => {
  return await Axios({
    url: '/hotitem/',
    method: 'GET',
  })
    .then(result => {
      return JSON.stringify(result.data);
    })
    .catch(error => {
      return error;
    });
};
export default productFindAll;
export {productFindAll, productFindOne, testProducFindAll};
