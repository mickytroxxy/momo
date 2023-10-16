import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ScrollView,View} from 'react-native';
import {Icon, Text} from '@/component/atom';
import {moderateScale} from 'react-native-size-matters';
import TouchableOpacity from '@/component/atom/TouchableOpacity';
import { Header, TopHeaderContent } from '@molecule';
import Tab from '@/component/molecule/Tab/Tab';
import { BusinessDropdownSingle } from '@/component/molecule/Business/DropDown/BusinessDropdown';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import { globalWhite } from '@/style-dictionary-dist/momoStyle';
import { fontFamily } from '@/style/theme';
import useTransactions from '@/hooks/useTransactions';

const Transactions = ({navigation,route}: any) => {
  const {colors} = useTheme<Theme>();
  const {accountType} = route.params;
  const headerTitle = accountType.split(" ").slice(0,2).join(" ");
  const {itemList,datesData,amountsData,transactionTypeData,filters,tabData,removeFilters,setSelectedDuration} = useTransactions();

  return (
    <View style={{backgroundColor:'white',flex:1}}>
        <Header style={{paddingVertical: moderateScale(13),height:gpsh('64'),justifyContent:'center'}}>
          <TopHeaderContent left={{leftComp: <TouchableOpacity onPress={() => {navigation.goBack()}}><Icon name='BusinessBackIcon' /></TouchableOpacity>}} title={headerTitle} titleStyle={{color: globalWhite}}
            right={{
              rightComp: (
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight:10}}><TouchableOpacity onPress={() => navigation.navigate("Search",{headerTitle})}><Icon name='SearchIcon' color='white' height={35} width={30} /></TouchableOpacity></View>
                  <View><Icon name='BusinessMoreIcon' color='white' height={35} width={30} /></View>
                </View>
              ),
            }}
          />
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row',paddingHorizontal:gpsw('20'),paddingVertical:20}}>
                <View style={{justifyContent:'center',flex:1}}><Text style={{}} color={'momoBlue'}>Transactions</Text></View>
                <View style={{justifyContent:'center',alignItems:'flex-end'}}>
                    <View style={{borderRadius:100,borderWidth:0.6,padding:5,borderColor:colors.momoBlue}}>
                        <TouchableOpacity onPress={() => navigation.navigate("Filter",{headerTitle})}><Icon name='TransactionFilter' height={14} width={14} /></TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style={{paddingHorizontal:gpsh('20')}}>
                {filters.filter(item => item.value).length === 0 ?
                    <BusinessDropdownSingle fontFamily={fontFamily('Regular')} fontSize={16} fontColor={colors.black} placeholder='Date Range' itemList={itemList}  onSelected={(selectedOption) => {
                        setSelectedDuration(selectedOption.value)
                    }} /> :
                    <View style={{flexDirection:'row',flex:1,flexWrap:'wrap',justifyContent:'space-between'}}>
                        {datesData && 
                            <TouchableOpacity onPress={()=>removeFilters('dates')} style={{flexDirection:'row',width:200,padding:5,borderWidth:1,borderColor:colors.grey,borderRadius:30}}>
                                <View style={{flex:1,justifyContent:'center'}}><Text textAlign={'center'} fontFamily={fontFamily('Medium')} fontSize={gpsh('10')}>{datesData.find((item:any) => item.btn === "From")?.value} to {datesData.find((item:any) => item.btn === "To")?.value}</Text></View>
                                <View style={{justifyContent:'center',marginRight:6}}><Text variant={'extraSmall'}>X</Text></View>
                            </TouchableOpacity>
                        }
                        {transactionTypeData && 
                            <TouchableOpacity onPress={()=>removeFilters('transactionType')} style={{flexDirection:'row',width:150,padding:5,borderWidth:1,borderColor:colors.grey,borderRadius:30}}>
                                <View style={{flex:1,justifyContent:'center'}}><Text fontFamily={fontFamily('Medium')} textAlign={'center'} fontSize={gpsh('10')}>{transactionTypeData}</Text></View>
                                <View style={{justifyContent:'center',marginRight:6}}><Text variant={'extraSmall'}>X</Text></View>
                            </TouchableOpacity>
                        }
                        {amountsData && 
                            <TouchableOpacity onPress={()=>removeFilters('amounts')} style={{flexDirection:'row',marginTop:5,width:200,padding:5,borderWidth:1,borderColor:colors.grey,borderRadius:30}}>
                                <View style={{flex:1,justifyContent:'center'}}><Text textAlign={'center'} fontFamily={fontFamily('Medium')} fontSize={gpsh('10')}>{amountsData.find((item:any) => item.btn === "From")?.value} to {amountsData.find((item:any) => item.btn === "To")?.value}</Text></View>
                                <View style={{justifyContent:'center',marginRight:6}}><Text variant={'extraSmall'}>X</Text></View>
                            </TouchableOpacity>
                        }
                    </View>
                }
            </View>
            <View style={{marginTop:gpsh('24'),zIndex:-1}}><Tab mH={gpsh('20')} tabData={tabData} /></View>
        </ScrollView>
    </View>
  );
};

export default Transactions;