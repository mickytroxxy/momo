import { HomeStackParams } from '@/typings/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AyoScreen from './HomeScreenTab/Insure/AyoScreen';
import Homescreen from './Homescreen';
import SchedulePayments from './SchedulePayments/SchedulePaymentsScreen';
import Dashboard from './Dashboard';

const HomeScreen = createNativeStackNavigator<HomeStackParams>();

const HomeScreenNavigator = () => {
  return (
    <HomeScreen.Navigator
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <HomeScreen.Screen name="homescreen" component={Dashboard} />
      <HomeScreen.Screen name="schedulepaymentscreen" component={SchedulePayments} />
      <HomeScreen.Screen name="ayoscreen" component={AyoScreen} />
    </HomeScreen.Navigator>
  );
};

export default HomeScreenNavigator;
