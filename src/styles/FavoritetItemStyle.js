import {StyleSheet, PixelRatio, Dimensions} from 'react-native';

const totalWidth = Dimensions.get('screen').width;
import color from './color';

const containerStyle = StyleSheet.create({
  itemContainer: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#ffffff',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginRight: 12,
  },
});

const textStyle = StyleSheet.create({
  commonText: {
    fontSize: 15,
    fontFamily: 'NanumSquareOTF_acB',
  },
});

const imageStyle = StyleSheet.create({
  commonImage: {height: 25, width: 50, marginLeft: 12},
});

export default containerStyle;
export {containerStyle, textStyle, imageStyle};
