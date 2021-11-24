import React, {useContext, useState} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import {AuthContext} from '../store/AuthStore';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signUp} = useContext(AuthContext);
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign Up"
        onPress={() => {
          signUp({username, password});
        }}
      />
    </View>
  );
};

export default SignUp;
