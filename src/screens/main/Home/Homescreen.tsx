import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {getFontSizeByWindowHeight as gsw} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {HomeScreenProps} from '@/typings/navigation';
import {logClickEvent} from '@/utils/analytics';
import {Box, Icon} from '@atom';
import {
  BalanceFooter,
  BalanceHeader,
  Card,
  DashboardHeader,
  HorizontalCardSeparator,
  LinearTab,
} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import {useState} from 'react';
import HomeScreenTabs from './HomeScreenTab/tabs';

function Homescreen() {
  const {colors} = useTheme<Theme>();
  const {navigate} = useNavigation<HomeScreenProps['navigation']>();

  const [showBalance1, setshowBalance1] = useState(false);
  const toggleBalance1 = () => {
    setshowBalance1(v => !v);
  };
  return (
    <SafeAreaContainer>
      <Box flexGrow={1}>
        <DashboardHeader />
        <Box
          px={'hm'}
          style={{
            marginTop: '-33%',
          }}>
          <Card variant={'shadow'}>
            <Box borderRadius={10} overflow={'hidden'}>
              {/* TOP */}
              <BalanceHeader
                showBalance={showBalance1}
                toggleBalance={toggleBalance1}
                phoneNumber="097 123 4567"
                balnce="FCFA 150 000 000 000"
              />
              <HorizontalCardSeparator w={0.5} />
              {/* BOTTOM */}
              <Box flexDirection={'row'}>
                <BalanceFooter
                  label="Transactions"
                  onPress={() => {
                    navigate('transactionscreen');
                    // logEvent('transactions', 'clicked', {});
                    logClickEvent('transactioncard');
                  }}
                  icon={
                    <Icon
                      onPress={() => {
                        navigate('transactionscreen');
                      }}
                      color={colors.momoBlue}
                      name="Statement"
                      size={18}
                    />
                  }
                />
              </Box>
            </Box>
          </Card>
        </Box>
        <Box flexGrow={1} mt={'vm'} width={'100%'}>
          <LinearTab tabData={HomeScreenTabs} pH={gsw(20)} spaceEvenly />
        </Box>
      </Box>
    </SafeAreaContainer>
  );
}

export default Homescreen;
