import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from '@/component/molecule/Card/Card'
import { Box, Icon, Text } from '@atom'
import { fontFamily } from '@/style/theme'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { globalBlack, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator'
const {width,height} = Dimensions.get('window')
const Elevypopup = () => {
  const [showPinModal,setShowPinModal] = useState(false)
  const data = {
    "Amount":"GHc 950.00",
    "Fees":"GHc 9.50"
  }
  return (
    <View style={{}}>
      <Card style={{height:gpsh('165'),borderRadius:gpsh('15'),paddingHorizontal:gpsw('24'),paddingVertical:gpsh('28'),borderWidth:2,borderColor:'rgba(232, 232, 232, 0.50)'}}>
          <Box style={{position:'absolute',right:12,top:12}}><TouchableOpacity onPress={() => setShowPinModal(!showPinModal)}><Icon size={24} name='CloseCircleIcon' /></TouchableOpacity></Box>
          <View style={{marginTop:-18}}>
            <Text style={styles.MainTitle}>Cost Breakdown</Text>
            <View style={{}}><HorizontalCardSeparator w={1} /></View>
            {Object.entries(data).map(([key, value]) => (
              <View key={key} style={styles.row}>
                <Text style={styles.title}>{key}</Text>
                <Text style={styles.titleValue}>{value}</Text>
              </View>
            ))}
            <View  style={[styles.row,{marginTop:20}]}>
              <Text lineHeight={18} style={styles.total}>Total</Text>
              <Text lineHeight={18} style={styles.totalValue} fontFamily={fontFamily('Bold')}>GHc 959.50</Text>
            </View>
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
export default Elevypopup