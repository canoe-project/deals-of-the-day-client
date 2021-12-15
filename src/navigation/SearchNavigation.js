import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importing screen
import { BarcodeSplash, BarcodeScan, BarcodeResult, SearchResult } from '../screen/SearchIndex'
import HeaderClassicSearchBar from '../components/HeaderClassicSearchBar';

//making root stack variable
const SearchStack = createStackNavigator();

function SearchNavigation(){
    /*�̵��ϴ� ��ũ���� �̸��� Ȯ���ϰ� �� ���¿� �´� �� ���������� �׸��ϴ�.*/
    return(
            <SearchStack.Navigator
                initialRouteName='headerclassicsearchbar'
                screenOptions={{headerShown: false}}
                >
                <SearchStack.Screen
                    name='headerclassicsearchbar'
                    component={HeaderClassicSearchBar}
                />
                <SearchStack.Screen
                    name='searchresult'
                    component={SearchResult}
                />
                <SearchStack.Screen
                    name='splash'
                    component={BarcodeSplash}
                />
                <SearchStack.Screen
                    name='scan'
                    component={BarcodeScan}
                />
                <SearchStack.Screen
                    name='result'
                    component={BarcodeResult}
                />
            </SearchStack.Navigator>
    );
}

export default SearchNavigation;