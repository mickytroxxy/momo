import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@atom'
import { useNavigation } from '@react-navigation/native'

export default function EmptyScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>EmptyScreen</Text>
            <View>
                <Button label='Open SideBar' size='medium' onPress={() => navigation?.openDrawer()} />
            </View>
        </View>
    )
}