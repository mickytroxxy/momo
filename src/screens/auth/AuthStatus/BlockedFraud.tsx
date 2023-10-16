import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Button, IllustrateCircle} from '@atom';
import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {OnboardScreenProps} from '@/typings/navigation';

const BlockedFraud = () => {
  const {goBack} = useNavigation<OnboardScreenProps['navigation']>();
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          marginTop: '-70%',
        }}>
        <IllustrateCircle
          name="WalletBlockSVG"
          w={gpsh('220.11')}
          h={gpsh('188.02')}
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
            Visit your nearest agent or contact the call center on 165 for
            assistance.
          </Text>
        </Box>
        <Box gap={'vs'}>
          <Button label="CONTACT CENTER" onPress={() => goBack()} />
          <Button variant="secondary" label="CLOSE" onPress={() => goBack()} />
        </Box>
      </Box>
    </>
  );
};

export default BlockedFraud;
