import Axios from '../utils/http-common';

const productFindAll = async () => {
  await Axios({
    url: '/info/',
    method: 'GET',
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};
const productFindOne = async id => {
  await Axios({
    url: `/info/${id}`,
    method: 'GET',
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export default productFindAll;
export {productFindAll, productFindOne};
