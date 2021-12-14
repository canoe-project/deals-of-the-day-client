import React, {useCallback, useState, useEffect, useContext} from 'react';
import {View, Pressable, Image, Text, Share} from 'react-native';
import {
  containerStyle,
  textStyle,
  iconsStyle,
  imageStyle,
  buttonStyle,
} from '../styles/ItemCardStyle';

import defaultImage from '../assets/image/Explore/defaultImage.png';
import SaveIcon from '../assets/icon/Exprore_Icons/save_Icon.png';

import discount_Icon from '../assets/icon/Exprore_Icons/discount_Icon.png';
import Share_Icon from '../assets/icon/Exprore_Icons/share_Icon.png';
import discount_ActiveIcon from '../assets/icon/Exprore_Icons/discount_ActiveIcon.png';

import {AuthState} from '../store/AuthStore';

import {ImagePressable} from './CustomPressableComponet';
import {favoriteAdd} from '../API/favoriteAPI';

const ItemCard = props => {
  const {productImage, productName, productPrice, save, discountRate, onPress} =
    props;
  return (
    <Pressable style={containerStyle.container} onPress={onPress}>
      <View style={containerStyle.discountRate}>
        <Text style={textStyle.discountRateText}>{discountRate}%</Text>
      </View>
      <Image style={imageStyle.productImage} source={productImage}></Image>
      <View style={containerStyle.descriptionContainer}>
        <View style={containerStyle.productDescriptions}>
          <Text style={textStyle.productName}>{productName}</Text>
        </View>
        <View style={containerStyle.productDescriptionsPrice}>
          <Text style={textStyle.productPrice}>{productPrice}</Text>
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
  const {productImage, productName, productPrice, save, shopData, pcode} =
    props;
  return (
    <View>
      <Image
        style={[imageStyle.productImage, {borderRadius: 0}]}
        source={productImage}></Image>
      <View style={containerStyle.detailcontainer}>
        <View style={[containerStyle.descriptionContainer]}>
          <View style={containerStyle.productDescriptions}>
            <Text style={textStyle.productName}>{productName}</Text>
          </View>
          <View style={containerStyle.productDescriptionsPrice}>
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
            return (
              <ShopItem
                mallImg={item.mallImg}
                price={item.price}
                link={item.link}
                pcode={pcode}
                mallName={item.mallName}
                shippingCost={item.shippingCost}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const ShopItem = props => {
  const {pcode, mallName, mallImg, price, link, shippingCost} = props;
  const authstate = useContext(AuthState);

  const onShare = useCallback(async () => {
    try {
      const result = await Share.share({
        message: link,
        uri: link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const onSave = useCallback(async () => {
    favoriteAdd(
      authstate.userToken,
      pcode,
      // shippingCost,
      // mallName,
      // mallImg,
      // price,
      // link,
    ).then(result => {
      console.log(result);
    });
  }, []);
  return (
    <View style={containerStyle.shopItemContainer}>
      <Image
        style={{height: 25, width: 50}}
        source={{uri: `https:${mallImg}`}}
        resizeMode={'contain'}
      />
      <Text>{price}</Text>
      <View style={{flexDirection: 'row'}}>
        {/* 공유 버튼 누르는 시간동안은 백그라운드 색상을 변경 */}
        <ImagePressable
          image={Share_Icon}
          imageStyle={buttonStyle.defaultButtton}
          onPress={onShare}
        />
        <ImagePressable
          image={discount_Icon}
          imageStyle={buttonStyle.defaultButtton}
          onPress={onSave}
        />
      </View>
    </View>
  );
};

export default ItemCard;
export {ItemCard, DetailItemCard};
