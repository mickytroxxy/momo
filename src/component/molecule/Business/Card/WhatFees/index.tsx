import { View, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Icon, Text } from '@atom'
import Card from '@/component/molecule/Card/Card'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { fontFamily } from '@/style/theme'
import { globalBlack, globalGrey, globalWhite } from '@/style-dictionary-dist/momoStyle'
import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator'
const {width} = Dimensions.get('screen')
const WhatFees = () => {
    
    return (
        <View style={{paddingVertical:24}}>
            <Card style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center'}}><Text style={styles.title}>What Fees?</Text></View>
                    <View style={{justifyContent:'center'}}><Icon size={gpsh('20')} name='CloseCircleIcon' /></View>
                </View>
                <View style={{paddingVertical:gpsh('12')}}><HorizontalCardSeparator w={1}/></View>
                <View><Text style={styles.titleValue}>The Electronic Transfer Levy Act, 2022 (Act 1075)  imposes a levy of 1% on electronic transfers effective from 01 May 2022. The levy is charged to the sender of on an electronic transfer, at the time of the transfer.</Text></View>
            </Card>
        </View>
    )
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
      fontFamily: fontFamily('Medium'),
      fontSize: gpsh('14'),
      letterSpacing: -0.5,
      color: globalBlack,
    },
    titleValue: {
      fontFamily: fontFamily('Light'),
      fontSize: gpsw('12'),
      letterSpacing: -0.5,
      color: "#888",
    }
  });
export default WhatFees