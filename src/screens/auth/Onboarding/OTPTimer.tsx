import {AlertMessageType, addMessage} from '@/features/alert/alertSlice';
import useCountdown from '@/hooks/useCountDown';
import {useTypedDispatch} from '@/store/store';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, SafeAreaContainer, Text} from '@atom';
import {BackHeadingX, Timer} from '@molecule';
import React, {useEffect} from 'react';
// import {moderateScale} from 'react-native-size-matters';
import TouchableOpacity from '@/component/atom/TouchableOpacity';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SelectCountryScreenProps} from '@/typings/navigation';

const OTPTimer = () => {
  const {navigate} = useNavigation<SelectCountryScreenProps['navigation']>();
  const DURATION = 20000;
  const dispatch = useTypedDispatch();
  // const DURATION = 16000;
  const message: AlertMessageType = {
    message: 'We could not validate the code. Please resend the code.',
    duration: 2000,
    type: 'error',
    // title: 'Title',
    close: true,
  };
  const message2: AlertMessageType = {
    message: 'Ensure the sim card for this profile is in this device',
    duration: 2000,
    type: 'info',
    // title: 'Title',
    close: true,
  };

  const {start, formattedTime, reset, time} = useCountdown({
    callback: () => {
      console.log('yetff');
      navigate('siginpin');
      //   dispatch(addMessage(message));
    },
    duration: DURATION,
  });
  useEffect(() => {
    // time === DURATION && start();
    if (time === DURATION) {
      start();
      setTimeout(() => {
        dispatch(addMessage(message2));
      }, 2000);
    }
  }, []);
  return (
    <SafeAreaContainer>
      <BackHeadingX title="OTP" />
      <Box px={'hm'} pt={'vm'} alignItems={'center'}>
        <Text
          textAlign={'center'}
          fontSize={gpsw(18)}
          lineHeight={gpsw(23.4)}
          color={'momoBlue'}
          style={{
            marginBottom: gpsh(30),
          }}
          px={'hm'}>
          Verification code sent to ******3678
        </Text>
        <Timer
          formattedTime={formattedTime}
          time={time}
          DURATION={DURATION}
          bg="white"
          size={gpsw(110)}
          thickness={gpsw(10)}
        />
        {time <= 300 && (
          <Box
            mt={'vs'}
            gap={'hsm'}
            flexDirection={'row'}
            alignItems={'center'}>
            <Text
              variant={'medium12'}
              style={{
                color: '#525252',
                lineHeight: gpsw(15.6),
                fontSize: gpsw(12),
              }}>
              Did not receive an OTP?
            </Text>
            <TouchableOpacity
              onPress={async () => {
                await reset();
                dispatch(addMessage(message2));
                start();
              }}>
              <Text
                color={'momoBlue'}
                style={{
                  fontFamily: 'MTNBrighterSans-Medium',
                  lineHeight: gpsw(15.6),
                  fontSize: gpsw(12),
                }}>
                Resend
              </Text>
            </TouchableOpacity>
          </Box>
        )}
        <Text
          fontSize={gpsw(16)}
          lineHeight={gpsw(24)}
          textAlign={'center'}
          color={'grey'}
          style={{
            paddingHorizontal: gpsw(20),
          }}
          fontFamily="MTNBrighterSans-Regular"
          mt={'vxl'}>
          {Platform.OS === 'ios'
            ? 'Open the SMS and click on the link to proceed'
            : 'Please wait while we validate the code'}
        </Text>
      </Box>
    </SafeAreaContainer>
  );
};

export default OTPTimer;
