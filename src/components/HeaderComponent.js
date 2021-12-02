import React from 'react';
import {Image, Pressable} from 'react-native';
import HeaderBackGround from '../assets/image/Header/HeaderBackGround.png';
import ProfileIcon from '../assets/icon/Header_Icon/ProfileIcon.png';
import {CustomHeader} from '../styles/CustomHeaderStyle';

const Header = () => {
  return {
    headerRight: () => (
      <Image source={HeaderBackGround} style={CustomHeader.image} />
    ),
    headerLeft: () => (
      <Pressable
        style={CustomHeader.profile}
        onPress={() => {
          alert('You tapped the button!');
        }}>
        <Image source={ProfileIcon} style={CustomHeader.profile} />
      </Pressable>
    ),

    headerTitle: '',
    headerStyle: CustomHeader.container,
  };
};

export default Header;
