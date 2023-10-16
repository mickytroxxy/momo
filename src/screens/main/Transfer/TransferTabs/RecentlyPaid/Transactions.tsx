import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {TransactionData} from '@/fixtures/dummyData';
import {Theme} from '@/typings/globalTheme';
import {Box, Icon} from '@atom';
import {
  Card,
  Header,
  Pills,
  TopHeaderContent,
  TransactionCard,
} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

const Transactions = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme<Theme>();
  const [filteredData, setFilteredData] = useState(TransactionData);
  const [transactTabs, setTransactTabs] = useState<'All' | 'In' | 'Out'>('All');

  const handleFilter = (filterType: string) => {
    switch (filterType) {
      case 'All':
        setFilteredData(TransactionData);
        setTransactTabs('All');
        break;
      case 'In':
        setFilteredData(TransactionData.filter(v => !!v.credit));
        setTransactTabs('In');
        break;
      case 'Out':
        setFilteredData(TransactionData.filter(v => !v.credit));
        setTransactTabs('Out');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaContainer flex={1}>
      <Header py={'vm'}>
        <TopHeaderContent
          right={{
            rightComp: (
              <Icon onPress={() => goBack()} name="HeaderXIcon" size={16} />
            ),
          }}
          left={{
            leftComp: (
              <Icon
                onPress={() => goBack()}
                name="BackIcon"
                color={'white'}
                size={16}
              />
            ),
          }}
          title="Transactions"
        />
      </Header>
      <Card variant={'shadow'}>
        <Box
          alignItems={'center'}
          bg={'white'}
          px={'hm'}
          py={'vm'}
          flexDirection={'row'}
          gap={'hsm'}>
          <Pills
            onPress={() => handleFilter('All')}
            pillType="input"
            label="All"
            position="left"
            outline={transactTabs !== 'All'}
          />
          <Pills
            onPress={() => handleFilter('In')}
            pillType="filter"
            label="In"
            position="left"
            outline={transactTabs !== 'In'}
          />
          <Pills
            onPress={() => handleFilter('Out')}
            pillType="filter"
            label="Out"
            position="left"
            outline={transactTabs !== 'Out'}
          />
        </Box>
      </Card>
      <FlatList
        data={filteredData}
        contentContainerStyle={{
          paddingHorizontal: spacing.hm,
          paddingVertical: spacing.vm,
          gap: spacing.vxs,
          flexGrow: 1,
          paddingBottom: 100,
        }}
        renderItem={({item: {title, amount, date, type, credit}, index}) => {
          return (
            <TransactionCard
              key={`${index}-${title}`}
              title={title}
              amount={amount}
              date={date}
              type={type}
              credit={credit}
            />
          );
        }}
      />
    </SafeAreaContainer>
  );
};

export default Transactions;
