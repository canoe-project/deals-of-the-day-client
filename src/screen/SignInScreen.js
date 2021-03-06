/*import react componet*/
import React, {useContext, useState, useEffect} from 'react';
import {
  ImageBackground,
  Button,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';

/*import store*/
import {AuthDispatch} from '../store/AuthStore';

/*import component*/
import {TextPressable} from '../components/CustomPressableComponet';

/*import Sytle*/
import {
  containerStyle,
  textStyle,
  loginComponentStyle,
  imageStyle,
} from '../styles/SignInScreenStyle';

/*import image source*/
import BackGroundImage from '../assets/image/SignInScrean/Sign_In_Screen_BackGround.png';
import FacebookIcon from '../assets/icon/SNS_Icons/Facebook_Icon.svg';
import KakaotalkIcon from '../assets/icon/SNS_Icons/kakaotalk_Icon.svg';
import NaverIcon from '../assets/icon/SNS_Icons/Naver_Icon.svg';
import TwitterIcon from '../assets/icon/SNS_Icons/Twitter_Icon.svg';

const SignInScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setemail('test2@test.com');
    setPassword('test_pw2');
  }, []);
  const {signIn} = useContext(AuthDispatch);

  return (
    <ScrollView style={containerStyle.container}>
      <View style={containerStyle.backGroundContainer}>
        <ImageBackground
          style={imageStyle.backGround}
          source={BackGroundImage}
          resizeMode="cover">
          <View style={containerStyle.titleContainer}>
            <View style={containerStyle.mainTitleContainer}>
              <Text style={textStyle.title}>DEALS OF</Text>
              <Text style={[textStyle.title, {paddingLeft: 50}]}>THE DAY</Text>
            </View>
            <View style={containerStyle.subtitleContainer}>
              <Text style={textStyle.subTitleBold}>물건</Text>
              <Text style={[textStyle.subTitle, {paddingLeft: 3}]}>
                을 구매하는 가장 효율적인 방법
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={containerStyle.loginContainer}>
        <Text style={textStyle.loginTitle}>로그인</Text>
        <TextInput
          style={loginComponentStyle.input}
          placeholder="EMAIL ADDRESS"
          value={email}
          onChangeText={setemail}
        />
        <TextInput
          style={loginComponentStyle.input}
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={textStyle.forgetPassword}>비밀번호를 잃어버렸나요?</Text>
        <TextPressable
          textStyle={loginComponentStyle.buttonText}
          buttonStyle={loginComponentStyle.button}
          title="Login"
          onPress={() => {
            signIn({email, password});
          }}
        />
        <TextPressable
          textStyle={[loginComponentStyle.buttonText, {color: '#6f7f89'}]}
          buttonStyle={[
            loginComponentStyle.button,
            {backgroundColor: '#ffffff'},
          ]}
          title="Sign Up"
        />
        <View style={{flexDirection: 'column', marginTop: 70}}>
          <Text style={[textStyle.snsLogin]}>SNS 로그인</Text>
          <View style={containerStyle.snsContainer}>
            <FacebookIcon style={loginComponentStyle.snsIcon} />
            <TwitterIcon style={loginComponentStyle.snsIcon} />
            <NaverIcon style={loginComponentStyle.snsIcon} />
            <KakaotalkIcon style={loginComponentStyle.snsIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
