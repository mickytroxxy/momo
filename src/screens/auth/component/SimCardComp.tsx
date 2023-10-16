import {fontFamily} from '@/style/theme';
import {OnboardScreenProps} from '@/typings/navigation';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Button, Icon, IllustrateCircle, SafeAreaContainer} from '@atom';
import {CurvedHeader} from '@molecule';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';

type SimCardCompType = {
  handleNext: () => void;
};
const SimCardComp = ({handleNext}: SimCardCompType) => {
  return (
    <>
      <CurvedHeader name="AuthBg" h={250}>
        {/* <CurvedHeader name="AuthBg" h={250} status> */}
        {/* <Box
          style={{
            paddingTop: gpsh('48'),
          }}
          px={'hm'}
          justifyContent={'space-between'}
          flexDirection={'row'}>
          <Icon name="BackIcon" color="white" size={16} />
          <Icon name="HeaderXIcon" color="white" size={16} />
        </Box> */}
      </CurvedHeader>
      <View
        style={{
          alignItems: 'center',
          marginTop: '-70%',
          // marginTop: '-65%',
        }}>
        <IllustrateCircle
          name="SimCardSVG"
          w={gpsh('230.46')}
          h={gpsh('230.67')}
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
            {'Sim card'}
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
            Ensure that the sim card for this profile is in this device
          </Text>
        </View>
        <Button label="NEXT" onPress={handleNext} />
      </Box>
    </>
  );
};

export default SimCardComp;
