import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function SignButton(props) {
  const {onPress, title = 'Save', textStyle, buttonStyle} = props;
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
