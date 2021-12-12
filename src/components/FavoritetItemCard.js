import React, {useContext, useState, useEffect, useCallback} from 'react';
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

import {ImagePressable} from './CustomPressableComponet';

const FavoritetItemCard = React.memo(props => {
  const {productImage, productName, productPrice, mallImg, link} = props;

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
    <View>
      <Image source={{uri: `https:${productImage}`}} />
      {/* 상품 설명*/}
      <View>
        <Text>{productName}</Text>
        <Image source={{uri: `https:${mallImg}`}} />
        <Text>{productPrice}</Text>
      </View>
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
  );
});

export default FavoritetItemCard;
export {FavoritetItemCard};
