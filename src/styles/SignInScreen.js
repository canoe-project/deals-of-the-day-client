import {StyleSheet, PixelRatio} from 'react-native';

const styles = StyleSheet.create({});

const color = {
  darkGreen: '#0D3741',
  orange: '#EF840F',
  whiteGray: '#6f7f89',
  gray: '#7c7c7c',
};

const container = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  backGroundContainer: {
    flex: 0.43,
  },
  loginContainer: {
    flex: 0.57,
    marginLeft: '13%',
    marginRight: '13%',
  },
  titleContainer: {
    position: 'relative',
    top: 94,
    left: 24,
  },
  mainTitleContainer: {
    paddingLeft: 9,
    borderLeftWidth: 5,
    borderLeftColor: color.darkGreen,
    marginBottom: 25,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  snsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: color.gray,
    paddingTop: 11,
    marginTop: '2%',
    // borderWidth: 1,
  },
});
const text = StyleSheet.create({
  title: {
    fontFamily: 'BernardMTCondensed',
    color: color.darkGreen,
    fontSize: 41,
  },
  subTitleBold: {
    fontFamily: 'NanumSquareOTF_acB',
    fontSize: 17,
    color: color.darkGreen,
  },
  subTitle: {
    fontFamily: 'NanumSquareOTF_acR',
    fontSize: 11,
    color: color.darkGreen,
  },
  loginTitle: {
    fontFamily: 'NanumSquareOTF_acEB',
    fontSize: 25,
    color: color.orange,
  },
  forgetPassword: {
    fontFamily: 'NanumSquareOTF_acR',
    alignSelf: 'center',
    marginTop: '2%',
    fontSize: 9,
    borderBottomColor: color.gray,
    borderBottomWidth: 1,
  },
  snsLogin: {
    fontFamily: 'NanumSquareOTF_acR',
    alignSelf: 'center',
    fontSize: 9,
    borderBottomColor: color.gray,
  },
});

const loginComponent = StyleSheet.create({
  input: {
    height: 24,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 6,
    marginTop: 20,
    fontSize: 12,
    color: color.gray,
    borderWidth: 1,
    borderColor: color.whiteGray,
    justifyContent: 'center',
    fontFamily: 'Raleway-Regular',
  },
  button: {
    marginTop: 20,
    height: 24,
    backgroundColor: color.orange,
    borderWidth: 1,
    borderColor: color.orange,
  },
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 12,
  },
  snsIcon: {
    height: 25,
    flex: 1,
    // borderWidth: 1,
  },
});

const image = StyleSheet.create({
  backGround: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
export {container, text, loginComponent, image};
