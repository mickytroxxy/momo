import {
  Box,
  Button,
  SafeAreaContainer,
  Text,
  TextButton,
} from '@/component/atom';
import { renderCountryItem } from '@/component/molecule/Dropdown/Dropdown.stories';
import { DarkStatusBar } from '@/component/molecule/StausBar';
import { Images } from '@/constants/images';
import countryData from '@/fixtures/countryData';
import { fontFamily } from '@/style/theme';
import { SelectCountryScreenProps } from '@/typings/navigation';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import { Card, CountryDropdown, CurvedHeader, FLabelInput } from '@molecule';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const MockSelectCountry = () => {
  const [selected, setSelected] = useState(countryData[0]);
  const [invalue, setInvalue] = useState('233596254713');
  const { navigate } = useNavigation<any>();
  const { MoMoLogo } = Images;
  return (
    <SafeAreaContainer>
      <DarkStatusBar />
      <CurvedHeader name="AuthBg" h={250} status>
        {/* <Icon name='MomoFromMtnIcon' w={61} h={83} /> */}
        <Image
          source={MoMoLogo}
          style={{
            width: gpsw('77'),
            height: gpsh('97'),
            alignSelf: 'center',
            marginTop: gpsh('36'),
          }}
        />
        {/* <MoMoForMTN /> */}
      </CurvedHeader>
      {/* <Box> */}
      <Box px={'hm'}>
        <Card
          style={{
            // height: gpsh('131'),
            // width: gpsw('280'),
            alignSelf: 'center',
            borderRadius: gpsh('20'),
            marginTop: '-35%',
            paddingTop: gpsh('16'),
            paddingHorizontal: gpsw('16'),
            paddingBottom: gpsw('16'),
            backgroundColor: 'white',
          }}
          variant={'shadow'}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: gpsw('18'),
              lineHeight: gpsh('23.4'),
              color: '#004F71',
              fontFamily: fontFamily('Regular'),
            }}>
            Welcome to{' '}
            <Text
              style={{
                textAlign: 'center',
                fontSize: gpsw('18'),
                lineHeight: gpsh('23.4'),
                color: '#004F71',
                fontFamily: fontFamily('Medium'),
              }}>
              MoMo
            </Text>
          </Text>
          <Box
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: gpsh('20'),
              gap: gpsw('5'),
            }}>
            <Box flex={0.25}>
              <CountryDropdown
                renderItem={renderCountryItem}
                data={countryData}
                onSelect={setSelected}
                value={selected}
                placeHolder="S"
                INPUT_HEIGHT={57}
                paddingContainer={'36'}
                medium
              />
            </Box>
            <Box flex={0.75}>
              <FLabelInput
                labelBackgroundColor="white"
                label="Enter Number"
                value={invalue}
                onChangeText={setInvalue}
                animationDuration={5}
                required
                medium
                mask="999999999999"
                maskType="phone"
                keyboardType="phone-pad"
              />
            </Box>
          </Box>
        </Card>
      </Box>
      <Box
        style={{
          marginTop: gpsh('20'),
          paddingHorizontal: gpsh('20'),
          backgroundColor: 'white',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={styles.tandcGrey}>
          By using this app you agree to our{' '}
        </Text>
        <TextButton
          title="T&Cs"
          titleStyle={styles.tandcMoMo}
          onPress={() => {
            navigate('tandc');
          }}
        />
        <Text style={styles.tandcGrey}> and </Text>
        <TextButton
          title="Privacy Policy"
          titleStyle={styles.tandcMoMo}
          onPress={() => {
            navigate('privacypolicy');
          }}
        />
      </Box>
      <View
        style={{
          position: 'relative',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Box px={'hm'} pb={'vxl'}>
          <Button
            onPress={() => {
              // navigate('authstatus', {
              //   type: 'blockedotp'
              // });
              // navigate('registerwallet');
              // navigate('simcard');
              navigate('siginpin', {
                item: invalue,
              });
            }}
            label="NEXT"
            disabled={invalue === ''}
            variant="primary"
          />
        </Box>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  tandcGrey: {
    textAlign: 'center',
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
  },
  tandcMoMo: {
    textAlign: 'center',
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#004F71',
    fontFamily: fontFamily('Regular'),
  },
});

export default MockSelectCountry;
