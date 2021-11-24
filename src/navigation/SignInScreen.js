/*import react componet*/
import React, {useContext, useState} from 'react';
import {ImageBackground, Button, Text, View, TextInput} from 'react-native';

/*import store*/
import {AuthContext} from '../store/AuthStore';

/*import component*/
import SignButton from '../components/SingButtonComponet';

/*import Sytle*/
import {container, text, loginComponent, image} from '../styles/SignInScreen';

/*import image source*/
import BackGroundImage from '../assets/image/SignInScrean/Sign_In_Screen_BackGround.png';
import FacebookIcon from '../assets/icon/SNS_Icons/Facebook_Icon.svg';
import KakaotalkIcon from '../assets/icon/SNS_Icons/kakaotalk_Icon.svg';
import NaverIcon from '../assets/icon/SNS_Icons/Naver_Icon.svg';
import TwitterIcon from '../assets/icon/SNS_Icons/Twitter_Icon.svg';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  return (
    <View style={container.container}>
      <View style={container.backGroundContainer}>
        <ImageBackground
          style={image.backGround}
          source={BackGroundImage}
          resizeMode="cover">
          <View style={container.titleContainer}>
            <View style={container.mainTitleContainer}>
              <Text style={text.title}>DEALS OF</Text>
              <Text style={[text.title, {paddingLeft: 50}]}>THE DAY</Text>
            </View>
            <View style={container.subtitleContainer}>
              <Text style={text.subTitleBold}>물건</Text>
              <Text style={[text.subTitle, {paddingLeft: 3}]}>
                을 구매하는 가장 효율적인 방법
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={container.loginContainer}>
        <Text style={text.loginTitle}>로그인</Text>
        <TextInput
          style={loginComponent.input}
          placeholder="EMAIL ADDRESS"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={loginComponent.input}
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={text.forgetPassword}>비밀번호를 잃어버렸나요?</Text>
        <SignButton
          textStyle={loginComponent.buttonText}
          buttonStyle={loginComponent.button}
          title="Login"
          onPress={() => signIn({username, password})}
        />
        <SignButton
          textStyle={[loginComponent.buttonText, {color: '#6f7f89'}]}
          buttonStyle={[loginComponent.button, {backgroundColor: '#ffffff'}]}
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
        <View style={{flexDirection: 'column', marginTop: 70}}>
          <Text style={[text.snsLogin]}>SNS 로그인</Text>
          <View style={container.snsContainer}>
            <FacebookIcon style={loginComponent.snsIcon} />
            <TwitterIcon style={loginComponent.snsIcon} />
            <NaverIcon style={loginComponent.snsIcon} />
            <KakaotalkIcon style={loginComponent.snsIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
