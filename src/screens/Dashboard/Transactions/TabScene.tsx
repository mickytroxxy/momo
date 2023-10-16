import React from 'react';
import {View} from 'react-native';
import {HorizontalCardSeparator } from '@molecule';
import Accordion from '@/component/molecule/Accordion/Accordion';
import { transactionType } from '@/typings/business';
import { getFontSizeByWindowHeight } from '@/style/theme';
import MoneyFlow from '@/component/molecule/Business/Card/MoneyFlow/MoneyFlow';
import TransactionHistoryItem from '@/component/molecule/Business/Card/TransactionHistory/TransactionHistoryItem';
import { gpsh } from '@/utils/parseTokenStyle';
import { formatDate, formatTime } from 'methods';


type TabSceneProps = {
  type:string,
  transactions?:transactionType[],
  currency?:string
}
const TabScene = (props:TabSceneProps) => {
  const {type,transactions,currency} = props;
  const dataToRender = transactions?.filter(item => (item.transactionType === type || type === 'All'));
  const groupedTransactions = dataToRender != undefined && dataToRender.length > 0 && dataToRender?.sort((a, b) => b.time - a.time)?.reduce((acc:any, transaction) => {
    const formattedDay = formatDate(transaction.time);
    acc[formattedDay] = acc[formattedDay] || [];
    acc[formattedDay].push(transaction);
    return acc;
  }, {});
  
  const arrayOfGroups = Object.entries(groupedTransactions).map(([day, items]) => ({
    day,
    items,
  }));
  const money_in = transactions?.filter(transaction => transaction.transactionType === 'MONEY_IN')?.reduce((total, account) => total + account.amount, 0);
  const money_out = transactions?.filter(transaction => transaction.transactionType === 'MONEY_OUT')?.reduce((total, account) => total + account.amount, 0)
  return(
    <View style={{padding:0}}>
      <View style={{padding:gpsh('20')}}>
        {(type === "All" || type === "MONEY_IN") &&
          <MoneyFlow direction='Received' amount={money_in?.toString() || ''} currency={currency || ''} />
        }
        {(type === "All" || type === "MONEY_OUT") &&
          <View style={{flexDirection:'row',marginTop: type === 'All' ? getFontSizeByWindowHeight(12) : 0}}><MoneyFlow direction='Spent' amount={money_out?.toString() || ''} currency={currency || ''} /></View>
        }
      </View>
      
      <View style={{paddingLeft:gpsh('20'),paddingRight:gpsh('20')}}><HorizontalCardSeparator w={1}/></View>
      <View style={{flexDirection:'row',marginTop:12}}>
        <HorizontalCardSeparator/>
        <View style={{width:'100%'}}>
          {arrayOfGroups?.length > 0 && arrayOfGroups.map((item:any,i) => {
            return(
              <View key={i}>
                <Accordion propData={[{
                  id: i,
                  title: item.day,
                  renderScene: () => (
                    <>
                      {item.items?.map((item:any,i:number) => {
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
                              index={i}
                            />
                          </View>
                        )
                      })}
                    </>
                  ),
                  content:''
                }]} />
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
export default TabScene;