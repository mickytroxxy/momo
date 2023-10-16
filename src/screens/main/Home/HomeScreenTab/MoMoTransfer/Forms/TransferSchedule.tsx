import {selectRenderItemType} from '@/component/molecule/Dropdown/DropdownSearch';
import {
  getFontSizeByWindowWidth,
  getFontSizeByWindowHeight as gsh,
} from '@/style/theme';
import {Box, Button, Text, TouchableOpacity} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {CheckBox, Dropdown} from '@molecule';
import {
  TransferScheduleType,
  transferScheduleSchema,
} from '@zod/transfer/transferSchedule';
import {useEffect} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import Animated, {FadeInUp, Layout} from 'react-native-reanimated';
import {useTransferFormState} from '../MoMoTransferContext';

const repeatOptions = [
  {label: 'Monthly', value: 'Monthly'},
  {label: 'Weekly', value: 'Weekly'},
];
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
const TransferSchedule = () => {
  const {onHandleNext, setTransferFormData, transferFormData} =
    useTransferFormState();
  console.log('transferFormData', transferFormData);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm<TransferScheduleType>({
    resolver: zodResolver(transferScheduleSchema),
    defaultValues: transferFormData,
    // values: transferFormData,
  });
  console.log('errors', errors);
  useEffect(() => {
    setValue('Start date', transferFormData?.['Start date']);
    setValue('end', transferFormData?.end);
    setValue('Repeat', transferFormData?.Repeat);
    setValue('setEndDate', transferFormData?.setEndDate);
  }, [setValue]);
  const showEndDate = watch('setEndDate');
  const onSubmit: SubmitHandler<TransferScheduleType> = (data: any) => {
    console.log('data', data);
    setTransferFormData((prev: any) => ({...prev, ...data}));
    onHandleNext();
  };
  return (
    <Box flex={1} py={'vm'} pb={'vxl'} px={'hm'}>
      <Box flex={1}>
        <Controller
          control={control}
          render={({
            field: {onChange, onBlur, value, ref},
            fieldState: {error},
          }) => (
            <Dropdown
              onSelect={onChange}
              value={value}
              calendar
              label={'From date'}
              hasError={error}
            />
          )}
          name={'Start date'}
        />
        <Box zIndex={-10} my={'vm'}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <CheckBox
                gap={16}
                label="Set payment end date"
                checked={value!}
                onChange={e => {
                  onChange(!value);
                }}
              />
            )}
            name={'setEndDate'}
          />
        </Box>
        {showEndDate && (
          <Animated.View
            style={{
              zIndex: -20,
              marginBottom: gsh(20),
            }}
            // layout={Layout.duration(9000).delay(90000)}
            layout={Layout.delay(20000)}
            entering={FadeInUp}
            // exiting={FadeOutUp}
            // exiting={FadeOutDown}
          >
            <Controller
              control={control}
              render={({
                field: {onChange, onBlur, value, ref},
                fieldState: {error},
              }) => (
                <Dropdown
                  onSelect={onChange}
                  value={value}
                  calendar
                  label={'From date'}
                  hasError={error}
                />
              )}
              name={'end'}
            />
          </Animated.View>
        )}
        <Animated.View
          style={{
            zIndex: -30,
            marginBottom: gsh(20),
          }}
          layout={Layout.duration(0)}
          // layout={Layout.damping(10000).springify()}
          // layout={Layout.damping(1000)}
        >
          <Controller
            control={control}
            render={({field: {onChange, value}, fieldState: {error}}) => {
              return (
                <Dropdown
                  renderItem={renderItem}
                  data={repeatOptions}
                  onSelect={onChange}
                  value={value}
                  hasError={error}
                  label="Schedule payment*"
                />
              );
            }}
            name={'Repeat'}
          />
        </Animated.View>
      </Box>
      <Box zIndex={-4}>
        <Button
          label="Next"
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </Box>
  );
};

export default TransferSchedule;
