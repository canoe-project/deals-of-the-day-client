/*import react component*/
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/*import screen*/
import ExploreScreen from './ExploreScreen';
import SearchScreen from './SearchScreen';
import DealsListScreen from './DealsListScreen';

/*import Inactive Icon */
import ExploreScreenIcon from '../assets/icon/bottom_Menu_Icons/ExploreScreen_Icon.svg';
import SearchScreenIcon from '../assets/icon/bottom_Menu_Icons/SearchScreen_Icon.svg';
import DealsListScreenIcon from '../assets/icon/bottom_Menu_Icons/DealsListScreen_Icon.svg';
/*import Active Icon*/
import ExploreScreenActiveIcon from '../assets/icon/bottom_Menu_Icons/ExploreScreen_ActiveIcon.svg';
import SearchScreenActiveIcon from '../assets/icon/bottom_Menu_Icons/SearchScreen_ActiveIcon.svg';
import DealsListScreenActiveIcon from '../assets/icon/bottom_Menu_Icons/DealsListScreen_ActiveIcon.svg';

import Header from '../components/Header';
import {tabBarStyle} from '../styles/TabBarStyle';
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      /*이동하는 스크린의 이름을 확인하고 각 상태에 맞는 탭 아이콘으로 그립니다.*/
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          if (route.name === 'ExploreScreen') {
            return focused ? (
              <ExploreScreenActiveIcon />
            ) : (
              <ExploreScreenIcon />
            );
          } else if (route.name === 'SearchScreen') {
            return focused ? <SearchScreenActiveIcon /> : <SearchScreenIcon />;
          } else if (route.name === 'DealsListScreen') {
            return focused ? (
              <DealsListScreenActiveIcon />
            ) : (
              <DealsListScreenIcon />
            );
          }
        },
        tabBarStyle: tabBarStyle.container,
      })}>
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={Header}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DealsListScreen"
        component={DealsListScreen}
        options={Header}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
