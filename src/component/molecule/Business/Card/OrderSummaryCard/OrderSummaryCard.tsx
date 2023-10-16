import Card from '@/component/molecule/Card/Card';
import Pills from '@/component/molecule/Pills/Pills';
import {fontFamily} from '@/style/theme';
import {gpmsw, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Button, Icon, ScrollView} from '@atom';
import React, { useState } from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native-animatable';
import { ConfirmationDetailsProps } from '../ConfirmationDetails';
import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator';
import { globalBlack, globalGrey, globalWhite } from '@/style-dictionary-dist/momoStyle';
import OrderSummarryLinear from './OrderSummaryLinear';

const OrderSummaryCard = ({}:{variant:'table' | 'linear' | 'multiLinear',data?:any}) => {
  const [variantType,setVariantType] = useState('table');
  const data={headertitle:"Water Bill Information",attr:[
    {
      "Bill Name":"Ghana Water",
      "For":"033 123 4563",
      "Reference":"231245654",
      "Due Date":"09 November 2022"
    }
  ],amount:'355.90'}
  return (
    <View style={{paddingBottom:50}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
        <Button
                bStyle={{alignItems:'center',marginRight:gpsh('10')}}
                onPress={() => {setVariantType('table')}}
                label='Table'
                variant='secondary'
                size="small"
                
            />
            <Button
                bStyle={{alignItems:'center',marginRight:gpsh('10')}}
                onPress={() => {setVariantType('linear')}}
                label='linear Single'
                variant='secondary'
                size="small"
            />
            <Button
                bStyle={{alignItems:'center',marginRight:gpsh('10')}}
                onPress={() => {setVariantType('multiLinear')}}
                label='linear Multi'
                variant='secondary'
                size="small"
            />
      </ScrollView>
      {variantType === 'table' && <ConfirmationDetails headerTitle={'Confirm Details'} data={{"For":"+23 589 5011 (Me)","Amount":"GHc 500"}} />}
      {variantType === 'linear' && <OrderSummarryLinear data={data}/>}
      {variantType === 'multiLinear' && <OrderSummarryLinear data={{...data,headertitle:'Payment Summary',attr:[...data.attr,{
      "Bill Name":"Ghana Water",
      "For":"033 123 4563",
      "Reference":"231245654",
      "Amount":"64784"
    }]}}/>}
    </View>
  );
};
export function ConfirmationDetails(props: ConfirmationDetailsProps) {
  const { data, headerTitle } = props;
  const array = [
    {product:'Buy GHc 100 Airtime for +23 403 4567', QTY:1,Amount:'GHc 100.99'},
    {product:'Buy GHc 100 Airtime for +23 403 4567', QTY:1,Amount:'GHc 100.99'},
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>{headerTitle}</Text>
      <View style={{marginTop:5}}><HorizontalCardSeparator w={1} /></View>
      <View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1.5}}><Text style={styles.title}>Product</Text></View>
          <View style={{flex:1}}><Text style={[styles.title,{textAlign:'center'}]}>QTY</Text></View>
          <View style={{flex:1.5}}><Text style={[styles.title,{textAlign:'right'}]}>Amount</Text></View>
        </View>
        <View style={{marginTop:gpsh('7')}}>
          {array.map((item,i) => 
            <View key={i} style={{flexDirection:'row',marginTop:gpsh('14')}}>
              <View style={{flex:1.5}}><Text style={styles.titleValue}>{item.product}</Text></View>
              <View style={{flex:1}}><Text style={[styles.titleValue,{textAlign:'center'}]}>{item.QTY}</Text></View>
              <View style={{flex:1.5}}><Text style={[styles.titleValue,{textAlign:'right'}]}>{item.Amount}</Text></View>
            </View>
          )}
        </View>
        <View style={{flexDirection:'row',marginTop:gpsh('14')}}>
          <View style={{flex:1.5}}><Text style={styles.titleValue}>Subtotal</Text></View>
          <View style={{flex:1}}><Text style={[styles.titleValue,{textAlign:'center'}]}></Text></View>
          <View style={{flex:1.5}}><Text style={[styles.titleValue,{textAlign:'right'}]}>GHc 100.00</Text></View>
        </View>
        <View style={{flexDirection:'row',marginTop:gpsh('2')}}>
          <View style={{flex:2}}><Text style={[styles.MainTitle,{fontSize:gpsh('18')}]}>Total</Text></View>
          <View style={{flex:2}}><Text style={[styles.MainTitle,{fontSize:gpsh('18'),textAlign:'right'}]}>GHc 100.00</Text></View>
        </View>
      </View>
    </View>
  );
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
    lineHeight: gpsh('23.4'),
    color: '#000',
    fontFamily: fontFamily('Bold'),
    marginBottom: 2,
  },
  value: {
    fontSize: gpsw('14'),
    lineHeight: gpsh('18.2'),
    color: '#000',
    fontFamily: fontFamily('Medium'),
  },
  section: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginTop: 12,
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
    fontSize: gpsw('10'),
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

export default OrderSummaryCard;
