import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from '@/component/molecule/Card/Card'
import { Box, Icon, Text } from '@atom'
import { fontFamily } from '@/style/theme'
import { gpmsh, gpmsw, gpsh, gpsw } from '@/utils/parseTokenStyle'
import { globalBlack, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle'
import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator'
import CountryDropdown from '@/component/molecule/Dropdown/CountryDropdown'
import { renderCountryItem } from '@/component/molecule/Dropdown/Dropdown.stories'
import countryData from '@/fixtures/countryData'
import { BusinessTextInput } from '../../BusinessTextInput'
const {width,height} = Dimensions.get('window')
const ChooseCountry = () => {
  const [selected,setSelected] = useState(countryData[0]);
  const [isOpen,setIsOpen] = useState(false);
  console.log(isOpen)
  return (
    <View style={{padding:gpsh('16')}}>
        <Card style={{height:gpsh(isOpen ? '360' : '147'),borderRadius:gpsh('20'),paddingHorizontal:gpsw('16'),paddingVertical:gpsh('16'),elevation:10}}>
            <View style={{alignItems:'center',marginBottom:gpmsh('24')}}>
                <Text fontFamily={fontFamily('Regular')} fontSize={gpsh('12')}>Welcome to</Text>
            <Text fontFamily={fontFamily('Regular')} fontSize={gpsh('18')} color={'black'}>
                MoMo Business
            </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{justifyContent:'center',width:80}}>
                    <CountryDropdown
                        renderItem={renderCountryItem}
                        data={countryData}
                        onSelect={setSelected}
                        value={selected}
                        placeHolder="S"
                        INPUT_HEIGHT={57}
                        paddingContainer={'hm'}
                        setIsOpen={status => setIsOpen(status)}
                    />
                </View>
                <View style={{flex:1,justifyContent:'center',marginLeft:gpsh('12')}}>
                    <BusinessTextInput 
                        placeholder={'Enter Number'}
                        required = {true}
                        onChangeText={(value)=>{
                            
                        }}
                    />
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
export default ChooseCountry