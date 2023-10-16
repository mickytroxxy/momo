import ScrollView from '../../atom/ScrollView';
import {Meta, StoryObj} from '@storybook/react-native';
import React, {useState} from 'react';
import LinearProgressBar from './LinearProgressBar';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Box, Text} from '../../atom';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/typings/globalTheme';
// import { Box, Text } from '@/component/atom';

const LinearProgressBarMeta: Meta<typeof LinearProgressBar> = {
  title: 'Controls/LinearProgressBar',
  component: LinearProgressBar,
  args: {
    label: 'Add Label Here',
  },
  decorators: [
    withBackgrounds,
    Story => (
      <ScrollView
        pt={'vm'}
        flex={1}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}
        // px={'hm'}
      >
        <Text
          textAlign={'center'}
          variant={'header'}
          textDecorationLine={'underline'}
          color={'momoDarkBlue'}>
          LinearProgressBar
        </Text>
        <Story />
        <LinearProgressBar progress={60} total={100} />
      </ScrollView>
    ),
  ],
};

type story = StoryObj<typeof LinearProgressBarMeta>;

// export const Default: story = {};

export const LinearProgress: StoryObj<typeof LinearProgressBarMeta> = {
  render: args => {
    return (
      <Box gap={'vsm'} px={'hxxs'}>
        <Text color={'white'} variant={'headings'}>
          Linear Progress
        </Text>
        <LinearProgressBar progress={10} total={100} />
        <LinearProgressBar progress={20} total={100} />
        <LinearProgressBar progress={30} total={100} />
        <LinearProgressBar progress={40} total={100} />
        <LinearProgressBar progress={50} total={100} />
        <LinearProgressBar progress={60} total={100} />
        <LinearProgressBar progress={70} total={100} />
        <LinearProgressBar progress={80} total={100} />
        <LinearProgressBar progress={90} total={100} />
        <LinearProgressBar progress={100} total={100} />
      </Box>
    );
  },
};

export default LinearProgressBarMeta;
