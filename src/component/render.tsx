import {historyData} from '@/fixtures/dummyData';
import {
  BalanceCardDataType,
  HeaderDataType,
  LinearTabDataType,
  MainWalletCardType,
  MenuButtonsType,
  SubHeaderDataType,
} from './ComponentTypings';
import Box from './atom/Box';
import MainWalletCard from './main/Card/MainWalletCard';
import CustomHeader from './main/Header/CustomHeader';
import LinearTabButton from './main/Tabs/LinearTabButton';
import BalanceCard from './molecule/Card/BalanceCard';
import Menu from './molecule/Card/Menu';
import SubHeader from './molecule/Header/AllHeaders/SubHeader';
import TransactionHistory from './molecule/TransactionHistory';
import {ActivityIndicator} from 'react-native';

export const renderLinearTabs = (
  data: LinearTabDataType,
  fetching?: boolean,
) => {
  if (!fetching) {
    return (
      <Box flexGrow={1} mt={'vm'} width={'100%'}>
        <LinearTabButton key={'LinearTabs'} tabsData={data} />
      </Box>
    );
  } else {
    return <ActivityIndicator size={50} color={'black'} />;
  }
};

export const renderMainWalletCard = (
  data: MainWalletCardType,
  fetching?: boolean,
) => {
  if (!fetching) {
    if (data.WalletFooter && data.WalletHeader) {
      return (
        <MainWalletCard
          key={'MainWalletCard'}
          display={data.display}
          WalletFooter={data.WalletFooter}
          WalletHeader={data.WalletHeader}
        />
      );
    } else {
      return null;
    }
  } else {
    return <ActivityIndicator size={50} color={'black'} />;
  }
};

export const renderHeader = (data: HeaderDataType, fetching?: boolean) => {
  if (!fetching) {
    return (
      <CustomHeader
        key={data.background}
        variant={data.type}
        data={data.data}
        background={data.background}
        height={data.height}
      />
    );
  } else {
    return <ActivityIndicator size={50} color={'black'} />;
  }
};

export const renderBalanceCard = (data: BalanceCardDataType) => {
  return <BalanceCard key={'BalanceCard'} display={data.display} />;
};

export const renderMenuButtons = (data: MenuButtonsType) => {
  return <Menu content={data} key={'MenuButtons'} variant={'shadow'} />;
};

export const renderTransactionHistory = (data: SubHeaderDataType) => {
  return (
    <TransactionHistory
      historyData={historyData}
      historyHeader={
        <SubHeader
          headerLeft={data.headerLeft}
          headerRight={data.headerRight}
        />
      }
    />
  );
};
