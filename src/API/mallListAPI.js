import Axios from '../utils/http-common';

const mallList = async pcode => {
  return await Axios({
    url: `/malllist/${pcode}`,
    method: 'GET',
  })
    .then(({data}) => {
      console.log(data);
      return JSON.stringify(result.data);
    })
    .catch(async error => {
      return await error;
    });
};

export default mallList;
export {mallList};
