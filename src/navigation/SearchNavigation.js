import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importing screen
import { BarcodeSplash, BarcodeScan, BarcodeResult, SearchResult } from '../screen/SearchIndex'
import HeaderClassicSearchBar from '../components/HeaderClassicSearchBar';

//making root stack variable
const SearchStack = createStackNavigator();

function SearchNavigation(){
    /*이동하는 스크린의 이름을 확인하고 각 상태에 맞는 탭 아이콘으로 그립니다.*/
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