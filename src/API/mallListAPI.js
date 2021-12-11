import Axios from '../utils/http-common';

const mallList = async pcode => {
  await Axios({
    url: `/malllist/${pcode}`,
    method: 'GET',
  })
    .then(({data}) => {
      console.log(data);
      return data.json();
    })
    .catch(async error => {
      return await error;
    });
};

export default mallList;
export {mallList};
