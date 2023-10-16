import {Meta, StoryObj} from '@storybook/react-native';
import React, {RefObject, useEffect, useRef, useState} from 'react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {OtpInputsRef} from 'react-native-otp-inputs';
import { BusinessDropdownSingle } from './BusinessDropdown';
import { ScrollView, Text } from '@atom';

const OTPMeta: Meta<any> = {
  title: 'Business/Dropdown',
  component: BusinessDropdownSingle,
  args: {
    // label: 'Add Label Here',
  },
  decorators: [
    withBackgrounds,
    Story => {
      return (
        <>
          <ScrollView
            py={'vm'}
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
              mb={'vxl'}
              textDecorationLine={'underline'}>
              HELLO
            </Text>
            <Story />
          </ScrollView>
        </>
      );
    },
  ],
};

type story = StoryObj<typeof OTPMeta>;


export default OTPMeta;
