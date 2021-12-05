import React, {useReducer, useMemo, useEffect} from 'react';
/*import navigation create module*/
import {createStackNavigator} from '@react-navigation/stack';
/*import screen component*/
import NewsTab from '../screen/NewsTabScreen';
import DiscountDetail from '../screen/DiscountDetailScreen';

/*스택 네비게이션 생성*/
const Stack = createStackNavigator();

/*탐색 탭의 네비게이션 구성*/
const NewsTabNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* discount list screen */}
      <Stack.Screen name="NewsTab" component={NewsTab} />
      {/* discount detail screen */}
      <Stack.Screen name="DiscountDetail" component={DiscountDetail} />
    </Stack.Navigator>
  );
};

export default NewsTabNavigation;
