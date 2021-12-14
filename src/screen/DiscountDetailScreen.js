import React, {useCallback, useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {DetailItemCard} from '../components/ItemCardComponent';
import {malllistDispatch, malllistState} from '../store/mallListStore';

const DiscountDetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  const {mallFindAll} = malllistDispatch();
  const state = malllistState();

  useEffect(() => {
    navigation.setOptions({title: item.name});
    exploreDetail();
  }, []);

  const exploreDetail = useCallback(async () => {
    await mallFindAll(item.pcode).then(() => {
      console.log(state);
    });
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
        pcode={item.pcode}
      />
    </ScrollView>
  );
};

export default DiscountDetailsScreen;
