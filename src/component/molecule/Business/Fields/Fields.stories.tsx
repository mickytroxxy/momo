import TouchableOpacity from '@/component/atom/TouchableOpacity';
import {AvailableAccount, techStack} from '@/fixtures/dummyData';
import {getFontSizeByWindowWidth as gsw} from '@/style/theme';
import {storyBookOtpType, storyOtpSchema} from '@/utils/zod/storyBook';
import {Box, Button, ScrollView, Text} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Meta, StoryObj} from '@storybook/react-native';
import React, {useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAvoidingView} from 'react-native';
import {DropdownRef, selectRenderItemType} from '../../Dropdown/DropdownSearch';
import AccountSelectorComp from './AccountSelectorDropdown';
import DropdownSearch from './Dropdown';

const DropdownMeta: Meta<typeof DropdownSearch> = {
  title: 'Business/Dropdown',
  component: DropdownSearch,
  decorators: [
    withBackgrounds,
    Story => (
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
        <ScrollView
          py={'vm'}
          // keyboardDismissMode="interactive"
          flex={1}
          keyboardShouldPersistTaps="handled"
          // keyboardShouldPersistTaps='always'
          contentContainerStyle={{
            paddingBottom: 100,
            justifyContent: 'center',
            flexGrow: 1,
          }}
          // px={'hm'}
          px={'hs'}>
          <Text
            textAlign={'center'}
            variant={'header'}
            mb={'vxl'}
            textDecorationLine={'underline'}>
            Dropdown
          </Text>
          <Story />
        </ScrollView>
      </KeyboardAvoidingView>
    ),
  ],
};

export const AccountSelector: StoryObj<typeof DropdownMeta> = {
  render: args => {
    const {control, handleSubmit, setError, clearErrors} = useForm<storyBookOtpType>({
      resolver: zodResolver(storyOtpSchema),
      defaultValues: {
        test1: undefined,
      },
    });
    const onSubmit = (data: any) => console.log(data);
    const triggerError = () => {
      setError('test1', {
        type: 'custom',
        message: 'Insufficient balance for this transaction',
      });
    };

    return (
      <Box>
        <Box gap={'vxs'} alignItems={'center'}>
          <Text color={'momoDarkBlue'} variant={'headings'}>
            Dropdown
          </Text>
          <Box flex={1} width={'100%'}>
            <Controller
              control={control}
              render={({field: {onChange, value}, fieldState: {error}}) => (
                <DropdownSearch
                  renderItem={AccountSelectorComp}
                  data={AvailableAccount}
                  onSelect={onChange}
                  // ref={dropRef}
                  value={value}
                  hasError={error}
                  label="Subject"
                  placeHolder="Choose Account"
                />
              )}
              name={'test1'}
            />
          </Box>
          <Box mt={'vxl'} gap={'vl'} zIndex={-1}>
            <Button
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              label="submit"
            />
          </Box>
          <Box zIndex={-1} mt={'vsm'}>
            <Button
              onPress={triggerError}
              variant="primary"
              label="Trigger Error 4 insufficient Balance"
            />
          </Box>
          <Box zIndex={-1} mt={'vsm'}>
            <Button
              onPress={()=> {
                clearErrors('test1')
              }}
              variant="primary"
              label='Clear Error'
            />
          </Box>
        </Box>
      </Box>
    );
  },
};
export default DropdownMeta;
