import Card from '@/component/molecule/Card/Card';
import Pills from '@/component/molecule/Pills/Pills';
import {SvgIconType} from '@/constants/icon';
import {fontFamily} from '@/style/theme';
import {gpmsw, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Icon, Text} from '@atom';
import React from 'react';

type ContactCustomerType = {
  icon: SvgIconType;
  title: string;
};

const ContactCustomer = ({title, icon}: ContactCustomerType) => {
  return (
    <Card
      style={{
        flexDirection: 'row',
        elevation:30,
        gap: gpsw('16'),
        paddingVertical: gpsh('15'),
        justifyContent: 'space-between',
        paddingHorizontal: gpmsw('24'),
        // borderWidth: 0.5,
        // borderColor: '#f3f3f3',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: 'rgba(0,0,0,0.3)',
        borderRadius:gpsh('15')
        // paddingLeft: 24,
        //   marginHorizontal: gpsh(40)
      }}>
      <Box
        gap={'hsm'}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name={icon} size={24} />
        <Text
          style={{
            fontSize: gpsw('12'),
            lineHeight: gpsh('15.6'),
            color: '#004F71',
            fontFamily: fontFamily('Bold'),
          }}>
          {title}
        </Text>
      </Box>
      <Icon name="CircleRightIcon" size={24} />
    </Card>
  );
};

export default ContactCustomer;
