import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

function TopTabBar({state, descriptors, navigation, position}) {
  return (
    <View style={{flexDirection: 'row', paddingTop: 20}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TopTabBar;

/*
https://reactnavigation.org/docs/material-top-tab-navigator/
*/