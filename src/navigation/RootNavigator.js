import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing screen
import { Splash, Scan, Result } from '../screen'
import HeaderClassicSearchBar from '../components/HeaderClassicSearchBar';

//making root stack variable
const RootStack = createStackNavigator();

function RootNavigator(){
    return(
            <RootStack.Navigator
                initialRouteName='headerclassicsearchbar'
                screenOptions={{headerShown: false}}
                >
                <RootStack.Screen
                    name='headerclassicsearchbar'
                    component={HeaderClassicSearchBar}
                />
                <RootStack.Screen
                    name='splash'
                    component={Splash}
                />
                <RootStack.Screen
                    name='scan'
                    component={Scan}
                />
                <RootStack.Screen
                    name='result'
                    component={Result}
                />
            </RootStack.Navigator>
    );
}

export default RootNavigator;