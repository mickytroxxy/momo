import ChangePin from '@/screens/drawer/Settings/ChangePin';
import changePinStatus from '@/screens/drawer/Settings/ChangePinStatus';
import RecoveryNumber from '@/screens/drawer/Settings/RecoveryNumber';
import Settings from '@/screens/drawer/Settings/Settings';
import { SettingsParams } from '@/typings/navigation';
import { BackHeadingX } from '@molecule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


const SettingsStack = createNativeStackNavigator<SettingsParams>();

export default function SettingsNavigator() {
  const SettingsNavigatorScreens = [
    {
      name: 'SettingsMain',
      component: Settings,
      options: {
        header: () => {
          return <BackHeadingX title={'Settings'} />
        }
      }
    },
    {
      name: 'ChangePin',
      component: ChangePin,
      options: {
        header: () => {
          return <BackHeadingX title={'Change Pin'} />
        }
      }
    },
    {
      name: 'RecoverNumber',
      component: RecoveryNumber,
      options: {
        header: () => {
          return <BackHeadingX title={'Recover Number'} />
        }
      }
    },
    {
      name: 'ChangePinStatus',
      component: changePinStatus,
      options: {
        headerShown: false
      }
    },
  ]

  return (
    <SettingsStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      {
        SettingsNavigatorScreens.map((item) => {
          return (
            <SettingsStack.Screen key={item.name} name={item.name} component={item.component} options={item.options} />
          )
        })
      }
    </SettingsStack.Navigator>
  )
}