import Axios from '../utils/http-common';

const productSearch = async productName => {
  return await Axios({
    url: `/productsearch/${productName}`,
    method: 'GET',
  })
    .then(async result => {
      return JSON.stringify(result.data[0]);
    })
    .catch(async error => {
      return await error;
    });
};

export default productSearch;
export {productSearch};
