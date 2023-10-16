import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import TransactionHistory from '@/component/molecule/TransactionHistory';
import {TransactionData, historyData} from '@/fixtures/dummyData';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {Box, Text} from '@atom';
import {BackHeadingX, Card, Pills} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import React, {useState} from 'react';

const newData = [...historyData, ...historyData];

const RecentTransactions = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme<Theme>();
  const [filteredData, setFilteredData] = useState(TransactionData);
  const [transactTabs, setTransactTabs] = useState<
    '7 Days' | '30 Days' | '60 Days'
  >('7 Days');

  const handleFilter = (filterType: string) => {
    switch (filterType) {
      case '7 Days':
        setFilteredData(TransactionData);
        setTransactTabs('7 Days');
        break;
      case '30 Days':
        setFilteredData(TransactionData.filter(v => !!v.credit));
        setTransactTabs('30 Days');
        break;
      case '60 Days':
        setFilteredData(TransactionData.filter(v => !v.credit));
        setTransactTabs('60 Days');
        break;
      default:
        break;
    }
  };
  function renderHeader() {
    return (
      <Text
        fontFamily="MTNBrighterSans-Medium"
        mb={'vsm'}
        mt={'vm'}
        px={'hm'}
        fontSize={gsw(10)}
        lineHeight={gsh(13)}
        style={{
          color: '#888888',
        }}>
        RECENT TRANSACTIONS
      </Text>
    );
  }

  return (
    <SafeAreaContainer flex={1}>
      <BackHeadingX title="Recent transactions" />
      <Card variant={'shadow'}>
        <Box
          alignItems={'center'}
          bg={'white'}
          px={'hm'}
          py={'vm'}
          flexDirection={'row'}
          gap={'hsm'}>
          <Pills
            onPress={() => handleFilter('7 Days')}
            pillType="filter"
            label="7 Days"
            position="left"
            outline={transactTabs !== '7 Days'}
          />
          <Pills
            onPress={() => handleFilter('30 Days')}
            pillType="filter"
            label="30 Days"
            position="left"
            outline={transactTabs !== '30 Days'}
          />
          <Pills
            onPress={() => handleFilter('60 Days')}
            pillType="filter"
            label="60 Days"
            position="left"
            outline={transactTabs !== '60 Days'}
          />
        </Box>
      </Card>
      <TransactionHistory historyHeader={renderHeader} historyData={newData} />
    </SafeAreaContainer>
  );
};

export default RecentTransactions;
