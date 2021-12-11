import Axios from '../utils/http-common';

const productSearch = async productName => {
  await Axios({
    url: `/productsearch/${productName}`,
    method: 'GET',
  })
    .then(async result => {
      return await result.data;
    })
    .catch(async error => {
      return await error;
    });
};

export default productSearch;
export {productSearch};
