import {Box, Button, Icon} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {CheckBox, RHFInput} from '@molecule';
import {newUserSchema} from '@zod';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const NewUser = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, defaultValues, submitCount},
  } = useForm({
    resolver: zodResolver(newUserSchema({max: 10000, currency: '$'})),
    defaultValues: {
      amount: '',
      beneficiary: false,
      phoneNumber: '',
      reason: '',
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraHeight={150}
      // viewIsInsideTabBar
      // extraScrollHeight={25}
      // extraScrollHeight={250}
      style={{
        // backgroundColor: 'red',
        flexGrow: 1,
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
        // paddingTop: gsh(23),
      }}>
      <Box
        style={{
          flexGrow: 1,
          // marginTop: getFontSizeByWindowHeight(20)
        }}
        //   mt={'vm'}
        mt={'vm'}
        px={'hm'}
        gap={'vm'}>
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
          label="Reason (Optional)"
          name={'reason'}
          control={control}
          labelBackgroundColor="white"
          required
          keyboardType="default"
        />

        <Box pl={'hxxs'} mt={'vsm'}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <CheckBox
                gap={16}
                label="Save as beneficiary"
                checked={value!}
                //   @ts-ignore
                onChange={e => {
                  onChange(!value);
                }}
              />
            )}
            name={'beneficiary'}
          />
        </Box>
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
  );
};

export default NewUser;
