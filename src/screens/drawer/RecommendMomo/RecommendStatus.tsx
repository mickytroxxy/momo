import { StyleSheet, } from 'react-native'
import React, { useEffect } from 'react'
import { IllustrationImages } from '@/constants/images';
import { NavigationAction, RouteProp, useNavigation } from '@react-navigation/native';
import { globalGrey, globalMoMoBlue } from '@/style-dictionary-dist/momoStyle';
import { getFontSizeByWindowHeight, getFontSizeByWindowWidth } from '@/style/theme';
import { Box, Button, Text } from '@atom';
import { CurvedHeaderBg } from '@molecule';
import IllustrationBackground from '@/component/molecule/Card/IllustrationBackground';


type buttonType = 'Done' | 'Try Again' | 'Next' | 'Go Back'

interface statusScreenDetailsType {
    status: 'success' | 'failure' | 'progress'
    title: string,
    description: string,
    illustration: keyof typeof IllustrationImages,
    button1?: buttonType,
    button2?: buttonType,
}

const recommendMomoStatusDetails: statusScreenDetailsType[] = [
    {
        title: 'Recommendation successful',
        description: 'You will get 300MB when phonenumber downloads and opens the app',
        button1: 'Done',
        illustration: 'Success',
        status: 'success'
    },
    {
        title: 'Recommendation failed',
        description: 'Try Again',
        button1: 'Try Again',
        illustration: 'NetworkError',
        status: 'failure'
    },
    {
        title: 'Recommendation In Progress',
        description: 'Try Again',
        illustration: 'CallCenter',
        status: 'progress'
    },

]


type RecommendMomoStatusType = {
    status: 'success' | 'failure' | 'progress';
    phonenumber?: string;
    button1?: buttonType;
    button2?: buttonType;
    title?: string;
    description?: string;
    illustrationImage?: keyof typeof IllustrationImages
}


export type StatusScreenPropsType = {
    route: RouteProp<{ params: RecommendMomoStatusType }, 'params'>;
    navigation: NavigationAction
}

const RecommendMomoStatus = (props: StatusScreenPropsType) => {
    const { status, phonenumber, } = props.route.params
    let statusScreenDetails: statusScreenDetailsType[] = recommendMomoStatusDetails.filter((item) => item.status == status)

    let { title, description, button1, button2, illustration } = statusScreenDetails[0]

    const { navigate, goBack } = useNavigation();


    const _renderIllustrationImage = () => {
        // let Image = illustration ? IllustrationImages[illustrationImage] :
        // IllustrationImages[statusScreenDetails[0].illustration]
        let Image = IllustrationImages[illustration]
        return <Image width={getFontSizeByWindowWidth(180)} height={getFontSizeByWindowWidth(180)} />
    }

    const _renderButton = (buttonType: buttonType) => {
        if (buttonType == 'Done') {
            return (<Button label={buttonType} variant='primary' size='fullWidth' onPress={() => navigate('mainstack')} />)
        } else if (buttonType == 'Next') {
            return (<Button label={buttonType} variant='primary' size='fullWidth' />)
        } else if (buttonType == 'Try Again') {
            return (<Button label={buttonType} variant='primary' size='fullWidth' onPress={() => goBack()} />)
        } else {
            return (<Button label={`Something Wen't Wrong`} variant='primary' size='fullWidth' />)
        }
    }

    return (
        <Box flex={1} justifyContent={'space-between'}   >
            <CurvedHeaderBg >
                <IllustrationBackground style={{ alignSelf: 'center', justifyContent: 'flex-start', position: 'absolute', bottom: '-30%', }}>
                    {_renderIllustrationImage()}
                </IllustrationBackground>
            </CurvedHeaderBg>
            <Box alignItems={'center'} mt={'vxl'} px={'hl'} >
                <Text variant={'headings'} style={[styles.statusTitle]} >{title}</Text>
                <Text style={[styles.statusDescription]} >{phonenumber ? description.replace('phonenumber', phonenumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')) : description}</Text>
            </Box>
            <Box my={'vs'} px={'hl'}  >
                {button1 && (<Box my={'vxxs'} >
                    {_renderButton(button1)}
                </Box>)}
                {button2 && (<Box my={'vxxs'} >
                    {_renderButton(button2)}
                </Box>)}
            </Box>

        </Box>
    )
}


const styles = StyleSheet.create({
    statusTitle: {
        color: globalMoMoBlue,
        fontSize: getFontSizeByWindowWidth(21),
        fontWeight: '500',
        textAlign: 'center'

    },
    statusDescription: {
        fontSize: getFontSizeByWindowWidth(16),
        lineHeight: getFontSizeByWindowWidth(24),
        color: globalGrey,
        marginVertical: getFontSizeByWindowWidth(10),
        textAlign: 'center',
        fontWeight: '400',
        fontFamily: 'MTNBrighterSans-Regular',
    }
})


export default RecommendMomoStatus




