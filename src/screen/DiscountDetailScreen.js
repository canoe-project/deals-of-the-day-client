import React, {useContext, useState, useEffect} from 'react';
import {Pressable, SafeAreaView, View, Image, ScrollView} from 'react-native';
import {DetailItemCard} from '../components/ItemCardComponent';
import {productState, productDispatch} from '../store/productStore';

const DiscountDetailsScreen = ({route, navigation}) => {
  const {pcode} = route.params;
  const testData = {
    id: 'bd7acbea-c1b1-46c2-aasdd5-3ad53abb28ba',
    productImage: {uri: 'https://picsum.photos/200'},
    productName: 'productName',
    productPrice: '100000',
    save: '22',
    discountRate: '100',
  };
  const testShop = [
    {
      id: 0,
      name: 'elevenst',
      price: 105000,
      link: 'https://www.11st.co.kr/products/3939679662',
    },
    {
      id: 1,
      name: 'coupang',
      price: 99000,
      link: 'https://www.coupang.com/vp/products/6080959457',
    },
    {
      id: 1,
      name: 'coupang',
      price: 99000,
      link: 'https://www.coupang.com/vp/products/6080959457',
    },
  ];

  return (
    <ScrollView>
      <DetailItemCard
        style={{flex: 1}}
        productImage={testData.productImage}
        productName={testData.productName}
        productPrice={testData.productPrice}
        save={testData.save}
        shopData={testShop}
      />
    </ScrollView>
  );
};

export default DiscountDetailsScreen;
