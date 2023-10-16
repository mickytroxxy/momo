import {View} from 'react-native';
import React from 'react';
import Card from '@/component/molecule/Card/Card';
import {Box, Icon, Text} from '@atom';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {fontFamily} from '@/style/theme';
import {SvgIconType} from '@/constants/icon';

type CardItemType = {
  icon: SvgIconType;
  title: string;
  subtitle: string;
};

const CardItem = ({title, subtitle, icon}: CardItemType) => {
  return (
    <Card
      style={{
        flexDirection: 'row',
        elevation:30,
        shadowColor: 'rgba(0,0,0,0.3)',
        gap: gpsw('16'),
        paddingVertical: gpsh('10'),
        paddingLeft: gpsw('10'),
        backgroundColor:'white',
        borderRadius:gpsw('15')
        // paddingLeft: 24,
        //   marginHorizontal: gpsh(40)
      }}>
      <View style={{justifyContent:'center'}}><Icon name={icon} size={24} /></View>
      <View>
        <Text
          color={'momoBlue'}
          style={{
            fontSize: gpsw('12'),
            fontFamily: fontFamily('Medium'),
          }}>
          {title}
        </Text>
        <Text
          color={'momoBlue'}
          style={{
            fontSize: gpsw('9'),
            lineHeight: gpsh('13'),
            fontFamily: fontFamily('Light'),
          }}>
          {subtitle}
        </Text>
      </View>
    </Card>
  );
};

const ContactCard = () => {
  return (
    <Box
      style={{
        gap: gpsh('12'),
        flex:1,
        paddingBottom: 20
      }}>
      <CardItem title="Helpline" subtitle="114" icon="Phone" />
      <CardItem
        title="General Support"
        subtitle="mmsupportteam.GH@mtn.com"
        icon="MailIcon"
      />
      <CardItem
        title="Reporting Fraud Incident"
        subtitle="mmfraudteam.GH@mtn.com"
        icon="MailIcon"
      />
    </Box>
  );
};

export default ContactCard;
