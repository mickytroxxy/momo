import {SvgIconType} from '@/constants/icon';
import {fontFamily} from '@/style/theme';
import {OnboardScreenProps} from '@/typings/navigation';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Button, Icon} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {RHFInput} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import {createPINSchema, createPINSchemaType} from '@zod/createpin/createpin';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';

type StatusType = 'error' | 'success' | 'normal';
type ValidationItemType = {
  status: StatusType;
  text?: string;
  icon?: SvgIconType;
};

const CreatePin = () => {
  const {navigate} = useNavigation<OnboardScreenProps['navigation']>();
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, dirtyFields},
    watch,
  } = useForm<createPINSchemaType>({
    resolver: zodResolver(createPINSchema()),
    // mode: 'onChange',
    defaultValues: {
      'Create PIN': '',
      'Confirm PIN': '',
    },
  });
  const create = watch('Create PIN');
  const confirm = watch('Confirm PIN');
  const Ikon: Record<string, SvgIconType> = {
    error: 'XCircle',
    success: 'CheckCircle',
    normal: 'InfoIcon',
  };
  const vColor = {
    error: '#ED3434',
    success: '#0FAF4B',
    normal: '#5F5F5F',
  };
  console.log('errors', isDirty, dirtyFields);
  const ValidationItem = ({status, text}: ValidationItemType) => {
    return (
      <Box gap={'hxxs'} flexDirection={'row'} alignItems={'center'}>
        <Icon name={Ikon[status]} size={16} color={vColor[status]} />
        <Text
          style={[
            styles.validationText,
            {
              color: vColor[status],
            },
          ]}>
          {text}
        </Text>
      </Box>
    );
  };
  const check4digit: () => StatusType = () => {
    if (Object.keys(errors).length === 0 && !isDirty) {
      return 'normal';
    }
    return create.length !== 4 ? 'error' : 'success';
  };
  const sequenceCheck: () => StatusType = () => {
    if (Object.keys(errors).length === 0 && !isDirty) {
      return 'normal';
    }
    const isSequence = /1234|2345|3456|4567|5678|6789|7890/.test(create);
    return isSequence || create.length !== 4 ? 'error' : 'success';
  };
  const repeatCheck: () => StatusType = () => {
    if (Object.keys(errors).length === 0 && !isDirty) {
      return 'normal';
    }
    return /(.)\1{3}/.test(create) || create.length !== 4 ? 'error' : 'success';
  };
  const sameCheck: () => StatusType = () => {
    if (Object.keys(errors).length === 0 && !isDirty) {
      return 'normal';
    }
    return create !== confirm ? 'error' : 'success';
  };

  const onSubmit = (data: any) => {
    console.log(data);
    navigate('authstatus', {
      type: 'success',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter a 4 digit security PIN for your wallet
      </Text>
      <Box gap={'vm'}>
        <RHFInput
          name={'Create PIN'}
          control={control}
          required
          isPassword
          noError
        />
        <RHFInput
          name={'Confirm PIN'}
          control={control}
          required
          isPassword
          noError
        />
        <Box
          gap={'hxxs'}
          bg={'extraLightGrey'}
          px={'hsm'}
          py={'vsm'}
          borderRadius={gpsw(9)}>
          <ValidationItem text="Enter 4 digit PIN" status={check4digit()} />
          <ValidationItem
            text="Don’t use numbers in sequence, e.g 1234"
            status={sequenceCheck()}
          />
          <ValidationItem
            text="Don’t repeat numbers, e.g 0000 or 1111"
            status={repeatCheck()}
          />
          <ValidationItem
            text="Don’t use your date of birth"
            status={repeatCheck()}
          />
          <ValidationItem
            text="PIN entered does not match"
            status={sameCheck()}
          />
        </Box>
      </Box>
      <Button
        bStyle={{marginTop: 'auto'}}
        onPress={handleSubmit(onSubmit)}
        label="CREATE PIN"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: gpsw(20),
    paddingVertical: gpsh(20),
    flex: 1,
    backgroundColor: 'white',
  },
  labelText: {
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
  },
  labelTextLink: {
    color: '#003654',
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    fontFamily: fontFamily('Regular'),
  },
  title: {
    fontSize: gpsw('16'),
    lineHeight: gpsh('20.8'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
    marginBottom: gpsh(20),
  },
  validationText: {
    color: '#5F5F5F',
    fontSize: gpsw('10'),
    lineHeight: gpsh('13'),
    fontFamily: fontFamily('Regular'),
  },
});
export default CreatePin;
