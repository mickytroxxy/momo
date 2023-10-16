import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from '@/component/molecule/Card/Card'
import { Box, Button, Icon, Text } from '@atom'
import { fontFamily } from '@/style/theme'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { globalBlack, globalExtraLightGrey, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator'
const {width,height} = Dimensions.get('window')
const ManageAccountCard = () => {
  return (
    <View style={{padding:gpsh('12')}}>
      <Card style={{borderRadius:gpsh('15'),padding:gpsw('24'),borderWidth:2,borderColor:'rgba(232, 232, 232, 0.50)'}}>
        <View>
            <Text style={styles.titleValue}>Pay Account 2 to Main Account</Text>
            <Text style={styles.titleValue2}>Monthly | 25/05/2023 - 25/05/2023</Text>
            <Text style={styles.titleValue3}>Amount: GHc 350</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:gpsh('24'),width:'100%',justifyContent:'flex-end'}}>
            <Button
                bStyle={{alignItems:'center',marginRight:gpsh('10')}}
                onPress={() => {}}
                label='Delete'
                variant='secondary'
                size="small"
            />
            <Button
                bStyle={{alignItems:'center'}}
                onPress={() => {}}
                label='Change'
                variant='primary'
                size="small"
            />
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  MainTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('18'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('7')
  },
  MainTitle2: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('16'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('0')
  },
  SubTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: globalMoMoBlue,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
  },
  title: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    letterSpacing: -0.5,
    color: globalBlack,
  },
  titleValue: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    color: globalBlack,
    width:gpsw('208')
  },
  titleValue2: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('11'),
    color: globalBlack,
  },
  titleValue3: {
    fontFamily: fontFamily('Light'),
    fontSize: gpsw('11'),
    color: "#AFAFAF",
  },
  total: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: 'rgba(28, 27, 31, 1)',
  },
  totalValue: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: 'rgba(28, 27, 31, 1)',
    textTransform: 'uppercase',
  },
});
export default ManageAccountCard