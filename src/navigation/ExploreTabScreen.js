import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../store/AuthStore';
import {FlatList, SafeAreaView, Button} from 'react-native';
import {renderItem} from '../components/ItemCardComponent';

const ExploreTab = ({navigation}) => {
  /*logout useContext*/
  // const {signOut} = useContext(AuthContext);
  const [data, setData] = useState([]);

  /*loading state*/
  // const [offset, setOffset] = useState(0);
  // const [loading, setLoading] = useState(false);

  /*demo data*/
  useEffect(() => {
    setData([
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        productImage: {uri: 'https://picsum.photos/200'},
        productName: 'productName',
        productPrice: '100000',
        save: '22',
        discountRate: '100',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aasdd5-3ad53abb28ba',
        productImage: {uri: 'https://picsum.photos/200'},
        productName: 'productName',
        productPrice: '100000',
        save: '22',
        discountRate: '100',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aasdd5-3ad53abb28ba',
        productImage: {uri: 'https://picsum.photos/200'},
        productName: 'productName',
        productPrice: '100000',
        save: '22',
        discountRate: '100',
      },
    ]);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F2F4F9',
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ExploreTab;
