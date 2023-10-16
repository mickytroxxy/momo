import LearnMore from '@/screens/drawer/RecommendMomo/LearnMore';
import RecommendMomo from '@/screens/drawer/RecommendMomo/RecomendMomo';
import RecommendMomoStatus from '@/screens/drawer/RecommendMomo/RecommendStatus';
import ReferaFriend from '@/screens/drawer/RecommendMomo/ReferaFriend';
import { RecommendMomoParams } from '@/typings/navigation';
import { BackHeadingX } from '@molecule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


const RecommendStack = createNativeStackNavigator<RecommendMomoParams>();

export default function RecommendNavigator() {
    const RecommendNavigatorScreens = [
        {
            name: 'RecommendMain',
            component: RecommendMomo,
            options: {
                header: () => {
                    return <BackHeadingX title={String('Recomend MoMo')} />
                }
            }
        },
        {
            name: 'ReferaFriend',
            component: ReferaFriend,
            options: {
                header: () => {
                    return <BackHeadingX title={String('Refer a friend')} />
                }
            }
        },
        {
            name: 'LearnMore',
            component: LearnMore,
            options: {
                header: () => {
                    return <BackHeadingX title={String('Learn More')} />
                }
            }
        },
        {
            name: 'RecommendStatus',
            component: RecommendMomoStatus,
            options: {
                headerShown: false
            }
        }
    ]

    return (
        <RecommendStack.Navigator screenOptions={{
            headerShown: false,
        }} >
            {
                RecommendNavigatorScreens.map((item) => {
                    return (
                        <RecommendStack.Screen key={item.name} name={item.name}  component={item.component} options={item.options} />
                    )
                })
            }
        </RecommendStack.Navigator>
    )
}