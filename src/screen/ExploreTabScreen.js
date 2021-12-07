import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../store/AuthStore';
import {FlatList, SafeAreaView, Button} from 'react-native';
import {ItemCard} from '../components/ItemCardComponent';
import {productState, productDispatch} from '../store/productStore';

const ExploreTab = ({navigation}) => {
  /*logout useContext*/
  // const {signOut} = useContext(AuthContext);
  const {infoFindAll, testInfoFindAll} = productDispatch();
  const pstate = productState();

  /*loading state*/
  // const [offset, setOffset] = useState(0);
  // const [loading, setLoading] = useState(false);

  /*demo data*/
  useEffect(() => {
    // infoFindAll();
    testInfoFindAll();
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
          navigation.push('DiscountDetail', {pcode: item.pcode});
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
      <FlatList data={pstate} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default ExploreTab;
