import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import TransactionHistory from '@/component/molecule/TransactionHistory';
import {historyData} from '@/fixtures/dummyData';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {TransactionScreenProps} from '@/typings/navigation';
import {Box, Text, TouchableOpacity} from '@atom';
import {BackHeadingNotif, Card, Menu, MenuContentType} from '@molecule';
import {useNavigation} from '@react-navigation/native';

type CardItemType = {
  title: string;
  value: string;
  In?: boolean;
  Out?: boolean;
};

const statementMenu: MenuContentType[] = [
  {
    icon: 'StatementsIcon',
    label: 'Statements',
    screen: 'statementscreen',
  },
];

const Transactions = () => {
  const {navigate} = useNavigation<TransactionScreenProps['navigation']>();
  function CardItem({title, value, In, Out}: CardItemType) {
    return (
      <Box flexDirection={'row'} justifyContent={'space-between'}>
        <Text variant={'regular12'} color={'black'}>
          {title}
        </Text>
        <Text
          variant={'regular12'}
          color={In ? 'green100' : Out ? 'red100' : 'black'}>
          {value}
        </Text>
      </Box>
    );
  }
  function renderHeader() {
    return (
      <>
        <BackHeadingNotif title="Transactions" bg="DashboardHeaderBg" h={180} />
        <Box px={'hm'} gap={'vm'}>
          <Card
            py={'vs'}
            px={'hs'}
            variant="shadow"
            gap={'vsm'}
            style={{
              marginTop: '-41%',
            }}>
            <CardItem title="Current balance" value="GHC 54 883.89" />
            <Box gap={'vxxs'}>
              <CardItem title="Money In" In value="+GHC 54 883.89" />
              <CardItem title="Money Out" Out value="-GHC 54 883.89" />
            </Box>
          </Card>

          <Menu content={statementMenu} />
          <Box
            // mt={'vm'}
            mb={'vsm'}
            flexDirection={'row'}
            // bg={'green100'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Text
              fontFamily="MTNBrighterSans-Medium"
              fontSize={gsw(10)}
              lineHeight={gsh(13)}
              style={{
                color: '#888888',
              }}>
              RECENT TRANSACTIONS
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate('recenttransactionscreen');
              }}>
              <Text
                fontFamily="MTNBrighterSans-Medium"
                fontSize={gsw(12)}
                lineHeight={gsh(15.6)}
                color={'momoBlue'}>
                See more
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <SafeAreaContainer flexGrow={1}>
      {/* <DarkStatusBar backgroundColor={'#135b7b'} /> */}
      {renderHeader()}
      <TransactionHistory
        // historyHeader={renderHeader}
        historyData={historyData}
      />
    </SafeAreaContainer>
  );
};

export default Transactions;
