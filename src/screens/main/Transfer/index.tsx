import {TransferStackParams} from '@/typings/navigation';
import {BackHeadingX} from '@molecule';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TransferScreen from './TransferScreen';
import BeneficiariesAll from './TransferTabs/Beneficiaries/Beneficiaries';
import Transactions from './TransferTabs/RecentlyPaid/Transactions';

const TransferScreenStack = createNativeStackNavigator<TransferStackParams>();

const TransferScreenNavigator = () => {
  return (
    <TransferScreenStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <TransferScreenStack.Screen
        name="transferscreen"
        component={TransferScreen}
      />
      <TransferScreenStack.Screen
        name="transactionshistoryscreen"
        component={Transactions}
      />
      <TransferScreenStack.Screen
        name="beneficiariesscreen"
        component={BeneficiariesAll}
        options={{
          headerShown: true,
          header: () => <BackHeadingX title="Beneficiaries" />,
        }}
      />
      {/* <TransferScreenStack.Screen name="momouser" component={MomOUser} /> */}
      {/* <TransferScreenStack.Screen
        name="banktransferscreen"
        component={BankTransfer}
      /> */}
    </TransferScreenStack.Navigator>
  );
};

export default TransferScreenNavigator;
