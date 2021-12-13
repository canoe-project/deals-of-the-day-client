import React, {useContext, useState, useEffect} from 'react';
import {AuthDispatch} from '../store/AuthStore';
import {FlatList, SafeAreaView, Button} from 'react-native';
import {ItemCard} from '../components/ItemCardComponent';
import {exploreState, exploreDispatch} from '../store/exploreStore';

const ExploreTab = ({navigation}) => {
  /*logout useContext*/
  // const {signOut} = useContext(AuthContext);
  const {explore} = exploreDispatch();
  const pstate = exploreState();

  /*loading state*/
  // const [offset, setOffset] = useState(0);
  // const [loading, setLoading] = useState(false);

  /*demo data*/
  useEffect(() => {
    // infoFindAll();
    explore();
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
      <FlatList data={pstate} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default ExploreTab;
