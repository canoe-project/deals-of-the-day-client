import React, {useState} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

function BarcodeScan({navigation}){

    //variables initialization
    const [camRef, setCamRef] = useState(null);

    //scan 성공하면 result 화면으로 감
    function _onBarcodeScanned(code){
        navigation.reset({
            index: 0,
            routes: [{ name: 'result', params:{'code': code} }],
        });
    }

    return(
        <View style={Styles._mainContainer}>
            <RNCamera
                ref={ref => setCamRef(ref)}
                style={Styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                autoFocus='on'
                onBarCodeRead={_onBarcodeScanned}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    preview: {
        flex: 1,
    },
});

export default BarcodeScan;