import React from 'react';
import {Text, StyleSheet, Pressable, Image} from 'react-native';

const TextPressable = props => {
  const {onPress, title, textStyle, buttonStyle} = props;
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};
const ImagePressable = props => {
  const {onPress, image, imageStyle, buttonStyle} = props;
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Image source={image} style={imageStyle}></Image>
    </Pressable>
  );
};
export default TextPressable;
export {TextPressable, ImagePressable};
