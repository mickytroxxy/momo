import React from 'react';
import {Box, Text, TouchableOpacity} from '@atom';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {useNavigation} from '@react-navigation/native';
import {MoMoUserScreenProps} from '@/typings/navigation';

type BeneficiaryItemType = {
  name: string;
  phoneNumber: string;
};

const BeneficiaryItem = ({name, phoneNumber}: BeneficiaryItemType) => {
  const {navigate} = useNavigation<MoMoUserScreenProps['navigation']>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('paybeneficiaryscreen', {
          phoneNumber,
          name,
        });
      }}
      borderBottomWidth={gsh(1)}
      borderBottomColor={'extraLightGrey'}
      height={gsh(60)}
      px={'hm'}
      py={'vsm'}
      >
      <Text variant={'regular16'}>{name}</Text>
      <Text variant={'regular12'}>Mobile number: {phoneNumber}</Text>
    </TouchableOpacity>
  );
};

export default BeneficiaryItem;
