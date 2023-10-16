import { View, Text } from 'react-native'
import React from 'react'
import { globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
import { Icon } from '@atom'
import { gpsh } from '@/utils/parseTokenStyle'
import { fontFamily } from '@/style/theme'

const YellowText = () => {
  return (
    <View style={{backgroundColor:globalMoMoBlue,justifyContent:'center',alignItems:'center',padding:gpsh('24')}}>
      <Icon size={gpsh('48')} name='MomoIcon'/>
      <View><Text style={{fontFamily:fontFamily('Bold'),fontSize:gpsh('42'),color:'#FFCB05',marginTop:gpsh('23')}}>Y’ello</Text></View>
      <View><Text style={{fontFamily:fontFamily('Bold'),fontSize:gpsh('24'),color:globalWhite,marginTop:gpsh('34')}}>MoMo User</Text></View>
      <View style={{alignItems:'center',marginTop:gpsh('2')}}>
        <Text style={{fontFamily:fontFamily('Bold'),textAlign:'center',fontSize:gpsh('14'),color:globalWhite}}>
          Y’ello
          <Text style={{fontFamily:fontFamily('Light'),fontSize:gpsh('14'),color:globalWhite}}>, we noticed that you are already a MoMo customer. Please enter your PIN below to verify your identity.</Text>
        </Text>
      </View>
    </View>
  )
}

export default YellowText