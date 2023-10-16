import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Button, IllustrateCircle} from '@atom';
import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {OnboardScreenProps} from '@/typings/navigation';

const BlockedOTP = () => {
  const {goBack} = useNavigation<OnboardScreenProps['navigation']>();
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          marginTop: '-65%',
        }}>
        <IllustrateCircle
          name="KeyBlockSVG"
          w={gpsh('500.46')}
          h={gpsh('205.67')}
        />
      </View>
      <Box
        mt={'vm'}
        px={'hm'}
        pb={'vxl'}
        justifyContent={'space-between'}
        flex={1}>
        <View>
          <Text
            style={{
              fontSize: gpsw('21'),
              lineHeight: gpsh('27'),
              color: '#004F71',
              fontFamily: fontFamily('Medium'),
              marginBottom: gpsh('10'),
              textAlign: 'center',
            }}>
            {'Temporarily Blocked'}
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
            {
              'To protect the security of your account, the service is temporarily blocked. Please wait 24 hours to try again.'
            }
          </Text>
        </View>
        <Button label="CLOSE" onPress={() => goBack()} />
      </Box>
    </>
  );
};

export default BlockedOTP;
