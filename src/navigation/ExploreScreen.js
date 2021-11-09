import React, {useContext, useState} from 'react';
import {Text, Button, View} from 'react-native';
import {AuthContext} from '../store/AuthStore';

const ExploreScreen = () => {
  const {signOut} = useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

export default ExploreScreen;
