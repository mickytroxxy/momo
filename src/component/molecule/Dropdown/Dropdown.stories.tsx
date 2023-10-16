import TouchableOpacity from '@/component/atom/TouchableOpacity';
import countryData from '@/fixtures/countryData';
import {locationData, techStack} from '@/fixtures/dummyData';
import {
  getFontSizeByWindowWidth as gsw,
  getFontSizeByWindowHeight as gsh,
} from '@/style/theme';
import {
  storyBookCalendarType,
  storyBookOtpType,
  storyCalendarSchema,
  storyOtpSchema,
} from '@/utils/zod/storyBook';
import {zodResolver} from '@hookform/resolvers/zod';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Meta, StoryObj} from '@storybook/react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import {Box, Button, Text} from '../../atom';
import ScrollView from '../../atom/ScrollView';
import FLabelInput from '../FloatingLabelInput/FLabelInput';
import CountryDropdown from './CountryDropdown';
import DropdownSearch, {
  DropdownRef,
  selectRenderItemType,
} from './DropdownSearch';

const renderItem = ({item, onItemPress, selected}: selectRenderItemType) => {
  console.log('selectedss', selected);
  return (
    <TouchableOpacity
      bg={item.label === selected ? 'extraLightGrey' : 'transparent'}
      height={gsw(34)}
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

export const renderLocationItem = ({
  item,
  onItemPress,
  selected,
}: selectRenderItemType) => (
  <TouchableOpacity
    bg={item.label === selected ? 'extraLightGrey' : 'transparent'}
    // height={moderateScale(34)}
    justifyContent={'center'}
    px={'hs'}
    height={gsw(50)}
    testID="tes"
    zIndex={200}
    style={{
      paddingVertical: 5,
    }}
    onPress={() => onItemPress(item)}>
    <Text
      fontFamily="MTNBrighterSans-Regular"
      fontSize={gsw(16)}
      lineHeight={gsw(24)}
      color={'black'}>
      {item['label']}
    </Text>
    <Text fontSize={gsw(12)} lineHeight={gsw(15.6)} color={'grey'}>
      {item['value']}
    </Text>
  </TouchableOpacity>
);

export const renderCountryItem = ({
  item,
  onItemPress,
  selected,
}: selectRenderItemType) => {
  return (
    <TouchableOpacity
      bg={item.label === selected ? 'extraLightGrey' : 'transparent'}
      height={gsh(34)}
      justifyContent={'center'}
      px={'hs'}
      onPress={() => onItemPress(item)}>
      <Box
        flexDirection={'row'}
        gap={'hm'}
        justifyContent={'flex-start'}
        alignItems={'center'}>
        {<item.icon />}
        <Text
          fontFamily="MTNBrighterSans-Regular"
          fontSize={gsw(16)}
          style={{color: '#000'}}>
          {item['label']}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

const DropdownMeta: Meta<typeof DropdownSearch> = {
  title: 'Fields/Dropdown',
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

export const Dropdown: StoryObj<typeof DropdownMeta> = {
  render: args => {
    const {control, handleSubmit} = useForm<storyBookOtpType>({
      resolver: zodResolver(storyOtpSchema),
      defaultValues: {
        test1: undefined,
      },
    });
    const onSubmit = (data: any) => console.log(data);
    const dropRef = useRef<DropdownRef>(null);

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
                  renderItem={renderItem}
                  data={techStack}
                  onSelect={onChange}
                  // ref={dropRef}
                  value={value}
                  hasError={error}
                  label="Subject"
                />
              )}
              name={'test1'}
            />
          </Box>
          <Box mt={'vxl'} zIndex={-1}>
            <Button
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              label="submit"
            />
          </Box>
        </Box>
      </Box>
    );
  },
};

export const Search: StoryObj<typeof DropdownMeta> = {
  render: args => {
    const {control, handleSubmit, clearErrors} = useForm<storyBookOtpType>({
      resolver: zodResolver(storyOtpSchema),
      defaultValues: {
        test1: undefined,
      },
    });

    const clearError = useCallback(() => {
      clearErrors('test1');
    }, []);
    const onSubmit = (data: any) => {
      console.log(data);
      Keyboard.dismiss();
    };
    return (
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
        <Box>
          <Box gap={'vxs'} alignItems={'center'}>
            <Box zIndex={-1} gap={'vxs'} alignItems={'center'}>
              <Text color={'momoDarkBlue'} variant={'headings'}>
                Search
              </Text>
              <Controller
                control={control}
                render={({
                  field: {onChange, onBlur, value, ref},
                  fieldState: {error},
                }) => (
                  <DropdownSearch
                    renderItem={renderItem}
                    data={techStack}
                    testId={'tes'}
                    onSelect={onChange}
                    ref={ref}
                    value={value}
                    hasError={error}
                    label="Subject"
                    clearError={clearError}
                    search
                  />
                )}
                name={'test1'}
              />
              <Box mt={'vxl'} zIndex={-1}>
                <Button
                  onPress={handleSubmit(onSubmit)}
                  variant="primary"
                  label="submit"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    );
  },
};

export const Location: StoryObj<typeof DropdownMeta> = {
  render: args => {
    const {control, handleSubmit, clearErrors} = useForm<storyBookOtpType>({
      resolver: zodResolver(storyOtpSchema),
      defaultValues: {
        test1: undefined,
      },
    });
    // const clearError = () => {
    //   clearErrors('test1')
    // }
    const clearError = useCallback(() => {
      clearErrors('test1');
    }, []);

    const onSubmit = (data: any) => {
      Keyboard.dismiss();
      console.log(data);
    };
    return (
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
        <Box>
          <Box gap={'vxs'} >
            <Box zIndex={-1} gap={'vxs'} alignItems={'center'}>
              <Text color={'momoDarkBlue'} variant={'headings'}>
                Search
              </Text>
              <Controller
                control={control}
                render={({
                  field: {onChange, ref, value},
                  fieldState: {error},
                }) => {
                  console.log('ref', ref);
                  return (
                    <DropdownSearch
                      renderItem={renderLocationItem}
                      data={locationData}
                      label="Search banks"
                      onSelect={onChange}
                      ref={ref}
                      value={value}
                      hasError={error}
                      search
                      location
                      clearError={clearError}
                    />
                  );
                }}
                name={'test1'}
              />

              <Box mt={'vs'} width={'100%'}>
                <DropdownSearch
                  renderItem={renderLocationItem}
                  data={locationData}
                  label="Search iop"
                  // onSelect={onChange}
                  // ref={ref}
                  value={'value'}
                  // hasError={error}
                  search
                  location
                  // clearError={clearError}
                />
              </Box>
              <Box mt={'vxl'} zIndex={-1}>
                <Button
                  onPress={handleSubmit(onSubmit)}
                  variant="primary"
                  label="submit"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    );
  },
};

export const CountrySelector: StoryObj<typeof DropdownMeta> = {
  render: args => {
    const [invalue, setInvalue] = useState('');
    const [selected, setSelected] = useState(countryData[0]);
    return (
      <Box>
        <Box gap={'vm'} alignItems={'center'}>
          <Text
            textDecorationLine={'underline'}
            color={'black'}
            variant={'headings'}>
            Dropdown - Select Country
          </Text>
          <Box
            gap={'hxs'}
            flexDirection={'row'}
            justifyContent={'space-between'}>
            <Box flex={0.25}>
              <CountryDropdown
                renderItem={renderCountryItem}
                data={countryData}
                onSelect={setSelected}
                value={selected}
                placeHolder="S"
                INPUT_HEIGHT={57}
                paddingContainer={'20'}
              />
            </Box>
            <Box flex={0.75}>
              <FLabelInput
                labelBackgroundColor="white"
                label="Phone Number"
                value={invalue}
                onChangeText={setInvalue}
                animationDuration={5}
                required
                mask="9999 999 9999"
                maskType="phone"
                keyboardType="phone-pad"
              />
            </Box>
          </Box>
        </Box>

        <Box mt={'vxl'} gap={'vm'} alignItems={'center'}>
          <Text
            textAlign={'center'}
            color={'black'}
            variant={'headings'}
            textDecorationLine={'underline'}>
            Dropdown - Select Country (Without Number)
          </Text>
          <Box
            gap={'hxs'}
            flexDirection={'row'}
            justifyContent={'space-between'}>
            <Box flex={0.25} alignSelf={'flex-start'}>
              <CountryDropdown
                renderItem={renderCountryItem}
                data={countryData}
                onSelect={setSelected}
                value={selected}
                placeHolder="S"
                INPUT_HEIGHT={57}
                paddingContainer={'hm'}
              />
            </Box>
            <Box flex={0.75} />
          </Box>
        </Box>
      </Box>
    );
  },
};

export const Calendar: StoryObj<typeof DropdownMeta> = {
  render: args => {
    const {
      control,
      handleSubmit,
      formState: {errors},
    } = useForm<storyBookCalendarType>({
      resolver: zodResolver(storyCalendarSchema),
      defaultValues: {
        from: undefined,
      },
    });
    const onSubmit = (data: any) => console.log(data);
    return (
      <Box>
        <Box gap={'vxs'} alignItems={'center'}>
          <Box zIndex={-1} gap={'vxs'} alignItems={'center'}>
            <Text color={'momoDarkBlue'} variant={'headings'}>
              Calendar
            </Text>
            <Controller
              control={control}
              render={({
                field: {onChange, onBlur, value, ref},
                fieldState: {error},
              }) => (
                //@ts-ignore
                <DropdownSearch
                  onSelect={onChange}
                  value={value}
                  calendar
                  label={'From date'}
                />
              )}
              name={'from'}
            />
          </Box>
        </Box>
      </Box>
    );
  },
};

export default DropdownMeta;
