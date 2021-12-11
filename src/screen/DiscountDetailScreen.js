import React, {useContext, useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {DetailItemCard} from '../components/ItemCardComponent';
import {malllistDispatch, malllistState} from '../store/mallListStore';

const DiscountDetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  const {mallFindAll} = malllistDispatch();
  const state = malllistState();

  useEffect(async () => {
    await navigation.setOptions({title: item.name});
    await mallFindAll(item.pcode);
  }, []);

  return (
    <ScrollView>
      <DetailItemCard
        style={{flex: 1}}
        productImage={{uri: `https:${item.img}`}}
        productName={item.name}
        productPrice={item.price}
        save={0}
        shopData={state}
      />
    </ScrollView>
  );
};

export default DiscountDetailsScreen;
