import {
  Box,
  Button,
  Icon,
  SafeAreaContainer,
  Text,
  TextButton,
} from '@/component/atom';
import {renderCountryItem} from '@/component/molecule/Dropdown/Dropdown.stories';
import {DarkStatusBar} from '@/component/molecule/StausBar';
import {SvgIconType} from '@/constants/icon';
import {Images} from '@/constants/images';
import {updateToken} from '@/features/auth/authSlice';
import countryData from '@/fixtures/countryData';
import {useTypedDispatch} from '@/store/store';
import {fontFamily} from '@/style/theme';
import {SelectCountryScreenProps} from '@/typings/navigation';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Card, CountryDropdown, CurvedHeader, FLabelInput} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

type navButtonType = {
  screen: string;
  icon: SvgIconType;
  label: string;
};

const navButton: navButtonType[] = [
  {screen: 'authscanqr', icon: 'ScanQrCircle', label: 'Scan QR'},
  {screen: 's', icon: 'MarketCircle', label: 'Market'},
  {screen: 's', icon: 'AgentsCircle', label: 'Agents'},
  {screen: 'authmore', icon: 'MoreCircle', label: 'More'},
];

const SignInPin = () => {
  const [selected, setSelected] = useState(countryData[0]);
  const [invalue, setInvalue] = useState('');
  const dispatch = useTypedDispatch();
  const {navigate} = useNavigation<SelectCountryScreenProps['navigation']>();
  const {MoMoLogo} = Images;
  const ButtonText = ({
    screen,
    icon,
    label,
  }: {
    screen: string;
    icon: SvgIconType;
    label: string;
  }) => (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        navigate(screen);
      }}
      style={{alignItems: 'center', gap: gpmsh(10)}}>
      <Icon name={icon} size={30} />
      <Text style={styles.iconText}>{label}</Text>
    </TouchableOpacity>
  );
  const handleSignIn = () => {
    if (invalue === '') return;
    dispatch(updateToken({accessToken: 'remove'}));
  };

  return (
    <SafeAreaContainer>
      <DarkStatusBar />
      <CurvedHeader name="AuthBg" h={250}>
        {/* <Icon name='MomoFromMtnIcon' w={61} h={83} /> */}
        <Image
          source={MoMoLogo}
          style={{
            width: gpsw('77'),
            height: gpsh('97'),
            alignSelf: 'center',
            marginTop: gpsh('16'),
            // marginTop: gpsh('36'),
          }}
        />
        {/* <MoMoForMTN /> */}
      </CurvedHeader>
      <Card
        style={{
          height: gpsh('225'),
          // height: gpsh('238'),
          width: gpsw('280'),
          alignSelf: 'center',
          borderRadius: gpsh('20'),
          marginTop: '-36%',
          paddingVertical: gpsh('16'),
          paddingHorizontal: gpsw('16'),
          backgroundColor: 'white',
        }}
        variant={'shadow'}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: gpsw('18'),
            lineHeight: gpsh('23.4'),
            color: '#000',
            fontFamily: fontFamily('Regular'),
          }}>
          Hi, Phathutshedzo
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: gpsw('12'),
            lineHeight: gpsh('15.6'),
            color: '#000',
            fontFamily: fontFamily('Medium'),
          }}>
          095 123 4567
        </Text>
        <Box
          style={{
            justifyContent: 'space-between',
            marginTop: gpsh('20'),
            gap: gpsw('5'),
          }}>
          <FLabelInput
            labelBackgroundColor="white"
            label="PIN"
            value={invalue}
            onChangeText={setInvalue}
            animationDuration={5}
            // required
            medium
            mask="9999 999 9999"
            maskType="phone"
            keyboardType="phone-pad"
            isPassword
          />
        </Box>
        <View
          style={{
            flexDirection: 'row',
            marginTop: gpsh(10),
            marginBottom: gpsh(20),
            justifyContent: 'space-between',
          }}>
          <TextButton title="Switch Account" onPress={() => {}} />
          <TextButton title="Forget PIN" onPress={() => {}} />
        </View>
        <View style={{marginTop: 'auto'}}>
          {/* <View style={{justifyContent: 'flex-end', flex: 1}}> */}
          <Button disabled={!invalue} label="SIGN IN" onPress={handleSignIn} />
        </View>
      </Card>
      <View
        style={{
          marginTop: gpsh(41),
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
      </View>
      <View style={styles.nav}>
        {navButton.map((item, index) => (
          <ButtonText key={`${index}`} {...item} />
        ))}
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
  iconText: {
    textAlign: 'center',
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
  },
  nav: {
    justifyContent: 'space-between',
    paddingHorizontal: gpsw(20),
    paddingRight: gpsw(30),
    flexDirection: 'row',
    marginTop: 'auto',
    paddingBottom: gpsh(20),
  },
});

export default SignInPin;
