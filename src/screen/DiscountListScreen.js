import React, {useContext, useState, useEffect} from 'react';

import React, {useContext, useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Button} from 'react-native';
import {ItemCard, TestItemCard} from '../components/ItemCardComponent';
import {containerStyle} from '../styles/discountScreenStyle';

import {productSearch} from '../API/productSearchAPI';

const DiscountDetailScreen = ({navigation}) => {
  /*loading state*/
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useState([
    {
      name: '',
      pcode: '',
      price: '',
      img: '',
    },
  ]);

  /*demo data*/
  useEffect(() => {
    dispatch(productSearch('cpu'));
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F2F4F9',
      }}>
      <FlatList data={state} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default DiscountDetailScreen;
