import Card from '@/component/molecule/Card/Card';
import Pills from '@/component/molecule/Pills/Pills';
import {fontFamily} from '@/style/theme';
import {gpmsw, gpsh, gpsw} from '@/utils/parseTokenStyle';
import React from 'react';
import {Text} from 'react-native';

type AccountStatusType = {
  title: string;
  status: 'Active' | 'Inactive' | 'Suspended';
};
const AccountStatus = ({status, title}: AccountStatusType) => {
  return (
    <Card
      style={{
        flexDirection: 'row',
        gap: gpsw('10'),
        paddingVertical: gpsh('20'),
        justifyContent: 'space-between',
        paddingHorizontal: gpmsw('32'),
        borderWidth: 2,
        borderColor: '#f3f3f3',
        borderRadius:gpsh('20')
        // paddingLeft: 24,
        //   marginHorizontal: gpsh(40)
      }}>
      <Text
        style={{
          fontSize: gpsw('12'),
          lineHeight: gpsh('18.2'),
          color: '#000',
          fontFamily: fontFamily('Medium'),
        }}>
        {title}
      </Text>
      <Pills
        size="small"
        alertColor="suspended"
        label={status}
        pillType="alerts"
      />
    </Card>
  );
};

export default AccountStatus;
