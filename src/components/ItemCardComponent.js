import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  containerStyle,
  textStyle,
  iconsStyle,
  imageStyle,
  buttonStyle,
} from '../styles/ItemCardStyle';

import defaultImage from '../assets/image/Explore/defaultImage.png';
import SaveIcon from '../assets/icon/Exprore_Icons/save_Icon.png';

import Coupang_Icon from '../assets/icon/Shop_Icon/Coupang_Icon.png';
import Elevenst_Icon from '../assets/icon/Shop_Icon/Elevenst_Icon.png';
import Lotteon_Icon from '../assets/icon/Shop_Icon/Lotteon_Icon.png';
import Ssg_Icon from '../assets/icon/Shop_Icon/Ssg_Icon.png';

import discount_Icon from '../assets/icon/Exprore_Icons/discount_Icon.png';
import Share_Icon from '../assets/icon/Exprore_Icons/share_Icon.png';
import discount_ActiveIcon from '../assets/icon/Exprore_Icons/discount_ActiveIcon.png';

import {ImagePressable} from './CustomPressableComponet';

const ItemCard = props => {
  const {productImage, productName, productPrice, save, discountRate} = props;
  return (
    <Pressable
      style={containerStyle.container}
      onPress={() => {
        alert('test');
      }}>
      <View style={containerStyle.discountRate}>
        <Text style={textStyle.discountRateText}>{discountRate}%</Text>
      </View>
      <Image style={imageStyle.productImage} source={productImage}></Image>
      <View style={containerStyle.descriptionContainer}>
        <View style={containerStyle.productDescriptions}>
          <Text style={textStyle.productName}>{productName}</Text>
          <Text style={textStyle.productPrice}>{productPrice} 원</Text>
        </View>
        <View
          style={[
            containerStyle.productDescriptions,
            {justifyContent: 'flex-start'},
          ]}>
          <ImagePressable image={SaveIcon} Imagestyle={iconsStyle.saveIcon} />
          <Text style={textStyle.save}>{save} save</Text>
        </View>
      </View>
    </Pressable>
  );
};

const DetailItemCard = props => {
  const {productImage, productName, productPrice, save, shopData} = props;
  return (
    <View>
      <Image
        style={[imageStyle.productImage, {borderRadius: 0}]}
        source={productImage}></Image>
      <View style={containerStyle.detailcontainer}>
        <View style={[containerStyle.descriptionContainer]}>
          <View style={containerStyle.productDescriptions}>
            <Text style={textStyle.productName}>{productName}</Text>
            <Text style={textStyle.productPrice}>{productPrice} 원</Text>
          </View>
          <View
            style={[
              containerStyle.productDescriptions,
              {justifyContent: 'flex-start'},
            ]}>
            <ImagePressable image={SaveIcon} Imagestyle={iconsStyle.saveIcon} />
            <Text style={textStyle.save}>{save} save</Text>
          </View>
        </View>
        <View style={containerStyle.shopListContainer}>
          {shopData.map(item => {
            return <ShopItem name={item.name} price={item.price} />;
          })}
        </View>
      </View>
    </View>
  );
};

const ShopItem = props => {
  const {name, price} = props;
  const [icon, setIcon] = useState({});

  useEffect(() => {
    switch (name) {
      case 'elevenst':
        setIcon(Elevenst_Icon);
        break;
      case 'coupang':
        setIcon(Coupang_Icon);
        break;
      case 'lotteon':
        setIcon(Lotteon_Icon);
        break;
      case 'ssg':
        setIcon(Ssg_Icon);
        break;
      default:
        //디폴트 이미지로 이후 수정
        setIcon(Elevenst_Icon);
        break;
    }
  }, []);

  return (
    <View style={containerStyle.shopItemContainer}>
      <Image source={icon} />
      <Text>{price}</Text>
      <View style={{flexDirection: 'row'}}>
        <ImagePressable
          image={Share_Icon}
          imageStyle={buttonStyle.defaultButtton}
        />
        <ImagePressable
          image={discount_Icon}
          imageStyle={buttonStyle.defaultButtton}
        />
      </View>
    </View>
  );
};
const renderItem = ({item}) => (
  <ItemCard
    productImage={item.productImage}
    productName={item.productName}
    productPrice={item.productPrice}
    save={item.save}
    discountRate={item.discountRate}
  />
);

export default ItemCard;
export {renderItem, ItemCard, DetailItemCard};
