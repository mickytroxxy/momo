import {PayBeneficiaryScreenProps} from '@/typings/navigation';
import {payBeneficiarySchema} from '@/utils/zod/paybeneficiary';
import {Box, Button, Icon, SafeAreaContainer} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {BackHeadingX, RHFInput} from '@molecule';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PayBeneficiary = () => {
  const {navigate} = useNavigation<PayBeneficiaryScreenProps['navigation']>();
  const {
    params: {phoneNumber, name},
  } = useRoute<PayBeneficiaryScreenProps['route']>() ?? {};
  const {control, handleSubmit} = useForm({
    resolver: zodResolver(payBeneficiarySchema({max: 10000, currency: '$'})),
    defaultValues: {
      amount: '',
      name,
      phoneNumber,
      reason: '',
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    navigate('confirmpaymentscreen', {
      data,
    });
  };
  return (
    <SafeAreaContainer bg={'white'}>
      <BackHeadingX title="Pay beneficiary" />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={150}
        style={{
          flexGrow: 1,
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white'
        }}>
        <Box
          style={{
            flexGrow: 1,
          }}
          mt={'vm'}
          px={'hm'}
          gap={'vm'}>
          <RHFInput
            name={'name'}
            control={control}
            labelBackgroundColor="white"
            required
            // mask="9999 999 9999"
            keyboardType="phone-pad"
            label="Beneficiary name"
          />
          <RHFInput
            name={'phoneNumber'}
            control={control}
            labelBackgroundColor="white"
            required
            mask="9999 999 9999"
            rightComponent={'PersonplusIcon'}
            keyboardType="phone-pad"
            label="Enter Number"
          />
          <RHFInput
            name={'amount'}
            label={'Amount *'}
            control={control}
            labelBackgroundColor="white"
            kurrency="₦"
            keyboardType="decimal-pad"
            number
            max="100 000"
            alignRight
          />

          <RHFInput
            name={'reason'}
            control={control}
            labelBackgroundColor="white"
            keyboardType="phone-pad"
            label="Reason (Optional)"
          />

          <Box mt={'vsm'}>
            <Button
              onPress={handleSubmit(onSubmit)}
              size="fullWidth"
              variant="primary"
              label="next"
            />
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </SafeAreaContainer>
  );
};

export default PayBeneficiary;
