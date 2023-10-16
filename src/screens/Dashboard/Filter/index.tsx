import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React, {useState} from 'react';
import {ScrollView,View} from 'react-native';
import {Box, Button, Icon, Text} from '@/component/atom';
import {moderateScale} from 'react-native-size-matters';
import TouchableOpacity from '@/component/atom/TouchableOpacity';
import { Header, TopHeaderContent } from '@molecule';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setFilters } from '@/features/transactions/transactionSlice';
import { BusinessDropdownSingle } from '@/component/molecule/Business/DropDown/BusinessDropdown';
import { BusinessTextInput } from '@/component/molecule/Business/BusinessTextInput';
import { gpsh } from '@/utils/parseTokenStyle';
import { globalGrey, globalWhite } from '@/style-dictionary-dist/momoStyle';
import { fontFamily } from '@/style/theme';
import DatePicker from '@/component/molecule/Business/DatePicker';

const dropDownData = [
  {maintitle:'PAYMENTS',value:'PAYMENTS', id:1},
  {maintitle:'COMMISSIONS',value:'COMMISSIONS', id:2},
  {maintitle:'TRANSFERS',value:'TRANSFERS', id:3},
  {maintitle:'REFUNDS',value:'REFUNDS', id:4}
]
const Filter = ({navigation,route}: any) => {
  const {colors} = useTheme<Theme>();
  const dispatch = useDispatch();
  const {headerTitle} = route.params;
  const [rangeData,setRangeData] = useState([{btn:'From',value:null,selected:false,timeStamp:0},{btn:'To',value:null,selected:false,timeStamp:0}])
  const {filters,currency} = useSelector((state: RootState) => state.transactionReducer);
  const [amounts,setAmounts] = useState<any[]>([{btn:'From',value:''},{btn:'To',value:''}]);
  
  const handleAmounts = (val:any,btn:any) => {
    val = val === '' ? 0 : parseFloat(val);
    const data = amounts.map(data => data.btn === btn ? {...data,value:val} : {...data})
    setAmounts(data);
    dispatch(setFilters(filters.map((item:any) => item.type === 'amounts' ? {...item,value:data} : item)))
  }
  
  return (
    <View style={{flex:1,backgroundColor:colors.white}}>
      <Header style={{paddingVertical: moderateScale(13),height:gpsh('64'),justifyContent:'center'}}>
        <TopHeaderContent
          left={{leftComp: <TouchableOpacity onPress={() => {navigation.goBack()}}><Icon name='BusinessBackIcon' /></TouchableOpacity>}}
          title={headerTitle}
          titleStyle={{color: globalWhite}}
        />
      </Header>
      <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1,padding:gpsh('20'),paddingTop:36}}>
        <Box>
          <Text color={'momoBlue'} fontFamily={'MTNBrighterSans-Bold'} fontSize={gpsh('18')} lineHeight={gpsh('23.4')}>Filter Transactions</Text>
          <Text fontFamily={'MTNBrighterSans-Bold'} style={{marginTop:gpsh('24'),marginBottom:gpsh('12'),color:globalGrey}} fontSize={gpsh('14')} lineHeight={18}>Custom Date Range</Text>
        </Box>
        <View style={{gap:gpsh('6')}}>
          {rangeData.map((item,i) => 
            <View style={{zIndex: 0 - i}} key={i}>
              <DatePicker btn={item.btn} onDateSelected={(day,btn) => {
                const rangeInfo = rangeData.map(item => item.btn === btn ? {...item,timeStamp:day.timestamp,value:day.dateString.split("-").join("/")} : item)
                setRangeData(rangeInfo);
                if(rangeInfo.filter(item => item.value).length === 2){
                  dispatch(setFilters(filters.map((item:any) => item.type === 'dates' ? {...item,value:rangeInfo} : item)))
                }
              }} placeholder={item.value || item.btn} />
            </View>
          )}
        </View>
        <Box zIndex={-1} style={{marginTop:gpsh('24')}}>
          <Text fontFamily={'MTNBrighterSans-Bold'} style={{marginBottom:gpsh('12')}} fontSize={gpsh('14')}  lineHeight={18}>Transaction Type</Text>
          <BusinessDropdownSingle fontFamily={fontFamily('Regular')} fontSize={16} fontColor={colors.black} placeholder='Select Transaction Type' itemList={dropDownData}  onSelected={(selectedOption) => {
            dispatch(setFilters(filters.map((item:any) => item.type === 'transactionType' ? {...item,value:selectedOption.value} : item)))
          }} />
        </Box>
        <Box zIndex={-2} style={{marginTop:gpsh('24')}}>
          <Text fontFamily={'MTNBrighterSans-Bold'} style={{marginBottom:gpsh('12')}} fontSize={gpsh('14')}  lineHeight={18}>Amount</Text>
          <Box style={{justifyContent:'space-between',gap:gpsh('12')}}>
              {amounts.map((item,i) => (
                <View key={i} style={{width:'100%'}}>
                  <BusinessTextInput 
                    placeholder={item.btn}
                    required={false}
                    textAlign='right'
                    onChangeText={(value) => {handleAmounts(value,item.btn)}} 
                    leftComponent={() => <Text fontFamily={'MTNBrighterSans-Bold'} color={'black'}>{currency}</Text>}
                  />
                </View>
              ))}
          </Box>
        </Box>
      </ScrollView>
      <Box style={{padding:24}}>
        <Button
          bStyle={{marginRight:10}}
          onPress={() => {
            navigation.goBack()
          }}
          label="Apply"
          variant="primary"
          size="fullWidth"
        />
      </Box>
    </View>
  );
};

export default Filter;