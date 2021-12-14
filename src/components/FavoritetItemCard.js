import React, {useContext, useState, useEffect, useCallback} from 'react';
import {View, Image, Text, Share} from 'react-native';
import {buttonStyle} from '../styles/ItemCardStyle';

import defaultImage from '../assets/image/Explore/defaultImage.png';
import SaveIcon from '../assets/icon/Exprore_Icons/save_Icon.png';

import discount_Icon from '../assets/icon/Exprore_Icons/discount_Icon.png';
import Share_Icon from '../assets/icon/Exprore_Icons/share_Icon.png';
import discount_ActiveIcon from '../assets/icon/Exprore_Icons/discount_ActiveIcon.png';

import {ImagePressable} from './CustomPressableComponet';

import {
  containerStyle,
  textStyle,
  imageStyle,
} from '../styles/FavoritetItemStyle';

const FavoritetItemCard = React.memo(props => {
  const {shippingCost, productName, productPrice, mallImg, link} = props;

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
  });

  return (
    <View style={containerStyle.itemContainer}>
      {/* 상품 설명*/}
      <Image
        source={{uri: `https:${mallImg}`}}
        resizeMode="contain"
        style={imageStyle.commonImage}
      />
      <View>
        <Text style={textStyle}>{productName}</Text>
        <Text style={textStyle}>가격 {productPrice} 원</Text>
        <Text style={textStyle}>배송비 {shippingCost} </Text>
      </View>
      <View style={containerStyle.buttonContainer}>
        <ImagePressable
          image={Share_Icon}
          imageStyle={buttonStyle.defaultButtton}
          onPress={onShare}
        />
        <ImagePressable
          image={discount_Icon}
          imageStyle={buttonStyle.defaultButtton}
        />
      </View>
    </View>
  );
});

export default FavoritetItemCard;
export {FavoritetItemCard};
