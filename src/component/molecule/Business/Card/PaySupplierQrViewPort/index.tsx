import { View, Dimensions, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera'
import { Box, Button, SafeAreaContainer, Text } from '@atom'
import { SafeAreaView } from 'react-native-safe-area-context'
import Tab from '@/component/molecule/Tab/Tab'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { globalBlack, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
//import {useScanBarcodes, BarcodeFormat, scanBarcodes} from 'vision-camera-code-scanner';
import { fontFamily } from '@/style/theme'
const {width} = Dimensions.get('screen')
//"react-native-reanimated": "^3.4.1",
const tabData = [
    {
      title: 'Manual Payment',
      renderScene: () => <View style={{padding:gpsh('24')}}><Text>Manual payment</Text></View>,
    },
    {
      title: 'Scan QR Code',
      renderScene: () => <TabScene type='Scan QR Code' />,
    }
];
const TabScene = ({type}:{type:string}) => {
    const [cameraPermission, setCameraPermission] = useState<any>();
    const devices = useCameraDevices('wide-angle-camera')
    const cameraDevice = devices.back;
    const [detectedCode,setDetectedCode] = useState('')
    // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    //     checkInverted: true,
    // });
    // const frameProcessor = useFrameProcessor(frame =>{
    //     'worklet';
    //     const detectedBarcodes =   scanBarcodes(frame,[BarcodeFormat.QR_CODE]);
    //     const barcodeStr = detectedBarcodes.map(barcode => barcode.displayValue).join('');
    //     console.log('Barcodes', barcodeStr);
    //     setDetectedCode(barcodeStr)
    // },[])
    useEffect(() => {
        (async() => {
            const cameraPermissionStatus = await Camera.requestCameraPermission();
            setCameraPermission(cameraPermissionStatus);
        })()
    },[])
    return(
       <View>
            <ScrollView style={{flex:1,padding:gpsh('24')}}>
                <View style={{flex:1,justifyContent:'center'}}><Text style={styles.title}>Scan QR Code of Supplier</Text></View>
                {/* {detectedCode !== "" && <View style={{flex:1,justifyContent:'center'}}><Text style={styles.titleValue}>{detectedCode}</Text></View>} */}
                {/* {barcodes?.map((barcode, idx) => (
                    <View key={idx} style={{flex:1,justifyContent:'center'}}><Text style={styles.titleValue}>{barcode.displayValue}</Text></View>
                ))} */}
                {cameraDevice && cameraPermission === 'authorized' && 
                    <View style={{width:'100%',justifyContent:'center',overflow:'hidden',borderStyle: 'dashed',borderWidth:1,aspectRatio:1,flex:1,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:gpsh('20'),marginTop:gpsh('24')}}>
                        <Camera
                            style={{width:'100%',aspectRatio:1,borderRadius:gpsh('20')}}
                            device={cameraDevice}
                            isActive={true}
                            // frameProcessor={frameProcessor}
                            // frameProcessorFps={5}
                        />
                    </View>
                }
                {!cameraDevice && cameraPermission === 'authorized' && 
                    <View style={{width:'100%',justifyContent:'center',borderStyle: 'dashed',borderWidth:1,aspectRatio:1,flex:1,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:gpsh('20'),marginTop:gpsh('24')}}>
                        <ActivityIndicator size="large" color="#1C6758" />
                    </View>
                }
                <View style={{marginTop:gpsh('24')}}><Text style={styles.titleValue}>The QR Code will be automatically detected when you position it between the guide lines.</Text></View>
            </ScrollView>
            <View style={{padding:gpsh('24')}}>
                <Button bStyle={{borderWidth:1}} label="Scan QR Code" variant="primary" />
            </View>
       </View>
    )
}
const PaySupplierQrViewPort = () => {
    return (
        <View style={{flex:1}}>
            <View>
                <Tab mH={24} tabData={tabData} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: gpsw('24'),
      paddingVertical:gpsh('16'),
      backgroundColor: globalWhite,
      borderRadius: gpsw('15')
    },
    title: {
      fontFamily: fontFamily('Bold'),
      fontSize: gpsh('18'),
      letterSpacing: -0.5,
      lineHeight:gpsh('24'),
      color: globalMoMoBlue,
      textAlign:'center'
    },
    titleValue: {
      fontFamily: fontFamily('Regular'),
      fontSize: gpsh('13'),
      letterSpacing: -0.5,
      color: "#525252",
      textAlign:'center'
      //textAlign:'center'
    }
  });
export default PaySupplierQrViewPort