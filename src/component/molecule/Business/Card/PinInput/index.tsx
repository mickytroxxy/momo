import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Header, TopHeaderContent } from '@molecule';
import { moderateScale } from 'react-native-size-matters';
import { globalMoMoBlue, globalSunshineYellow, globalWhite } from '@/style-dictionary-dist/momoStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Icon, Text } from '@atom';
import { gpmsw, gpsh, gpsw } from '@/utils/parseTokenStyle';
import { BusinessTextInput } from '../../BusinessTextInput';
import { fontFamily } from '@/style/theme';
const PinInput = () => {
  const [pin,setPin] = useState<number>();
  const [errorInfo,setErrorInfo] = useState({status:false,message:"Incorrect PIN"})
  return (
    <View style={{padding:24}}>
      <Card style={styles.container}>
        <BusinessTextInput 
          placeholder={'PIN '}
          required={true} 
          errorInfo={errorInfo}
          onChangeText={(value) => setPin(value)} 
          isPassword
        />
        <View style={{alignItems:'flex-start',paddingVertical:gpsh('16')}}><Text fontFamily={fontFamily('Regular')} fontSize={gpsh('12')} style={{color:globalMoMoBlue}}>Forgot PIN</Text></View>
      </Card>
      <View style={{marginTop:30}}>
      <Button bStyle={{borderWidth:1}} onPress={() => setErrorInfo({...errorInfo,status:!errorInfo.status})} label={errorInfo.status ? 'Remove Error' : 'Trigger Error'} size='small' variant="secondary" />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:gpsh('16'),
    paddingHorizontal: gpsw('16'),
    backgroundColor: globalWhite,
    borderRadius: gpsw('20'),
    elevation:30
  },
  title: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsh('22'),
    letterSpacing: -0.5,
    color: globalMoMoBlue,
    marginTop:12
  },
  titleValue: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    letterSpacing: -0.5,
    color: "#888",
    marginTop:6
  }
});
export default PinInput