import React, {useCallback} from 'react';
import {View, Pressable, Image, Text, Share} from 'react-native';
import {containerStyle, buttonStyle} from '../styles/ItemCardStyle';

import discount_Icon from '../assets/icon/Exprore_Icons/discount_Icon.png';
import Share_Icon from '../assets/icon/Exprore_Icons/share_Icon.png';
import discount_ActiveIcon from '../assets/icon/Exprore_Icons/discount_ActiveIcon.png';

import {ImagePressable} from './CustomPressableComponet';

const ShopItem = props => {
  const {mallImg, price, link} = props;

  const onShare = async () => {
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
  }

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
        />
      </View>
    </View>
  );
};

export default ShopItem;
export {ShopItem};
