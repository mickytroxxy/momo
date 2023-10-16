import DropdownSearch, { selectRenderItemType } from '@/component/molecule/Dropdown/DropdownSearch';
import { banksData } from '@/fixtures/dummyData';
import { globalExtraLightGrey } from '@/style-dictionary-dist/momoStyle';
import { getFontSizeByWindowHeight as gsh, getFontSizeByWindowWidth as gsw } from '@/style/theme';
import { PayBeneficiaryScreenProps } from '@/typings/navigation';
import { Box, Button, Icon, ScrollView, Text, TouchableOpacity } from '@atom';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckBox, Dropdown, RHFInput } from '@molecule';
import { useNavigation } from '@react-navigation/native';
import { newUserSchema } from '@zod/banktransfer/newuser';
import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const NewUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, defaultValues, submitCount, isValid },
    clearErrors,
    setFocus
  } = useForm({
    resolver: zodResolver(newUserSchema(({ max: 10000, currency: '₦ ' }))),
    defaultValues: {
      amount: '',
      beneficiary: false,
      searchBank: '',
      accountNumber: '',
      reason: '',
    },
    mode: 'onChange'
  });

  const [disabled, setDisabled] = useState(!isValid);
  const { navigate } = useNavigation<PayBeneficiaryScreenProps['navigation']>();


  const renderItem = ({ item, onItemPress, selected }: selectRenderItemType) => {
    return (
      <TouchableHighlight
        underlayColor={'inherit'}
        activeOpacity={0.7}
        testID="tes"
        style={{
          backgroundColor: item.value === selected ? globalExtraLightGrey : 'transparent',
          height: gsh(34),
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}
        onPress={() => {
          onItemPress(item)
          setFocus('accountNumber')
        }}>
        <Text
          fontFamily="MTNBrighterSans-Regular"
          fontSize={gsw(16)}
          color={'black'}>
          {item['label']}
        </Text>
      </TouchableHighlight>
    );
  };

  const onSubmit = (data: any) => {
    console.log(data);
    navigate('confirmpaymentscreen', {
      data: data
    });
  };

  useEffect(() => {
    setDisabled(!isValid);
  }, [isValid]);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraHeight={150}
      style={{
        flexGrow: 1,
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <Box
        style={{
          flexGrow: 1,
        }}
        my={'vm'}
        px={'hm'}
        gap={'vm'} >

        <Box zIndex={3}>
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Dropdown
                  renderItem={renderItem}
                  data={banksData}
                  // @ts-ignore
                  onSelect={value => {
                    onChange(value as string)
                  }}
                  value={value}
                  hasError={error}
                  label="Search bank"
                  placeHolder='Search bank'
                  clearError={() => clearErrors('searchBank')}
                  search
                  required
                />
              );
            }}
            name={'searchBank'}
          />
        </Box>
        <Box zIndex={-3} >
          <RHFInput
            label={'Account number'}
            name={'accountNumber'}
            control={control}
            maxLength={10}
            required
            keyboardType="phone-pad"
            onSubmitEditing={() => setFocus('amount')}
          />
        </Box>
        <RHFInput
          label={'Amount'}
          name={'amount'}
          control={control}
          labelBackgroundColor="white"
          kurrency="₦"
          required
          keyboardType="decimal-pad"
          number
          max="100 000"
          alignRight
          onSubmitEditing={() => setFocus('reason')}
        />
        <RHFInput
          label={'Enter reason'}
          name={'reason'}
          control={control}
          maxLength={20}
          keyboardType="default"
          onSubmitEditing={
            !isValid ? handleSubmit(onSubmit) : () => console.log('')
          }
        />
        <Box pl={'hxxs'} mt={'vxxs'}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
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
        <Box mt={'vxxs'}>
          <Button
            onPress={handleSubmit(onSubmit)}
            size="fullWidth"
            variant="primary"
            label="next"
            disabled={disabled}
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView >
  );
};

export default NewUser;
