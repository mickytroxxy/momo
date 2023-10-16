import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Box } from '@/component/atom';
import icon from '@/constants/icon';
import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import { CurvedHeaderBg, TopHeaderContent } from '@molecule';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { UserAccountType, setUserAccounts } from '@/features/transactions/transactionSlice';
import { gpsh } from '@/utils/parseTokenStyle';
import AccountBalanceCard from '@/component/molecule/Business/Card/AccountBalanceCard';
import { BusinessAccountsHistory } from '@/component/molecule/Business/Card/DasboardCard/BusinessAccountsHistory';
import ActionButton from '@/component/molecule/Business/Card/ActionButton';
import { IllustrationImages } from '@/constants/images';
import useFetch from '@/hooks/useFetch';
import { updateToken } from '@/features/auth/authSlice';

const { BusinessNotificationIcon, MakeMoneyIcon, BusinessRechargeIcon, MomoIcon, MomoGrowIcon, GetMoneyIcon } = icon;

export type ACTION_BTNS_TYPE = {
  text: string;
  icon: string;
  iconColor?: string;

  variant: "outlined" | "filled"
  screen?: {
    screenName: string;
    params: {
      headerTitle: string;
    }
  };
}
export type DashBoardType = {
  headerText: string;//Default to Total Balance
  actionButtons: ACTION_BTNS_TYPE[]
}

const Dashboard = ({ navigation }: any) => {
  const { currency, userAccounts }: { currency: string; userAccounts: UserAccountType[] } = useSelector((state: RootState) => state.transactionReducer);
  const [totalBalance, setTotalBalance] = useState<any>(0);
  const { fetchData } = useFetch();
  const dispatch = useDispatch();

  const ACTION_BTNS = [
    { name: 'MoMo Grow', onPress: () => { navigation.navigate("BankingServices", { headerTitle: 'Banking Services' }) }, renderIcon: () => <MomoGrowIcon /> },
    { name: 'Get Money', onPress: () => { navigation.navigate("BankingServices", { headerTitle: 'Banking Services' }) }, renderIcon: () => <GetMoneyIcon /> },
    { name: 'Make Money', onPress: () => { navigation.navigate("MakeMoney", { headerTitle: 'Banking Services' }) }, renderIcon: () => <BusinessRechargeIcon /> }
  ]
  const handleGetBalance = async () => {
    const payload = { "getaccountsrequest": { "identity": "ID:233596254713/MSISDN" } }
    const transactionpayload = { "gettransactionhistoryrequest": {
      "fri": "FRI:233596254713/MSISDN",
      "paginginfo": {
        "maximumnumberofitems": 3,
        "indexoffset": 0
      },
      "transactionstatus": "SUCCESSFUL",
      "transactiontypes": "",
      "datefrom": "2023-05-10T00:00:00Z",
      "dateto": "2023-08-30T23:00:00Z"
    }
    }
    const response = await fetchData('dashboard/getaccounts', 'POST', payload);
    const transactionResponse=await fetchData('dashboard/gettransactionhistory', 'POST', transactionpayload);
    //console.log(response, 'dashboard====');
    console.log(transactionResponse, 'transactionResponse====');
    //const responseData = response ? response : {}
    const account = response?.result?.account || []
    //const { account = [] } = responseData?.result || {}
    //const { account = [] } = responseData?.Data?.getaccountsresponse?.accountslist || {}
    //console.log(account)
    dispatch(setUserAccounts(account))
    setTotalBalance(account.reduce((total:number, rec:any) => total + parseInt(rec.balance.amount), 0))
  }
  useEffect(() => {
    handleGetBalance();
    dispatch(updateToken({accessToken:null}))
  }, [])


  return (
    <SafeAreaContainer testID='container' bg={'primaryColor'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CurvedHeaderBg image={IllustrationImages.bg} height={170}>
          <TopHeaderContent
            containerStyle={{ paddingVertical: gpsh('3'), alignItems: 'flex-start' }}
            right={{ rightComp: <BusinessNotificationIcon width={24} height={24} /> }}
            center={{ centerComp: <MomoIcon width={40} height={40} /> }}
            titleStyle={{ color: '#FFCB05' }}
          />
          <Box px={'vs'} style={{ marginTop: gpsh('18') }}>
            <AccountBalanceCard currency={currency} balance={totalBalance.toFixed(2)} />
          </Box>
        </CurvedHeaderBg>

        <Box style={{ marginTop: -30, paddingBottom: 100 }}>
          <Box style={{ paddingHorizontal: gpsh('24') }}>
            {userAccounts.map((item,index) => 
                <View key={index}>
                  <BusinessAccountsHistory navigation={navigation} accountId={item.accountId} currency='GHc' accountType={item.accounttype} balance={item.balance} transactions={item.transactions}  />
                </View>
            )}
          </Box>
          <ActionButton items={[...ACTION_BTNS]} variant='fill' />
        </Box>
      </ScrollView>
    </SafeAreaContainer>
  );
}

export default Dashboard
// import React, { useEffect, useState } from 'react';
// import {ScrollView,View} from 'react-native';
// import {Box} from '@/component/atom';
// import icon from '@/constants/icon';
// import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
// import {CurvedHeaderBg, TopHeaderContent } from '@molecule';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// import { UserAccountType } from '@/features/transactions/transactionSlice';
// import { gpsh } from '@/utils/parseTokenStyle';
// import AccountBalanceCard from '@/component/molecule/Business/Card/AccountBalanceCard';
// import { BusinessAccountsHistory } from '@/component/molecule/Business/Card/DasboardCard/BusinessAccountsHistory';
// import ActionButton from '@/component/molecule/Business/Card/ActionButton';
// import { IllustrationImages } from '@/constants/images';

// const {BusinessNotificationIcon, MakeMoneyIcon, BusinessRechargeIcon, MomoIcon, MomoGrowIcon, GetMoneyIcon} = icon;

// export type ACTION_BTNS_TYPE = {
//   text:string;
//   icon:string;
//   iconColor?:string;
  
//   variant: "outlined" | "filled"
//   screen?:{
//     screenName:string;
//     params:{
//       headerTitle:string;
//     }
//   };
// }
// export type DashBoardType = {
//   headerText:string;//Default to Total Balance
//   actionButtons:ACTION_BTNS_TYPE[]
// }

// const Dashboard = ({navigation}:any) => {
//   const { currency, userAccounts }: { currency: string; userAccounts: UserAccountType[] } = useSelector((state: RootState) => state.transactionReducer);
//   const [totalBalance,setTotalBalance] = useState<number>(0);
//   const ACTION_BTNS = [
//     {name:'MoMo Grow',onPress:() => {navigation.navigate("BankingServices",{headerTitle:'Banking Services'})},renderIcon:() => <MomoGrowIcon/>},
//     {name:'Get Money',onPress:() => {navigation.navigate("BankingServices",{headerTitle:'Banking Services'})},renderIcon:() => <GetMoneyIcon/>},
//     {name:'Make Money',onPress:() => {navigation.navigate("MakeMoney",{headerTitle:'Banking Services'})},renderIcon:() => <BusinessRechargeIcon/>}
//   ]
//   useEffect(() => {
//     setTotalBalance(userAccounts.reduce((total, account) => total + account.balance, 0))
    
//   },[])
//   return (
//     <SafeAreaContainer testID='container' bg={'primaryColor'}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <CurvedHeaderBg image={IllustrationImages.bg} height={170}>
//             <TopHeaderContent
//               containerStyle={{paddingVertical: gpsh('3'),alignItems: 'flex-start'}}
//               right={{rightComp: <BusinessNotificationIcon width={24} height={24} />}}
//               center={{centerComp: <MomoIcon width={40} height={40} />}}
//               titleStyle={{color: '#FFCB05'}}
//             />
//             <Box px={'vs'} style={{marginTop:gpsh('18')}}>
//               <AccountBalanceCard currency={currency} balance={totalBalance.toFixed(2)} />
//             </Box>
//           </CurvedHeaderBg>

//           <Box style={{marginTop:-30,paddingBottom:100}}>
//             <Box style={{paddingHorizontal:gpsh('24')}}>
//               {userAccounts.map((item) => 
//                 <View key={item.accountId}>
//                   <BusinessAccountsHistory navigation={navigation} accountId={item.accountId} currency='GHc' accountType={item.type} balance={item.balance} transactions={item.transactions}  />
//                 </View>
//               )}
//             </Box>
//             <ActionButton items={[...ACTION_BTNS]} variant='fill' />
            
//           </Box>
//         </ScrollView>
//     </SafeAreaContainer>
//   );
// }

// export default Dashboard