import React, {useState, useEffect, useCallback, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {FavoritetItemCard} from '../components/FavoritetItemCard';
import {ItemCard} from '../components/ItemCardComponent';
import {AuthState} from '../store/AuthStore';

import {userFind} from '../API/userAPI';
import {productInfoFindOne} from '../API/pinfoAPI';

const SearchResultScreen = ({route, navigation}) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const keyword = route.params.value;
  

  const getData = () => {
    setLoading(true);
    fetch("http://152.67.223.82/productsearch/" + keyword)
      .then((res) => res.json())
      .then((res) => setData(res))
  };

  useEffect(() => {
    getData();
  }, []);


  const renderItem = ({item}) => {
    return (
      <ItemCard
        productImage={{uri: `https:${item.img}`}}
        productName={item.name}
        productPrice={item.price}
        save={0}
        discountRate={0}
        onPress={() => {
          navigation.push('DiscountDetail', {item});
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default SearchResultScreen;
export {SearchResultScreen};
