import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React, {useState} from 'react';
import {ScrollView,View} from 'react-native';
import {Box, Icon, Text} from '@/component/atom';
import {moderateScale} from 'react-native-size-matters';
import TouchableOpacity from '@/component/atom/TouchableOpacity';
import { Header, TopHeaderContent } from '@molecule';
import { transactionType } from '@/typings/business';
import { BusinessTextInput } from '@/component/molecule/Business/BusinessTextInput';
import TransactionHistoryItem from '@/component/molecule/Business/Card/TransactionHistory/TransactionHistoryItem';
import { gpsh } from '@/utils/parseTokenStyle';
import { globalWhite } from '@/style-dictionary-dist/momoStyle';
import useTransactions from '@/hooks/useTransactions';
import { formatTime } from 'methods';

const Search = ({navigation}: any) => {
  const {colors} = useTheme<Theme>();
  const {transactionData:transactions}:{transactionData:transactionType[]} = useTransactions();
  const [searchValue,setSearchValue] = useState<string>('');
  const filteredArray = transactions?.filter(item => (JSON.stringify(item.fromUser).includes(searchValue) || JSON.stringify(item.user).includes(searchValue)))
  const [isFocused,setIsFocused] = useState(false);
  return (
    <View style={{flex:1,backgroundColor:colors.white}}>
      <Header
        style={{
          paddingVertical: moderateScale(13),
          height:gpsh('64'),
          justifyContent:'center'
        }}>
        <TopHeaderContent
          left={{leftComp: <TouchableOpacity onPress={() => {navigation.goBack()}}><Icon name='BusinessBackIcon' /></TouchableOpacity>}}
          title='Search'
          titleStyle={{color: globalWhite}}
          
        />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={{padding:10,paddingTop:40}}>
          <BusinessTextInput 
            placeholder={'Search'}
            setIsFocused={setIsFocused}
            onChangeText={(value)=>{setSearchValue(value)}}
            rightComponent={() => <Icon name='SearchIcon' size={gpsh('20')} color={!isFocused ? colors.black : colors.momoBlue} />}
          />
        </Box>
        {(searchValue === '') && <Text textAlign={'center'} padding={"hl"}>Try searching for a mobile number or transaction reference.</Text>}
        {searchValue.length > 1 && filteredArray?.map((item:any,i:number) => {
          return(
            <View key={i}>
              <TransactionHistoryItem
                number={item.fromUser}
                type={item.type}
                name={item.user}
                time={formatTime(item.time)}
                amount={item.amount}
                credit = {item.transactionType === 'MONEY_IN'}
                currency='GHc'
                from='Transfers'
                index={0}
              />
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default Search;