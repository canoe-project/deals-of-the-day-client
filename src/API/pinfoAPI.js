import Axios from '../utils/http-common';

const productInfoFindOne = async id => {
  return await Axios({
    url: `/pinfo/${id}`,
    method: 'GET',
  })
    .then(result => {
      return JSON.stringify(result.data[0]);
    })
    .catch(error => {
      return error;
    });
};

export default productInfoFindOne;
export {productInfoFindOne};
