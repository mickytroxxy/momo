import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Icon } from '@atom'
import { fontFamily } from '@/style/theme'
import { gpsh, gpsw } from '@/utils/parseTokenStyle'
import { globalBlack, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
import { SvgIconType } from '@/constants/icon'
const data = [
  {title:"First Name",value:'Michael',icon:'ProfileOutline'},
  {title:"Last Name",value:'Michael',icon:"ProfileOutline"},
  {title:"ID Number",value:'805648298392733',icon:"IdBookIcon"},
  {title:"Mobile Number",value:'033 123 4567',icon:"MobileOutlineIcon"}
]
const KYC = () => {
  return (
    <View style={{paddingVertical:gpsh('24'),gap:gpsh('24'),paddingHorizontal:gpsw('20')}}>
      <Text style={styles.plan}>A Little About You</Text>
      <Text style={{fontFamily:fontFamily('Regular'),textAlign:'center',color:globalGrey,fontSize:gpsh('14')}}>This is the information we have about you on our system.</Text>
      {data.map((item,i) =>
        <View key={item.title} style={styles.section}>
          <Icon fill={globalMoMoBlue} name={item.icon as SvgIconType} size={24} />
          <View>
            <Text style={styles.titleValue}>{item.title}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </View>
      )}
      <View>
        <Button
                bStyle={{alignItems:'center',marginRight:gpsh('10')}}
                onPress={() => {}}
                label='Continue'
                variant='primary'
            />
      </View>
      <View style={{marginTop:gpsh('12')}}>
        <Text style={{fontFamily:fontFamily('Regular'),textAlign:'center',color:globalGrey,fontSize:gpsh('12')}}>
          Incorrect information?  
          <Text style={{fontFamily:fontFamily('Bold'),textAlign:'center',color:globalMoMoBlue,fontSize:gpsh('12')}}> Contact Customer Care</Text>
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: gpsw('24'),
    paddingBottom: gpsw('24'),
    paddingTop: gpsw('18'),
    backgroundColor: globalWhite,
    borderRadius: gpsw('15'),
    gap: gpsh('10'),
    borderWidth:1,borderColor:'rgba(232, 232, 232, 1)'
  },
  plan: {
    fontSize: gpsw('18'),
    lineHeight: gpsh('24'),
    color: globalMoMoBlue,
    fontFamily: fontFamily('Bold'),
    textAlign:'center',
  },
  value: {
    fontSize: gpsw('18'),
    lineHeight: gpsh('24'),
    color: '#1C1B1F',
    fontFamily: fontFamily('Medium'),
  },
  section: {
    flexDirection: 'row',
    gap: gpsh('24'),
    alignItems: 'center',
  },
  MainTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('10')
  },
  MainTitle2: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('16'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('0')
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    letterSpacing: -0.5,
    color: globalBlack,
  },
  titleValue: {
    fontFamily: fontFamily('Light'),
    fontSize: gpsw('14'),
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
export default KYC