import {StyleSheet, PixelRatio} from 'react-native';

const styles = StyleSheet.create({});

const CustomHeader = StyleSheet.create({
  container: {
    height: 50,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  image: {
    flex: 1,
    height: 50,
    width: 189,
  },
  profile: {
    flex: 1,
    margin: 5,
  },
});

export default styles;
export {CustomHeader};
