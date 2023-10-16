import { View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { gpsh } from '@/utils/parseTokenStyle'
import { Box, Text } from '@atom'
import { fontFamily } from '@/style/theme'
const {width,height} = Dimensions.get('screen')
const ImageBanners = () => {
  return (
    <Box bg={'extraLightGrey'} style={{width:'100%'}}>
      <View>
        <ImageBackground source={require('../../../../../assets/illustrations/Banner.png')} resizeMode='contain' style={{height:160,width:width,justifyContent:'center'}}>
          <View style={{marginLeft:148,paddingRight:80}}><Text style={{fontFamily:fontFamily('Medium'),marginBottom:15,color:'#525252',fontSize:gpsh('10')}}>Enjoy the convenience of managing your finances in one place.</Text></View>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground source={require('../../../../../assets/illustrations/Banner.png')} resizeMode='contain' style={{height:160,width:width,justifyContent:'center'}}>
          <View style={{marginLeft:148,paddingRight:30}}><Text style={{fontFamily:fontFamily('Medium'),marginBottom:15,color:'#525252',fontSize:gpsh('10')}}>Transfer money between your MoMo wallets and bank accounts with instant and reliable transfers.</Text></View>
        </ImageBackground>
      </View>

      <View>
        <ImageBackground source={require('../../../../../assets/illustrations/Banner_02.png')} resizeMode='contain' style={{height:160,width:width,justifyContent:'center'}}>
          <View style={{marginLeft:148,paddingRight:60}}><Text style={{fontFamily:fontFamily('Medium'),marginBottom:15,color:'#525252',fontSize:gpsh('10')}}>Make bill payments for yourself or on behalf of your valued customers.</Text></View>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground source={require('../../../../../assets/illustrations/Banner_02.png')} resizeMode='contain' style={{height:160,width:width,justifyContent:'center'}}>
          <View style={{marginLeft:148,paddingRight:30}}><Text style={{fontFamily:fontFamily('Medium'),marginBottom:15,color:'#525252',fontSize:gpsh('10')}}>Say goodbye to the hassle of multiple platforms. MoMo brings all your bill payments to a single place.</Text></View>
        </ImageBackground>
      </View>
    </Box>
  )
}

export default ImageBanners