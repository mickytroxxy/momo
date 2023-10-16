import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {DarkStatusBar} from '@/component/molecule/StausBar';
import {
  renderBalanceCard,
  renderHeader,
  renderMenuButtons,
  renderTransactionHistory,
} from '@/component/render';
import {StatementsCms} from '@/fixtures/StatementsCmsData';
import {Box, Text} from '@atom';
import {BackHeadingNotif} from '@molecule';
import {useEffect, useState} from 'react';

const initialState = {
  headerContent: null,
  balanceCardContent: null,
  menubuttonsContent: null,
  transactionHistoryContent: null,
};

const TransactionsLanding = () => {
  const [content, setContent] = useState(initialState);
  const {
    headerContent,
    balanceCardContent,
    menubuttonsContent,
    transactionHistoryContent,
  } = content;

  const fetchStatementsLandingCms = () => {
    //SET ALL DATA NULL AND Re-FETCH API/SET Data Again
    setContent(initialState);

    let data = StatementsCms;
    return data.map((item: {type: string; data: any}) => {
      const {type, data} = item;
      switch (type) {
        case 'Header':
          return setContent(prevState => ({
            ...prevState,
            headerContent: data,
          }));
        case 'BalanceCard':
          return setContent(prevState => ({
            ...prevState,
            balanceCardContent: data,
          }));
        case 'MenuButton':
          return setContent(prevState => ({
            ...prevState,
            menubuttonsContent: data,
          }));
        case 'TransactionHistory':
          return setContent(prevState => ({
            ...prevState,
            transactionHistoryContent: data,
          }));
        default:
          return null;
      }
    });
  };

  useEffect(() => {
    fetchStatementsLandingCms();
  }, StatementsCms);

  return (
    <SafeAreaContainer bgColor={'#135b7b'}>
      <DarkStatusBar backgroundColor={'#135b7b'} />
      <Box flex={1}>
        {
          headerContent && renderHeader(headerContent)
        }
        <Box
          px={'hm'}
          gap={'vm'}
          style={{
            marginTop: '-53%',
          }}>
          {balanceCardContent && renderBalanceCard(balanceCardContent)}
          {menubuttonsContent && renderMenuButtons(menubuttonsContent)}
        </Box>
        <Box flex={1} px={'hm'} mt={'vm'} bg={'extraLightGrey'}>
          {transactionHistoryContent &&
            renderTransactionHistory(transactionHistoryContent)}
        </Box>
      </Box>
    </SafeAreaContainer>
  );
};

export default TransactionsLanding;
