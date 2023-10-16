import React from 'react'
import { Box, Button, Text } from '@atom'
import { StyleSheet } from 'react-native'
import { getFontSizeByWindowHeight, getFontSizeByWindowWidth } from '@/style/theme'
import { useNavigation } from '@react-navigation/native'
import { globalGrey, globalMoMoBlue } from '@/style-dictionary-dist/momoStyle'

export default function LearnMore() {
    const { navigate, goBack } = useNavigation()
    return (
        <Box flex={1} py={'vl'} bg={'white'} px={'hl'} justifyContent={'space-between'}  >
            <Box alignItems={'center'}>
                <Text variant={'storyHead'} color={'momoBlue'} >Get 300MB for free</Text>
                <Text style={styles.textStyle} >
                    For any number you recommend this app to when they download and use it for the first time
                    {'\n'}
                    {'\n'}
                    Recommend as many friends and family as you like. The more you do, the more free data you will receive when they join the app.
                </Text>
            </Box>
            <Box >
                <Button label='Back' variant='primary' size='fullWidth' onPress={() => goBack()} />
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: getFontSizeByWindowWidth(16),
        fontFamily: 'MTNBrighterSans-Regular',
        fontStyle: 'normal',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '400',
        marginTop: getFontSizeByWindowHeight(20),
        color: globalGrey
    }
})