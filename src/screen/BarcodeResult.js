import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

function BarcodeResult({navigation, route}){

    const {code} = route.params;

    // scan screen again 으로 다시 돌아감
    function _onScanAgainClick(){
        navigation.reset({
            index: 0,
            routes: [{ name: 'scan' }],
        });
    }

    // 검색화면으로 다시 돌아감
    function _CancelClick(){
        navigation.reset({
            index : 0,
            routes: [{ name: 'headerclassicsearchbar' }],
        });
    }

    return(
        <View style={Styles._mainContainer}>
            <Text style={Styles._heading}>Results</Text>
            <Text style={Styles._txtStyle}>Barcode Type: {code.type}</Text>
            <Text style={Styles._txtStyle}>Barcode Data: {code.data}</Text>
            <TouchableOpacity
                onPress={_onScanAgainClick}
                style={Styles._btn}>
                <Text style={{color: 'white'}}>Scan Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={_CancelClick}
                style={Styles._btn}>
                <Text style={{color: 'white'}}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    _heading:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30
    },
    _txtStyle:{
        fontSize: 18,
        color: 'black'
    },
    _btn:{
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 30
    },
});

export default BarcodeResult;