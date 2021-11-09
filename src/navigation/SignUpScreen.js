import React from 'react';
import {Text, Button, View} from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <View>
      <Text>Test</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default SignUp;
