import {Meta, StoryObj} from '@storybook/react-native';
import React, {useState} from 'react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {ScrollView} from 'react-native';
import {Box, Text} from '@atom';
import {gpsw} from '@/utils/parseTokenStyle';
// import { Box, Text } from '@/component/atom';
import ResponseComp from './Success';

const ResponseMeta: Meta<typeof ResponseComp> = {
  title: 'Business/Success',
  component: ResponseComp,
  decorators: [
    withBackgrounds,
    Story => (
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}>
        <Story />
      </ScrollView>
    ),
  ],
};

type story = StoryObj<typeof ResponseMeta>;

// export const Default: story = {};

export const Response: StoryObj<typeof ResponseMeta> = {
  render: args => {
    return <ResponseComp />;
  },
};

export default ResponseMeta;
