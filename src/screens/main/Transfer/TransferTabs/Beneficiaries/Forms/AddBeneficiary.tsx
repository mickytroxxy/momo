import {selectRenderItemType} from '@/component/molecule/Dropdown/DropdownSearch';
import SearchModal from '@/component/molecule/Dropdown/SearchModal';
import {banksData} from '@/fixtures/dummyData';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {
  Box,
  Button,
  Icon,
  SafeAreaContainer,
  Text,
  TouchableOpacity,
} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {BackHeadingX, Dropdown, RHFInput} from '@molecule';
import {StatusAction} from '@organisms';
import {useTheme} from '@shopify/restyle';
import {
  addBeneficiarySchema,
  addBeneficiaryType,
} from '@zod/beneficiary/addBeneficiary';
import React, {useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {FlatList} from 'react-native-gesture-handler';

const transactionTypeOption = [
  {label: 'MoMo User', value: 'MoMo User'},
  {label: 'Bank transfer', value: 'Bank transfer'},
];
export const HEIGHT = 1000;
export const OVERDRAG = 0;

export default function AddBeneficiary() {
  const {spacing} = useTheme<Theme>();
  const [modalstate, setModalState] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: {isValid, errors},
    setFocus,
    clearErrors,
    watch,
    setValue,
  } = useForm<addBeneficiaryType>({
    resolver: zodResolver(addBeneficiarySchema),
    mode: 'onChange',
  });
  const [renderStatus, setRenderStatus] = useState(false);
  const isBankTransfer = watch('transactionType') == 'Bank transfer';

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
          fontSize={gsw(16)}
          color={'black'}>
          {item['label']}
        </Text>
      </TouchableOpacity>
    );
  };

  const clearError = useCallback(() => {
    clearErrors('searchBank');
  }, []);

  const onSetValue = (value: string) => {
    setValue('searchBank', value);
  };

  const onSubmit = (data: any) => {
    control._reset();
    setRenderStatus(true);
    console.log(data);
    // @ts-ignore
  };

  if (renderStatus) {
    return (
      <StatusAction
        title="Beneficiary Saved"
        subtitle="You successfully saved Uche to your beneficiary list"
        share={false}
        onPress={() => setRenderStatus(false)}
      />
    );
  } else {
    return (
      <SafeAreaContainer>
        <BackHeadingX title="Add beneficiary" />
        <Box flex={1}>
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
              backgroundColor: 'white',
            }}>
            <Box
              style={{
                flexGrow: 1,
              }}
              mt={'vm'}
              px={'hm'}
              gap={'vm'}>
              <RHFInput
                label={'Beneficiary name'}
                name={'beneficiaryName'}
                control={control}
                maxLength={15}
                required
                keyboardType="default"
                onSubmitEditing={() => setFocus('transactionType')}
              />
              <Box zIndex={3}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}, fieldState: {error}}) => {
                    return (
                      <Dropdown
                        renderItem={renderItem}
                        data={transactionTypeOption}
                        // @ts-ignore
                        onSelect={value => onChange(value as string)}
                        value={value}
                        hasError={error}
                        label="Transaction type"
                        placeHolder="Transaction type *"
                        required
                      />
                    );
                  }}
                  name={'transactionType'}
                />
              </Box>
              <Box zIndex={2}>
                {/* SearchBank */}
                {isBankTransfer && (
                  <Box zIndex={2}>
                    <Controller
                      control={control}
                      render={({field: {onChange, onBlur, value}}) => (
                        <TouchableOpacity
                          onPress={() => setModalState(true)}
                          px={'hs'}
                          flexDirection={'row'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          borderWidth={1}
                          borderRadius={16}
                          height={gsh(56)}>
                          <Text variant={'regular16'}>
                            {value || 'Search Bank'}
                          </Text>
                          <Icon name="SearchIcon" size={24} />
                        </TouchableOpacity>
                      )}
                      name="searchBank"
                    />
                  </Box>
                )}
                {/* accountNumber */}
                {isBankTransfer && (
                  <Box mt={'vm'}>
                    <RHFInput
                      label={'Account number'}
                      name={'accountNumber'}
                      control={control}
                      maxLength={10}
                      required
                      keyboardType="phone-pad"
                      onSubmitEditing={() => setFocus('reason')}
                    />
                  </Box>
                )}
                {/* mobileNumber  */}
                {!isBankTransfer && (
                  <RHFInput
                    label={'Mobile number'}
                    name={'mobileNumber'}
                    control={control}
                    maxLength={10}
                    required
                    rightComponent={'PersonplusIcon'}
                    keyboardType="phone-pad"
                    // rightComponentPress={}
                    onSubmitEditing={() => setFocus('reason')}
                  />
                )}
              </Box>
              <RHFInput
                label={'Reason'}
                name={'reason'}
                control={control}
                maxLength={20}
                required
                keyboardType="default"
                onSubmitEditing={
                  !isValid ? handleSubmit(onSubmit) : () => console.log('')
                }
              />
              <Box
                style={{
                  marginTop: 'auto',
                }}>
                <Button
                  label="Save"
                  disabled={!isValid}
                  onPress={handleSubmit(onSubmit)}
                />
              </Box>
            </Box>
          </KeyboardAwareScrollView>
          <SearchModal
            searchValue={searchValue}
            setSearchValue={onSetValue}
            data={banksData}
            visible={modalstate}
            setVisible={setModalState}
          />
        </Box>
      </SafeAreaContainer>
    );
  }
}
