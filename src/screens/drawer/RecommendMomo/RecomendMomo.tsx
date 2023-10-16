import OptionsScreen, {OptionsType} from '@/component/molecule/OptionsScreen';
import icon from '@/constants/icon';
import {globalMoMoBlue} from '@/style-dictionary-dist/momoStyle';
import {Box, SafeAreaContainer} from '@atom';
import {BackHeadingX} from '@molecule';
import React from 'react';
import {Share} from 'react-native';

export default function RecommendMomo() {
  const {ShareIcon, ReferIcon} = icon;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Hey, Download our new MOMO app \nLink to download : https://www.google.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };

  const recommendMomoOptions: OptionsType[] = [
    {
      id: 0,
      name: `Refer a friend`,
      Icon: <ReferIcon stroke={globalMoMoBlue} />,
      route: 'ReferaFriend',
    },
    {
      id: 1,
      name: `ShareApp`,
      Icon: <ShareIcon stroke={globalMoMoBlue} />,
      onPress: onShare,
    },
  ];

  return (
    <SafeAreaContainer flex={1}>
      <BackHeadingX title="Recommend MoMo" />
      <OptionsScreen
        options={recommendMomoOptions}
        IllustrationType="Referral"
      />
    </SafeAreaContainer>
  );
}
