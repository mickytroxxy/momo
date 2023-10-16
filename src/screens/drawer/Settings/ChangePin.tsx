import { getFontSizeByWindowHeight, getFontSizeByWindowWidth } from '@/style/theme'
import { Box, Button, Text } from '@atom'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { RHFInput } from '@molecule';
import { useNavigation } from '@react-navigation/native';


export const ChangePinFormSchema = z.object({
    PIN: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
        .min(5, { message: 'Enter a valid PIN' }),
    NEWPIN: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
        .min(5, { message: 'Enter a valid PIN' }),
    CONFIRMPIN: z
        .string()
        .nonempty({ message: 'This field cannot be empty' })
        .min(5, { message: 'Enter a valid PIN' }),
})
    .refine(schema =>
        schema.NEWPIN === schema.CONFIRMPIN ? true : false, {
        message: 'PIN entered doesnot match',
        path: ['CONFIRMPIN']
    });


export type ChagnePinFormType = z.infer<typeof ChangePinFormSchema>;


export default function ChangePin() {
    const maxInput = 5
    const [invalue, setInvalue] = useState('');
    const { control, handleSubmit, formState } = useForm<ChagnePinFormType>({
        resolver: zodResolver(ChangePinFormSchema),
        mode: 'onChange'
    });
    const [disabled, setDisabled] = useState(!formState.isValid);

    const { navigate, goBack } = useNavigation()

    useEffect(() => {
        setDisabled(!formState.isValid);
    }, [formState]);



    const onSubmit = (data: any) => {
        console.log(data)
        control._reset()
        navigate('ChangePinStatus', {
            status: 'success'
        })
    }

    return (
        <Box flex={1} justifyContent={'space-between'} bg={'white'} px={'hl'} py={'vl'} >
            <Box>
                <Text fontFamily={'MTNBrighterSans'} fontWeight={'400'} style={{ fontSize: getFontSizeByWindowWidth(16) }} color={'grey'} >Enter a 5 digit security PIN for your
                    wallet</Text>
                <Box marginVertical={'vm'} >
                    <RHFInput
                        label={'Current PIN'}
                        name={'PIN'}
                        isPassword
                        control={control}
                        required={true}
                        maxLength={maxInput}
                        keyboardType='numeric'
                    />
                </Box>
                <Box marginVertical={'vm'} >
                    <RHFInput
                        label={'New PIN'}
                        name={'NEWPIN'}
                        isPassword
                        control={control}
                        required={true}
                        maxLength={maxInput}
                        keyboardType='numeric'
                    />
                </Box>
                <Box marginVertical={'vm'} >
                    <RHFInput
                        label={'Confirm new PIN'}
                        name={'CONFIRMPIN'}
                        isPassword
                        control={control}
                        required={true}
                        maxLength={maxInput}
                        keyboardType='numeric'
                    />
                </Box>
            </Box>
            <Box width={'100%'}  >
                <Button
                    bStyle={{ alignSelf: 'center' }}
                    onPress={handleSubmit(onSubmit)}
                    label="Next"
                    variant="primary"
                    size='fullWidth'
                    disabled={disabled}
                />
            </Box>
        </Box>
    )
}