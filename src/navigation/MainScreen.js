import React, {useContext, useState} from 'react';
import {Text, Button, View} from 'react-native';

import ExploreScreen from './ExploreScreen';
import SearchScreen from './SearchScreen';
import DealsListScreen from './DealsListScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="DealsListScreen" component={DealsListScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;