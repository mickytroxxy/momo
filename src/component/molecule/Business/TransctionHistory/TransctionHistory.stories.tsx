import {Box, ScrollView, Text} from '@atom';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Meta, StoryObj} from '@storybook/react-native';
import React, {useState} from 'react';
import TransactionCardComp from '../../Card/TransactionCard';
import TransactionHistoryItem from '../Card/TransactionHistory/TransactionHistoryItem';
import {FlatList, View} from 'react-native';
import {businessHistoryData} from '@/fixtures/dummyData';

const TransactionMeta: Meta<typeof TransactionHistoryItem> = {
  title: 'Business/Transactions',
  component: TransactionHistoryItem,
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
      <View
        style={{
          flex: 1,
        }}>
        <Story />
      </View>
    ),
  ],
};

type story = StoryObj<typeof TransactionMeta>;

// export const Default: story = {};

const renderTransactionItem = ({
  item: {number, type, name, credit,currency,amount,from},
  index,
}: any) => {
  return <TransactionHistoryItem {...{number, type, name, index, credit, currency, amount, from}} />;
};

export const TransactionCard: StoryObj<typeof TransactionMeta> = {
  render: args => {
    return (
      <Box mt={'vm'} gap={'vxl'}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Transaction History Card
        </Text>
        <Box py={'hl'} gap={'hm'} pb={'hxl'}>
          <TransactionHistoryItem
            credit
            number="+233 635 4691"
            type="Payment"
            name="Adwenpa Owusu"
            amount={388.00}
            currency='GHc'
            from='Transfers'
            index={2}
          />
          <TransactionHistoryItem
            number="+233 635 4691"
            type="Payment"
            name="Adwenpa Owusu"
            amount={3030.00}
            currency='GHc'
            from='Transfers'
            index={1}
          />
        </Box>
      </Box>
    );
  },
};
export const TransactionHistory: StoryObj<typeof TransactionMeta> = {
  render: args => {
    return (
      <Box mt={'vxs'} gap={'vxxs'}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Transaction History 
        </Text>
        <Box  py={'hl'} gap={'hm'} pb={'hxl'}>
          <FlatList
            data={businessHistoryData}
            bounces={false}
            contentContainerStyle={{
              paddingBottom: 20,
            }}
            renderItem={renderTransactionItem}
            keyExtractor={(item, index) => `${item?.name}-${index}`}
          />
        </Box>
      </Box>
    );
  },
};

export default TransactionMeta;
