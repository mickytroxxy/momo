import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from '@/component/molecule/Card/Card'
import { Box, Icon, Text } from '@atom'
import { Theme, fontFamily } from '@/style/theme'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { globalBlack, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
import QuickAction from '@/component/molecule/Card/QuickAction'
import icon from '@/constants/icon';
import { useTheme } from '@shopify/restyle'
const {RightOutlineIcon,CalenderLeftNav,AdbIIcon,FbnIcon,BankOfAfricaIcon,AbsaIcon,StanbicIcon,UbaIcon} = icon;
const BankAccountCard = () => {
    const {colors} = useTheme<Theme>();
    const bankList = [
        {bankName:'ADB',accountNumber:98878765678,balance:3338,icon:()=> <AdbIIcon/>},
        {bankName:'FBN',accountNumber:6475959505,balance:50,icon:()=> <FbnIcon/>},
        {bankName:'Bank Of Africa',accountNumber:43567887658,balance:9547,icon:()=> <BankOfAfricaIcon/>},
        {bankName:'ABSA',accountNumber:6475959505,balance:547,icon:()=> <AbsaIcon/>},
        {bankName:'Stanbic',accountNumber:6475959505,balance:0,icon:()=> <StanbicIcon/>},
        {bankName:'UBA',accountNumber:7767886678,balance:4578,icon:()=> <UbaIcon/>}
    ]
    return (
        <View style={{padding:gpsh('24')}}>
            {bankList?.map((bank,index) => 
            <Box key={index} style={{marginBottom:12}}>
              <QuickAction variant='shadow' title={bank.bankName} renderLeftIcon={()=> <bank.icon/>} renderRightIcon={() => <View style={{marginRight:gpsh('12')}}><Icon name="CircleRightIcon" size={24} /></View>} />
            </Box>
          )}
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
    fontFamily: fontFamily('Light'),
    fontSize: gpsw('12'),
    letterSpacing: -0.5,
    color: globalGrey,
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
export default BankAccountCard