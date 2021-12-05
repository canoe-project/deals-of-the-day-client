/*import React*/
import React, {useReducer, useMemo, useEffect} from 'react';
/*import navigation create module*/
import {createStackNavigator} from '@react-navigation/stack';
/*import screen component*/
import ExploreTab from '../screen/ExploreTabScreen';
import DiscountDetail from '../screen/DiscountDetailScreen';

/*스택 네비게이션 생성*/
const Stack = createStackNavigator();

/*탐색 탭의 네비게이션 구성*/
const ExploreTabNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExploreTab"
      screenOptions={{headerShown: false}}>
      {/* discount list screen */}
      <Stack.Screen name="ExploreTab" component={ExploreTab} />
      {/* discount detail screen */}
      <Stack.Screen name="DiscountDetail" component={DiscountDetail} />
    </Stack.Navigator>
  );
};

export default ExploreTabNavigation;
