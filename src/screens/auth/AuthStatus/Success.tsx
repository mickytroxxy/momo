import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Button, IllustrateCircle} from '@atom';
import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {OnboardScreenProps} from '@/typings/navigation';

const Success = () => {
  const {navigate} = useNavigation<OnboardScreenProps['navigation']>();
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          marginTop: '-70%',
        }}>
        <IllustrateCircle
          name="Success"
          w={gpsh('185.11')}
          h={gpsh('230.51')}
        />
      </View>
      <Box
        mt={'vm'}
        px={'hm'}
        pb={'vxl'}
        justifyContent={'space-between'}
        flex={1}>
        <Box px={'hxxs'}>
          <Text
            style={{
              fontSize: gpsw('21'),
              lineHeight: gpsh('27'),
              color: '#004F71',
              fontFamily: fontFamily('Medium'),
              marginBottom: gpsh('10'),
              textAlign: 'center',
            }}>
            Wallet successfully activated
          </Text>
          <Text
            style={{
              fontSize: gpsw('16'),
              lineHeight: gpsh('24'),
              color: '#5F5F5F',
              fontFamily: fontFamily('Regular'),
              marginBottom: gpsh('10'),
              textAlign: 'center',
            }}>
            Wallet is successfully activated for your number. Thank you for
            choosing MoMo PSB. Please Sign in to continue
          </Text>
        </Box>
        <Box gap={'vs'}>
          <Button label="SIGN IN" onPress={() => navigate('siginpin')} />
        </Box>
      </Box>
    </>
  );
};

export default Success;
