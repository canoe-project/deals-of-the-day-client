import {StyleSheet, PixelRatio} from 'react-native';

const styles = StyleSheet.create({});

const containerStyle = StyleSheet.create({
  container: {
    height: 262,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginTop: 14,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 8,
    padding: 4,
  },
  descriptionContainer: {
    flex: 1,
    marginTop: 15,
    marginLeft: 14,
    marginRight: 14,
  },
  productDescriptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },

  discountRate: {
    backgroundColor: '#ef840f',
    height: 25,
    width: 100,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    position: 'absolute',
    top: 20,
    zIndex: 1,
  },
});

const textStyle = StyleSheet.create({
  discountRateText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Raleway-Medium',
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  productName: {
    color: '#46494c',
    fontSize: 18,
    fontFamily: 'NanumSquareOTF_acB',
  },
  productPrice: {
    color: '#606060',
    fontSize: 18,
    fontFamily: 'NanumSquareOTF_acR',
  },
  save: {
    color: '#999999',
    fontSize: 12,
    fontFamily: 'Raleway-Medium',
    margin: 4,
  },
});

const iconsStyle = StyleSheet.create({
  saveIcon: {
    height: 12,
    width: 12,
  },
});

const imageStyle = StyleSheet.create({
  productImage: {
    height: '75%',
    width: '100%',
    borderRadius: 4,
  },
});

export default styles;
export {containerStyle, textStyle, iconsStyle, imageStyle};
