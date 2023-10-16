import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import CurvedHeader from '../../Header/CurvedHeader';
import TopHeaderContent from '../../Header/TopHeaderContent';
import {Button, Icon, Illustration} from '@atom';
import {headerInJourneyFontColour} from '@/style-dictionary-dist/momoStyle';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import Illustrate from '@/constants/illustration';
import {fontFamily} from '@/style/theme';
import {color} from '@shopify/restyle';
// import Ase from './suksex.png';

const {Soxsex} = Illustrate;

const Success = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00496a'} />
      <CurvedHeader name="BusinessResponseBg" h={268}>
        <TopHeaderContent
          containerStyle={{
            paddingVertical: gpsh('13'),
            alignItems: 'center',
          }}
          left={{
            leftComp: (
              <Icon
                onPress={() => {}}
                name="BusinessBack"
                color={headerInJourneyFontColour}
                size={24}
              />
            ),
          }}
          center={{
            centerComp: <Icon name="MomoIcon" size={40} />,
          }}
        />
      </CurvedHeader>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-40%',
          //   backgroundColor: 'green',
        }}>
        {/* <Illustration h={240} w={188} name="SuccessBusinessSVG" /> */}
        <Image
          source={require('./success1.png')}
          style={{
            width: gpsw('190'),
            height: gpsh('230'),
          }}
        />
      </View>
      {/* <View
        style={{
          width: gpsh('186'),
          height: gpsh('186'),
          borderRadius: gpsh('93'),
          backgroundColor: '#F5F5F5',
          marginTop: -150,
          elevation: 2,
          alignSelf: 'center',
          borderWidth: 10,
          borderColor: 'white',
        }}>
        <Soxsex
          style={{
            marginTop: -125,
            marginLeft: -10,
          }}
          height={gpsh('286')}
          width={gpsh('183')}
        />
      </View> */}
      <Text
        style={{
          textAlign: 'center',
          fontSize: gpsw('24'),
          fontFamily: fontFamily('Bold'),
          //   marginTop: gpsh('12'),
          marginTop: '-2%',
          marginBottom: gpsh('8'),
          color: '#004F71',
        }}>
        Heading
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: gpsw('14'),
          lineHeight: gpsh('18.2'),
          fontFamily: fontFamily('Regular'),
          marginBottom: gpsh('8'),
          paddingHorizontal: gpsw('25'),
          color: 'black',
        }}>
        Success status. It's like this because of the environment it's running in.
      </Text>
      {/* </View> */}
      <View
        style={{
          paddingHorizontal: gpsw('20'),
          flexGrow: 1,
          justifyContent: 'flex-end',
          // marginBottom: 10,
          gap: gpmsh('12'),
        }}>
        <Button label="PRIMARY" />
        <Button label="SECONDARY" variant="secondary" />
      </View>
    </View>
  );
};

export default Success;
