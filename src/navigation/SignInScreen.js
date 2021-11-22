/*react componet*/
import React, {useContext, useState} from 'react';
import {ImageBackground, Button, Text, View, TextInput} from 'react-native';

/*store import*/
import {AuthContext} from '../store/AuthStore';

/*component import*/
import SignButton from '../components/SingButtonComponet';

/*Sytle import*/
import {container, text, loginComponent, image} from '../styles/SignInScreen';

/*image source import*/
import BackGroundImage from '../assets/image/SignInScrean/Sign_In_Screen_BackGround.png';

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
            <Text style={text.title}>Deal Of</Text>
            <Text style={text.title}>The Day</Text>
            <View style={container.subtitleContainer}>
              <Text style={text.subTitleBold}>물건</Text>
              <Text style={text.subTitle}>을 구매하는 가장 효율적인 방법</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={container.loginContainer}>
        <Text style={text.loginTitle}>Login</Text>
        <TextInput
          style={loginComponent.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={loginComponent.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={text.forgetPassword}>Forget Password?</Text>
        <SignButton
          textStyle={loginComponent.buttonText}
          buttonStyle={loginComponent.button}
          title="Login"
          onPress={() => signIn({username, password})}
        />
        <SignButton
          textStyle={loginComponent.buttonText}
          buttonStyle={loginComponent.button}
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Text>Or Sign Up Using</Text>
      </View>
    </View>
  );
};

export default SignInScreen;
