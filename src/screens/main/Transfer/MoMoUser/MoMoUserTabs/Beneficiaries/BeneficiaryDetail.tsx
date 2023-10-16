import { BenefeciaryDetailScreenProps } from '@/typings/navigation';
import {
    Box,
    Button,
    SafeAreaContainer
} from '@atom';
import { BackHeadingX, ConfirmDetailContainer, ConfirmItemDetail } from '@molecule';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

const MapKey = {
    name: 'Name',
    phoneNumber: 'Mobile number',
    transactionType: 'Transaction type',
    reason: 'Reason',
};
type MapKeyType = keyof typeof MapKey;

const BeneficiaryDetail = () => {
    const { goBack, navigate } = useNavigation<BenefeciaryDetailScreenProps['navigation']>();
    const {
        params: { data },
    } = useRoute<BenefeciaryDetailScreenProps['route']>() ?? {};
    console.log('data', data);

    return (
        <SafeAreaContainer bg={'white'} flex={1} flexGrow={1}>
            <BackHeadingX title="Beneficiary details" />
            <Box px={'hm'} pt={'vm'} flex={1} bg={'white'}>
                <ConfirmDetailContainer>
                    {Object.entries(data).map(([key, value]) => {
                        console.log(key in MapKey && (value !== undefined))
                        if (key in MapKey && (value !== undefined)) {
                            if (key in MapKey && (value !== '' || value)) {
                                // console.log('key @@ ', key)
                                return (
                                    <ConfirmItemDetail
                                        key={key}
                                        title={MapKey[key as MapKeyType]}
                                        value={value}
                                    />
                                );
                            }
                            return null
                        }
                        return null;
                    })}
                    {/* <ConfirmItemDetail title={'Txn fees'} value={'₦ 50'} /> */}
                </ConfirmDetailContainer>
                <Box justifyContent={'flex-end'} flex={1} pb={'vxl'}>
                    <Box gap={'vs'}>
                        <Button onPress={() => navigate('paybeneficiaryscreen', {
                            name: data.name,
                            phoneNumber: data.phoneNumber
                        })} label="pay" />
                        <Button onPress={() => goBack()} label="edit" variant="secondary" />
                    </Box>
                </Box>
            </Box>
        </SafeAreaContainer>
    );
};

export default BeneficiaryDetail;
