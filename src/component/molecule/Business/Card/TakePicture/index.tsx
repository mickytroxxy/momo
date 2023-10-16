import { View, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, Icon, Text } from '@atom'
import Card from '@/component/molecule/Card/Card'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { fontFamily } from '@/style/theme'
import { globalBlack, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
const {width} = Dimensions.get('screen')
const TakePicture = () => {
  return (
    <Box bg={'extraLightGrey'} style={{padding:24}}>
      <Card style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View><Icon name='BusinessCamera' size={68} fill={globalMoMoBlue}/></View>
          <Text style={styles.titleValue}>Click here to open your camera and capture a photo of your business</Text>
          <Text style={styles.title}>Take a Picture</Text>
        </View>
      </Card>
    </Box>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: gpsw('16'),
      backgroundColor: globalWhite,
      borderRadius: gpsw('20'),
      borderWidth:0.8,
      borderStyle:'dashed',
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
      fontFamily: fontFamily('Regular'),
      fontSize: gpsw('12'),
      letterSpacing: -0.5,
      color: "#888",
      marginTop:6,
      textAlign:'center'
    }
  });
export default TakePicture