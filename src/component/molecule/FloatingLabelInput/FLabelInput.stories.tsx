import {useLoginMutation} from '@/api/nodeApi/session/api';
import icon from '@/constants/icon';
import {
  sbCurrencySchema,
  sbCurrencyType,
  storyBookFormSchema,
  storyBookFormType,
} from '@/utils/zod/storyBook';
import {Box, Button, ScrollView, Text} from '@atom';
import {zodResolver} from '@hookform/resolvers/zod';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Meta, StoryObj} from '@storybook/react-native';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import FLabelInput from './FLabelInput';
import RHFInput from './RHFInput';

const FLabelInputMeta: Meta<typeof FLabelInput> = {
  title: 'Fields/FLabelInput',
  component: FLabelInput,
  args: {
    // label: 'Add Label Here',
  },
  decorators: [
    withBackgrounds,
    Story => {
      return (
        <>
          <ScrollView
            py={'hsm'}
            flex={1}
            contentContainerStyle={{
              paddingBottom: 100,
              justifyContent: 'center',
              flexGrow: 1,
            }}
            px={'hm'}>
            <Text
              textAlign={'center'}
              variant={'header'}
              color={'momoDarkBlue'}
              mb={'vs'}
              textDecorationLine={'underline'}>
              Floating Label Input
            </Text>
            <Story />
          </ScrollView>
        </>
      );
    },
  ],
};

type story = StoryObj<typeof FLabelInputMeta>;

// export const Default: story = {};

export const NoIcon: StoryObj<typeof FLabelInputMeta> = {
  render: args => {
    const [invalue, setInvalue] = useState('');
    const {control, handleSubmit} = useForm<storyBookFormType>({
      resolver: zodResolver(storyBookFormSchema),
      defaultValues: {
        test1: '',
        test2: '',
      },
    });
    const onSubmit = (data: any) => console.log(data);
    return (
      <Box mt={'vl'} gap={'vsm'}>
        <Box gap={'vs'}>
          <RHFInput
            name={'test1'}
            isPassword
            control={control}
            labelBackgroundColor="white"
          />
        </Box>
        <Box gap={'vsm'}>
          {/* <RHFInput name={'Last name'} control={control} /> */}
          <RHFInput
            name={'test2'}
            control={control}
            labelBackgroundColor="white"
          />
          <Text textAlign={'center'}>
            (Press submit to trigger error state)
          </Text>
        </Box>

        <Box mt={'vl'} style={{marginTop: 10}}>
          <Button
            bStyle={{alignSelf: 'flex-end'}}
            onPress={handleSubmit(onSubmit)}
            label="submit"
            variant="primary"
            size="medium"
          />
        </Box>
      </Box>
    );
  },
};

export const LoginTest: StoryObj<typeof FLabelInputMeta> = {
  render: args => {
    const {control, handleSubmit} = useForm<storyBookFormType>({
      resolver: zodResolver(storyBookFormSchema),
      defaultValues: {
        test1: '',
        test2: '',
      },
    });

    const [login, {error, data}] = useLoginMutation();

    const onSubmit = async (data: any) => {
      // fetchbasequery call
      // const a = await login({
      //   email: 'testuser@gmail.com',
      //   password: 'Testuser@123',
      // });
      //axios call
      // const { status: loginStatus, error: loginError, data: loginData, refetch } = await dispatch(nodeAxiosApi.endpoints.login.initiate({
      //   email: "testuser@gmail.com",
      //   // password: "Testuser@123"
      // }))
      // loginData && console.log(loginData)
      // loginError && console.error(loginError)
      // loginStatus && console.log(loginStatus)
      // const { status: getUserStatus, error: getUserError, data: getUserData, refetch } = await dispatch(nodeAxiosApi.endpoints.getUsers.initiate({}))
      // getUserData && console.log(getUserData)
      // getUserError && console.log(getUserError)
      // getUserStatus && console.log(getUserStatus)
    };

    return (
      <Box gap={'vsm'}>
        <Box gap={'vs'}>
          <RHFInput
            name={'test2'}
            control={control}
            labelBackgroundColor="white"
          />
        </Box>
        <Box gap={'vs'}>
          <RHFInput
            name={'test1'}
            isPassword
            control={control}
            labelBackgroundColor="white"
          />
          <Text textAlign={'center'}>
            (Press submit to trigger error state)
          </Text>
        </Box>

        <Box mt={'vl'} style={{marginTop: 10}}>
          <Button
            bStyle={{alignSelf: 'flex-end'}}
            onPress={handleSubmit(onSubmit)}
            label="submit"
            variant="primary"
            size="medium"
          />
        </Box>
        <Box mt={'vl'} style={{marginTop: 10}}>
          <Button
            bStyle={{alignSelf: 'flex-end'}}
            onPress={onSubmit}
            label="Login"
            variant="primary"
            size="medium"
          />
        </Box>
      </Box>
    );
  },
};

export const WithIcon: StoryObj<typeof FLabelInputMeta> = {
  render: args => {
    const {control, handleSubmit} = useForm<storyBookFormType>({
      resolver: zodResolver(storyBookFormSchema),
      defaultValues: {
        test1: '',
      },
    });
    const onSubmit = (data: any) => console.log(data);
    const {PersonplusIcon} = icon;
    return (
      <Box gap={'vm'}>
        <RHFInput
          name={'test1'}
          control={control}
          labelBackgroundColor="white"
          required
          // maskType="phone"
          mask="9999 999 9999"
          rightComponent="PersonplusIcon"
          // keyboardType="numeric"
          keyboardType="phone-pad"
        />
        <Box mt={'vl'} style={{marginTop: 10}}>
          <Button
            bStyle={{alignSelf: 'flex-end'}}
            onPress={handleSubmit(onSubmit)}
            label="submit"
            variant="primary"
            size="medium"
          />
        </Box>
      </Box>
    );
  },
};

export const Currency: StoryObj<typeof FLabelInputMeta> = {
  render: args => {
    const [invalue, setInvalue] = useState('');
    const {
      control,
      handleSubmit,
      formState: {errors},
    } = useForm<sbCurrencyType>({
      resolver: zodResolver(sbCurrencySchema({max: 10000, currency: 'NGN'})),
      defaultValues: {
        test1: '',
        test2: '',
        // test2: undefined,
      },
    });
    const onSubmit = (data: any) => console.log(data);
    return (
      <Box gap={'vsm'}>
        <Text variant={'header'} textAlign={'center'} color={'momoDarkBlue'}>
          Right Text
        </Text>
        <FLabelInput
          labelBackgroundColor="white"
          label="Amount"
          value={invalue}
          onChangeText={setInvalue}
          animationDuration={10}
          required
          max={'10000'}
          currency="NGN"
          kurrency="NGN"
          alignRight
          // maskType='currency'
        />
        <Box gap={'vsm'}>
          <Text variant={'header'} textAlign={'center'} color={'momoDarkBlue'}>
            Left Text
          </Text>
          <RHFInput
            label={'Amount'}
            name={'test2'}
            control={control}
            labelBackgroundColor="white"
            kurrency="NGN"
            max={'10000'}
            keyboardType="decimal-pad"
            number
          />
          <Box>
            <Text textAlign={'center'}>
              (Press submit to trigger error state)
            </Text>
            <Text textAlign={'center'}>
              Error state is for fun and not a bug 😂
            </Text>
          </Box>
        </Box>
        <Box gap={'vs'}>
          <Text variant={'header'} textAlign={'center'} color={'momoDarkBlue'}>
            Secured Text Entry
          </Text>
          <RHFInput
            name={'test1'}
            isPassword
            control={control}
            labelBackgroundColor="white"
          />
        </Box>

        {/* <Box mt={'vl'} style={{marginTop: 0}}> */}
        <Button
          // bStyle={{alignSelf: 'flex-end'}}
          onPress={handleSubmit(onSubmit)}
          label="submit"
          variant="primary"
          // size="medium"
        />
        {/* </Box> */}
      </Box>
    );
  },
};

export default FLabelInputMeta;
