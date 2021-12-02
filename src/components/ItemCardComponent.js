import React, {useContext, useState} from 'react';
import {View, Pressable, Image, Text} from 'react-native';
import {
  containerStyle,
  textStyle,
  iconsStyle,
  imageStyle,
} from '../styles/ItemCardStyle';
import defaultImage from '../assets/image/Explore/defaultImage.png';
import SaveIcon from '../assets/icon/Exprore_Icons/SaveIcon.svg';

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
          <SaveIcon style={iconsStyle.saveIcon} />
          <Text style={textStyle.save}>{save} save</Text>
        </View>
      </View>
    </Pressable>
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
const TestCard = props => {
  return (
    <Pressable
      style={containerStyle.container}
      onPress={() => {
        alert('test');
      }}>
      <View style={containerStyle.discountRate}>
        <Text style={textStyle.discountRateText}>100%</Text>
      </View>
      <Image style={imageStyle.productImage} source={defaultImage}></Image>
      <View style={containerStyle.descriptionContainer}>
        <View style={containerStyle.productDescriptions}>
          <Text style={textStyle.productName}>제품이름</Text>
          <Text style={textStyle.productPrice}>000,000 원</Text>
        </View>
        <View
          style={[
            containerStyle.productDescriptions,
            {justifyContent: 'flex-start'},
          ]}>
          <SaveIcon style={iconsStyle.saveIcon} />
          <Text style={textStyle.save}>22 save</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ItemCard;
export {TestCard, renderItem};
