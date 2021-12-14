import React, {useContext, useState, useEffect} from 'react';
import {AuthDispatch} from '../store/AuthStore';
import {FlatList, SafeAreaView, Button} from 'react-native';
import {ItemCard} from '../components/ItemCardComponent';
import {exploreState, exploreDispatch} from '../store/exploreStore';
import {testProducFindAll} from '../API/productAPI';
const ExploreTab = ({navigation}) => {
  /*logout useContext*/
  const {explore} = exploreDispatch();
  const productState = exploreState();

  // const [productState, productDispatch] = useState([]);
  useEffect(() => {
    explore();
    // testProducFindAll()
    //   .then(async result => {
    //     return JSON.parse(result);
    //   })
    //   .then(result => {
    //     productDispatch(result);
    //   });
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
      <FlatList data={productState} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default ExploreTab;
