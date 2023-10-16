import Card from '@/component/molecule/Card/Card';
import Pills from '@/component/molecule/Pills/Pills';
import {SvgIconType} from '@/constants/icon';
import {fontFamily} from '@/style/theme';
import {gpmsw, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Icon, Text} from '@atom';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type ProfileCardType = {
  name: string;
  merchantId: string;
  mobileNumber: string;
  packageName: string;
};

const ProfileCard = ({
  name,
  merchantId,
  mobileNumber,
  packageName,
}: ProfileCardType) => {
  return (
    <Card variant='noShadow' style={styles.container}>
      <Text style={styles.headerTitle}>{name}</Text>
      <View style={styles.profileIcon}>
        <Icon name={'ProfileCircle'} size={124} />
      </View>
      <Text style={styles.title}>Merchant ID</Text>
      <Text style={styles.value}>{merchantId}</Text>
      <Text style={[styles.title,{marginTop:gpsh('16')}]}>Mobile Number</Text>
      <Text style={styles.value}>{mobileNumber}</Text>

      <View
        style={{
          marginTop: gpsh('24'),
          alignSelf: 'center',
        }}>
        <Pills label={packageName} pillType="packages" />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    paddingVertical: gpsh('24'),
    borderWidth: 1,
    borderColor: 'rgba(232, 232, 232, 0.80)',
    borderRadius: gpsw('20')
  },
  profileIcon: {
    alignSelf: 'center',
    marginVertical: gpsh('9'),
    // backgroundColor: 'red',
  },
  headerTitle: {
    fontSize: gpsw('20'),
    color: '#004F71',
    fontFamily: fontFamily('Bold'),
    textAlign: 'center',
    paddingHorizontal: gpsw('40'),
  },
  title: {
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#525252',
    fontFamily: fontFamily('Light'),
    textAlign: 'center',
  },
  value: {
    fontSize: gpsw('16'),
    lineHeight: gpsh('24'),
    color: '#004F71',
    fontFamily: fontFamily('Regular'),
    textAlign: 'center',
  },
});

export default ProfileCard;
