import {
  BannerImagesType,
  LinearTabDataType,
  LinearTabScreenDataType,
  MenuButtonsType,
  ScreenName,
} from '@/component/ComponentTypings';
import Banner2 from '@/component/molecule/Card/Banner2';
import {getFontSizeByWindowWidth as gsw} from '@/style/theme';
import {Box, ScrollView} from '@atom';
import React, {useEffect, useState} from 'react';
import Menu from '../../molecule/Card/Menu';
import LinearTab from '../../molecule/Tab/LinearTab';

export default function LinearTabButton({
  tabsData,
}: {
  tabsData: LinearTabDataType;
}) {

  const generateScreen = (data: LinearTabScreenDataType) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        py={'vsm'}
        flexGrow={1}
        flex={1}
        bg={'extraLightGrey'}
        px={'hm'}>
        <Box gap={'vsm'}>
          {data.map(
            (
              scene: {
                type: 'MenuButton' | 'Banner' | 'Screen';
                data: MenuButtonsType | BannerImagesType | ScreenName;
              },
              index,
            ) => {
              if (scene.type === 'MenuButton') {
                return <Menu content={scene.data} key={index} />;
              } else if (scene.type === 'Banner') {
                return <Banner2 data={scene.data} key={index} />;
              } else {
                return null;
              }
            },
          )}
        </Box>
      </ScrollView>
    );
  };
  const tabss = tabsData.map(tabItem => {
    return {
      title: tabItem.title,
      renderScene: () => generateScreen(tabItem.data),
    };
  });


  return (
    tabss.length > 0 && (
      <LinearTab tabData={tabss} pH={gsw(20)} spaceEvenly />
    )
  );
}
