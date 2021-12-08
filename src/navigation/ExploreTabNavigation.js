/*import React*/
import React, {useReducer, useMemo, useEffect} from 'react';
/*import navigation create module*/
import {createStackNavigator} from '@react-navigation/stack';
/*import screen component*/
import ExploreTab from '../screen/ExploreTabScreen';
import DiscountDetail from '../screen/DiscountDetailScreen';
import {ProductProvider} from '../store/productStore';
/*스택 네비게이션 생성*/
const Stack = createStackNavigator();

/*탐색 탭의 네비게이션 구성*/
const ExploreTabNavigation = () => {
  return (
    <ProductProvider>
      <Stack.Navigator
        initialRouteName="ExploreTab"
        screenOptions={{headerShown: false}}>
        {/* discount list screen */}
        <Stack.Screen name="ExploreTab" component={ExploreTab} />
        {/* discount detail screen */}
        {/* <Stack.Screen
          name="DiscountDetail"
          component={DiscountDetail}
          screenOptions={{headerMode: 'none'}}
        /> */}
      </Stack.Navigator>
    </ProductProvider>
  );
};

export default ExploreTabNavigation;
