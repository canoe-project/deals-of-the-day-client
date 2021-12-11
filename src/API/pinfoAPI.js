import Axios from '../utils/http-common';

const productInfoFindOne = async id => {
  await Axios({
    url: `/pinfo/${id}`,
    method: 'GET',
  })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });
};

export default productInfoFindOne;
export {productInfoFindOne};
