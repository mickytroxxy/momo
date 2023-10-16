import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {DarkStatusBar} from '@/component/molecule/StausBar';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Box, Button, Icon, ScrollView, Text} from '@atom';
import {BackHeadingNotif, Card, MenuContentType} from '@molecule';

const AyoScreen = () => {
  const menuArray: MenuContentType[] = [
    {
      icon: 'CalendarScheduleIcon',
      label: 'Scheduled payments',
      //   screen: undefined,
    },
  ];
  return (
    <SafeAreaContainer>
      <DarkStatusBar backgroundColor={'#135b7b'} />
      <ScrollView
        bg={'mainBackground'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        // // flex={1}
      >
        <BackHeadingNotif title="aYo" bg="AyoHeaderBg" h={180} />
        {/* navigate('momouser'); */}
        <Box px={'hm'}>
          <Card
            py={'vm'}
            variant="shadow"
            style={{
              marginTop: '-43%',
              // alignItems:
            }}>
            <Box alignSelf={'center'} flexDirection={'row'}>
              <Icon name="AyoLogoIcon" w={60} h={46.29} />
              <Icon name="MomoIcon" w={41} h={39.7} />
            </Box>
            <Text variant={'regular16'} textAlign={'center'}>
              aYo in partnership with MoMo
            </Text>
          </Card>
        </Box>
        <Box flex={1} mt={'vsm'} px={'hm'}>
          <Card
            style={{
              backgroundColor: '#4EACAD',

              paddingBottom: gsh(21),
            }}>
            <Box
              style={{
                paddingHorizontal: gsw(18),
                paddingTop: gsh(18),
              }}>
              <Text variant={'medium18'} color={'white'} textAlign={'center'}>
                aYo in partnership with MoMo
              </Text>
              <Text
                variant={'regular12'}
                color={'white'}
                style={{
                  paddingVertical: gsh(18),
                }}
                textAlign={'center'}>
                aYo brings you an easy way to get hospital cover and life cover.
                Simply register on your mobile phone for aYo Recharge with Care
                and get a minimum of 30 days’ aYo Cover every time you load MTN
                airtime. You can also add aYo Send with Care cover to the money
                you send home through MTN Mobile Money
              </Text>
            </Box>
            <Button
              label="Go To Ayo website"
              variant="secondary"
              bStyle={{
                backgroundColor: 'white',
                borderColor: 'transparent',
                marginHorizontal: gsw(12),
              }}
            />
          </Card>
        </Box>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default AyoScreen;
