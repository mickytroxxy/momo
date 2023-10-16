import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { IllustrationImages } from '@/constants/images'
import { Box } from '@atom'
import { StyleProps } from 'react-native-reanimated'
import { getFontSizeByWindowWidth } from '@/style/theme'


type IllustrationBackgroundType = {
    children?: ReactNode,
    style?: StyleProps,
    colorBg?: boolean
}

export default function IllustrationBackground({ children, style, colorBg = false }: IllustrationBackgroundType) {
    const { IllustrationBg } = IllustrationImages
    return (
        <ImageBackground source={IllustrationBg} style={[styles.imageBackground, { ...style }]} >
            {colorBg ?
                < Box height={'70%'} alignItems={'center'} top={20} position={'absolute'} backgroundColor={'momoLightBlue'} borderRadius={250} width={'70%'} >
                    {children}
                </Box>
                :
                <>
                {children}
                </>
            }
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        width: getFontSizeByWindowWidth(230),
        height: getFontSizeByWindowWidth(230),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
}
)