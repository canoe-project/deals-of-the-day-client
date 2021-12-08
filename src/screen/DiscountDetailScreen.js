import React, {useContext, useState, useEffect} from 'react';
import {Pressable, SafeAreaView, View, Image, ScrollView} from 'react-native';
import {DetailItemCard} from '../components/ItemCardComponent';
import {productState, productDispatch} from '../store/productStore';

import {malllistDispatch, malllistState} from '../store/mailListStore';

const DiscountDetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  const {mallFindAll} = malllistDispatch();
  const state = malllistState();
  // const testShop = [
  //   {
  //     id: 0,
  //     name: 'elevenst',
  //     price: 105000,
  //     link: 'https://www.11st.co.kr/products/3939679662',
  //   },
  //   {
  //     id: 1,
  //     name: 'coupang',
  //     price: 99000,
  //     link: 'https://www.coupang.com/vp/products/6080959457',
  //   },
  //   {
  //     id: 1,
  //     name: 'coupang',
  //     price: 99000,
  //     link: 'https://www.coupang.com/vp/products/6080959457',
  //   },
  // ];

  useEffect(async () => {
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
// // const {item} = route.params;
// // const {mallFindAll} = malllistDispatch();
// // const state = malllistState();
// // useEffect(async () => {
// // await mallFindAll(item.pcode);
// // }, []);

// return (
//   <ScrollView>
//     <DetailItemCard
//     // style={{flex: 1}}
//     // productImage={{uri: `https:${item.img}`}}
//     // productName={item.name}
//     // productPrice={item.price}
//     // save={0}
//     // shopData={state}
//     />
//   </ScrollView>
// );
