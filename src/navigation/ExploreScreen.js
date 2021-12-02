import React, {useContext, useState, useEffect} from 'react';

import ExploreTabScreen from './ExploreTabScreen';
import NewsTabScreen from './NewsTabScreen';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const totalWidth = Dimensions.get('screen').width;
const ExploreScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {elevation: 0},
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: '#7C7C7C',
        tabBarIndicatorStyle: {
          backgroundColor: '#FF7898',
          width: totalWidth / 4,
          left: totalWidth / 8,
        },
      }}>
      <Tab.Screen name="Explore" component={ExploreTabScreen} />
      <Tab.Screen name="News" component={NewsTabScreen} />
    </Tab.Navigator>
  );
};

export default ExploreScreen;

/*참조 자료
https://velog.io/@7p3m1k/react-native-%ED%83%9C%EA%B7%B8-ScrollView-FlatList
커스텀 탭바
https://maruzzing.github.io/study/rnative/React-Native-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%83%AD-%EB%B0%94-%EB%84%A4%EB%B9%84%EC%BC%80%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0/
*/
