import {StyleSheet, PixelRatio, Dimensions} from 'react-native';

const totalWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({});

const containerStyle = StyleSheet.create({
  container: {
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
  detailcontainer: {
    bottom: 8,
    position: 'relative',
    borderRadius: 8,
    zIndex: 1,
    backgroundColor: '#ffffff',
  },
  shopListContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
  },
  shopItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 8,
    marginRight: 18,
    marginLeft: 18,
  },

  FavoritetItemContainer: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
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
    height: (totalWidth * 9) / 16,
    width: '100%',
    borderRadius: 4,
  },
});

const buttonStyle = StyleSheet.create({
  defaultButtton: {
    height: 25,
    width: 25,
    marginLeft: 8,
    alignSelf: 'flex-end',
  },
});

export default styles;
export {containerStyle, textStyle, iconsStyle, imageStyle, buttonStyle};
