import React, {useState, useEffect, useCallback, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {FavoritetItemCard} from '../components/FavoritetItemCard';
import {AuthState} from '../store/AuthStore';

import {userFind} from '../API/userAPI';
import {productInfoFindOne} from '../API/pinfoAPI';

const FavoritetScreen = props => {
  const authstate = useContext(AuthState);
  const [favoriteState, favoriteDispatch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = async () => {
    setLoading(true);
    await userFind(authstate.userToken)
      .then(result => {
        return JSON.parse(result)['favoriteList'];
      })
      .then(async favoriteList => {
        return await Promise.all(
          favoriteList.map(async favorite => {
            return JSON.parse(await productInfoFindOne(favorite['pcode']));
          }),
        );
      })
      .then(result => {
        console.log(result);
        favoriteDispatch(result);
      })
      .then(() => {
        console.log(favoriteState);
        setLoading(false);
      });
  };
  const renderItem = ({item}) => {
    return (
      <FavoritetItemCard
        productImage={item.img}
        productName={item.pname}
        productPrice={item.price}
        mallImg={item.mallImg}
        link={item.link}
      />
    );
  };
  return (
    <SafeAreaView>
      <FlatList data={favoriteState} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default FavoritetScreen;
export {FavoritetScreen};
