import Help from '@/screens/drawer/Help/Help';
import LocateAgent from '@/screens/drawer/Help/LocateAgent';
import { HelpParams } from '@/typings/navigation';
import { BackHeadingX } from '@molecule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


const HelpStack = createNativeStackNavigator<HelpParams>();

export default function HelpNavigator() {
    const HelpNavigatorScreens = [
        {
            name: 'HelpMain',
            component: Help,
            options: {
                header: () => {
                    return <BackHeadingX title={'Help'} />
                }
            }
        },
        {
            name: 'LoacateAgent',
            component: LocateAgent,
            options: {
                header: () => {
                    return <BackHeadingX title={'Local Agent'} />
                }
            }
        },
    ]

    return (
        <HelpStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            {
                HelpNavigatorScreens.map((item) => {
                    return (
                        <HelpStack.Screen key={item.name} name={item.name} component={item.component} options={item.options} />
                    )
                })
            }
        </HelpStack.Navigator>
    )
}