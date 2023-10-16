import {getFontSizeByWindowHeight as gsw} from '@/style/theme';
import {Icon} from '@atom';
import React from 'react';
import CurvedHeader from './CurvedHeader';
import TopHeaderContent from './TopHeaderContent';
import {HeaderBgTypeType} from '@/assets/Headerbackgrounds';
import {useNavigation} from '@react-navigation/native';
import { gpsh } from '@/utils/parseTokenStyle';

type BackHeadingNotifType = {
  title: string;
  bg?: HeaderBgTypeType;
  h?: number;
};
const BackHeadingNotif = ({
  title,
  bg = 'TransferHeaderBg',
  h = 120,
}: BackHeadingNotifType) => {
  const {goBack} = useNavigation();
  return (
    <CurvedHeader name={bg} h={h} status>
      <TopHeaderContent
        containerStyle={{
          paddingVertical: gsw(13),
          paddingTop: gpsh(20),
          paddingBottom: gpsh(20),
          alignItems: 'center',
          // backgroundColor: "green"
        }}
        right={{
          rightComp: <Icon name="NotifoutlineIcon" color={'white'} size={24} />,
        }}
        left={{
          leftComp: (
            <Icon
              onPress={() => goBack()}
              name="BackIcon"
              color={'white'}
              size={24}
            />
          ),
        }}
        title={title}
      />
    </CurvedHeader>
  );
};

export default BackHeadingNotif;
