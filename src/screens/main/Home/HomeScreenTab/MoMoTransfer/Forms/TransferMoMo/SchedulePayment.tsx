import {Box, Button} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {RHFInput} from '@molecule';
import {
  SchedulePaymentSchema,
  SchedulePaymentSchemaType,
} from '@zod/transfer/schedulePayment';
import React from 'react';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTransferFormState} from '../../MoMoTransferContext';

const schedulePaymentOption = [
  {label: 'No', value: 'No'},
  {label: 'Yes', value: 'Yes'},
];

const SchedulePayment = () => {
  const {onHandleNext, setTransferFormData, transferFormData} =
    useTransferFormState();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {isValid, errors},
  } = useForm<SchedulePaymentSchemaType>({
    resolver: zodResolver(SchedulePaymentSchema({max: 10000, currency: '$'})),
    // defaultValues: transferFormData,
    // values: transferFormData,
    mode: 'all',
  });
  console.log('errors', errors);
  const onSubmit = (data: any) => {
    setTransferFormData((prev: any) => ({...prev, ...data}));
    onHandleNext();
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraHeight={150}
      style={{
        flexGrow: 1,
        flex: 1,
      }}
      bounces={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 50,
      }}>
      <Box
        style={{
          flexGrow: 1,
        }}
        mt={'vm'}
        px={'hm'}
        gap={'vm'}
        
        >
        <RHFInput
          name={'Receipient name'}
          control={control}
          labelBackgroundColor="white"
          required
          keyboardType="phone-pad"
          label="Receipient name"
        />
        <RHFInput
          name={'Number'}
          control={control}
          labelBackgroundColor="white"
          required
          mask="9999 999 9999"
          rightComponent={'PersonplusIcon'}
          keyboardType="phone-pad"
          label="Enter Number"
        />
        <RHFInput
          name={'Amount'}
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
          name={'Reference'}
          control={control}
          labelBackgroundColor="white"
          required
          mask="9999 999 9999"
          keyboardType="phone-pad"
          label="Reference (Optional)"
        />
        {/* DROPDOWN */}

        <Box
          zIndex={-1}
          mt={'vsm'}
          style={{
            marginTop: 'auto',
          }}>
          <Button
            onPress={handleSubmit(onSubmit)}
            size="fullWidth"
            variant="primary"
            label="next"
            // disabled={!isValid}
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default SchedulePayment;
