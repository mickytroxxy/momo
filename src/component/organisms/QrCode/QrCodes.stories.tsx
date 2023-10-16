import ScrollView from '../../atom/ScrollView';
import {Meta, StoryObj} from '@storybook/react-native';
import React, {useState} from 'react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Box, Text} from '../../atom';
import QStatic from './QrCodeStatic';
import QrDynamic from './QrCodeDynamic';
import QrSticker from './QrCodeSticker';
// import { Box, Text } from '@/component/atom';

const QrCodeMeta: Meta<typeof QStatic> = {
  title: 'QrCode',
  component: QStatic,
  argTypes: {
    disabled: {
      label: 'disabled',
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    withBackgrounds,
    Story => (
      <ScrollView
        flex={1}
        contentContainerStyle={{
          paddingBottom: 100,
          justifyContent: 'center',
          flexGrow: 1,
          // backgroundColor: 'grey',
        }}>
        <Story />
      </ScrollView>
    ),
  ],
};

type story = StoryObj<typeof QrCodeMeta>;

// export const Default: story = {};

export const QrCodeStatic: StoryObj<typeof QrCodeMeta> = {
  render: args => {
    const [checked, setchecked] = useState(false);
    return (
      <Box px={'hm'} bg={'extraLightGrey'} gap={'vxl'}>
        <Box gap={'vxs'} pt={'hm'} alignItems={'center'}>
          <QStatic
            ussd="*172#"
            merchantId="1000083"
            merchantName=" Michael’s Food Store (PTY) LTD"
            value="Tell me softly me wella"
          />
        </Box>
      </Box>
    );
  },
};

export const QrCodeDynamic: StoryObj<typeof QrCodeMeta> = {
  render: args => {
    return (
      <Box  bg={'extraLightGrey'} gap={'vxl'}>
        <Box pt={'hm'} gap={'vxs'} alignItems={'center'}>
          <QrDynamic
            ussd="*172#"
            merchantId="1000083"
            merchantName=" Michael’s Food Store (PTY) LTD"
            value="Tell me softly me wella"
          />
        </Box>
      </Box>
    );
  },
};

export const QrCodeSticker: StoryObj<typeof QrCodeMeta> = {
  render: args => {
    return (
      <Box flex={1} bg={'extraLightGrey'} gap={'vxl'}>
        <Box gap={'vxs'} pt={'vxl'} alignItems={'center'}>
          <QrSticker
            merchantId="1000083"
            merchantName=" Michael’s Food Store"
            value="lick me wella"
            {...args}
          />
        </Box>
      </Box>
    );
  },
};
export default QrCodeMeta;
