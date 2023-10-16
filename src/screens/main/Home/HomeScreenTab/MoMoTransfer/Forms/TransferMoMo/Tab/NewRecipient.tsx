import {selectRenderItemType} from '@/component/molecule/Dropdown/DropdownSearch';
import {techStack} from '@/fixtures/dummyData';
import {
  getFontSizeByWindowWidth,
  getFontSizeByWindowHeight as gsh,
} from '@/style/theme';
import {Box, Button, Icon, Text, TouchableOpacity} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {CheckBox, Dropdown, RHFInput} from '@molecule';
import {
  NewRecipientSchema,
  NewRecipientSchemaType,
} from '@zod/transfer/newRecipientSchema';
import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTransferFormState} from '../../../MoMoTransferContext';

const schedulePaymentOption = [
  {label: 'No', value: 'No'},
  {label: 'Yes', value: 'Yes'},
];

const NewRecipient = () => {
  const {onHandleNext, setTransferFormData, transferFormData} =
    useTransferFormState();

  const {
    control,
    handleSubmit,
    setValue,
    formState: {isValid, isDirty},
  } = useForm<NewRecipientSchemaType>({
    resolver: zodResolver(NewRecipientSchema({max: 10000, currency: '$'})),
    defaultValues: transferFormData,
    // values: transferFormData,
    mode: 'all',
  });
  useEffect(() => {
    setValue('schedulepayment', transferFormData?.schedulepayment);
  }, [setValue]);
  const onSubmit = (data: any) => {
    setTransferFormData((prev: any) => ({...prev, ...data}));
    onHandleNext();
  };
  const renderItem = ({item, onItemPress, selected}: selectRenderItemType) => {
    return (
      <TouchableOpacity
        bg={item.value === selected ? 'extraLightGrey' : 'transparent'}
        height={gsh(34)}
        justifyContent={'center'}
        px={'hs'}
        testID="tes"
        zIndex={200}
        onPress={() => onItemPress(item)}>
        <Text
          fontFamily="MTNBrighterSans-Regular"
          fontSize={getFontSizeByWindowWidth(16)}
          color={'black'}>
          {item['label']}
        </Text>
      </TouchableOpacity>
    );
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
        gap={'vm'}>
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
          name={'reason'}
          control={control}
          labelBackgroundColor="white"
          required
          mask="9999 999 9999"
          keyboardType="phone-pad"
          label="Reason (Optional)"
        />
        {/* DROPDOWN */}
        <Box flex={1} width={'100%'}>
          <Controller
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => {
              return (
                <Dropdown
                  renderItem={renderItem}
                  data={schedulePaymentOption}
                  onSelect={onChange}
                  value={value}
                  hasError={error}
                  label="Schedule payment"
                  required
                />
              );
            }}
            name={'schedulepayment'}
          />
        </Box>
        <Box zIndex={-1} pl={'hxxs'} mt={'vsm'}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <CheckBox
                gap={16}
                label="Save as beneficiary"
                checked={value!}
                onChange={e => {
                  onChange(!value);
                }}
              />
            )}
            name={'beneficiary'}
          />
        </Box>
        <Box zIndex={-1} mt={'vsm'}>
          <Button
            onPress={handleSubmit(onSubmit)}
            size="fullWidth"
            variant="primary"
            label="next"
            disabled={!isValid}
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default NewRecipient;
