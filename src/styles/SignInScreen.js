import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

const color = {
  darkGreen: '#0D3741',
  orange: '#EF840F',
};

const container = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
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
    top: '14%',
    left: '6.2%',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const text = StyleSheet.create({
  title: {
    fontFamily: 'BernardMTCondensed',
    color: color.darkGreen,
    fontSize: 60,
  },
  subTitleBold: {
    fontFamily: 'NanumSquareOTF_acB',
    fontSize: 28,
    color: color.darkGreen,
  },
  subTitle: {
    fontFamily: 'NanumSquareOTF_acR',
    fontSize: 18,
    color: color.darkGreen,
  },
  loginTitle: {
    fontFamily: 'Raleway-Bold',
    fontSize: 32,
    color: color.orange,
  },
  forgetPassword: {
    alignSelf: 'center',
    marginTop: '2%',
  },
});

const loginComponent = StyleSheet.create({
  input: {
    marginTop: '2.9%',
    borderWidth: 1,
    borderColor: color.darkGreen,
    height: '6%',
  },
  button: {
    marginTop: '4.4%',
    height: '7%',
    backgroundColor: color.orange,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
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
