import PullTray from '@/component/molecule/Overlay/PullTray';
import {agentData} from '@/fixtures/dummyData';
import {getFontSizeByWindowHeight as gsh} from '@/style/theme';
import {Box, Icon, SafeAreaContainer, Text, TouchableOpacity} from '@atom';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {BackHeadingX} from '@molecule';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import AgentMap from './Map';

export default function LocateAgent() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleExpandPress = useCallback(() => {
    console.log('bottomSheetRef?.current', bottomSheetRef?.current);
    bottomSheetRef.current?.expand();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const renderItem = useCallback(
    ({item}: any) => (
      <TouchableOpacity
        onPress={() => handleClosePress()}
        borderBottomWidth={gsh(1)}
        borderBottomColor={'extraLightGrey'}
        height={gsh(70)}
        px={'hm'}
        style={{}}
        flexDirection={'row'}
        py={'vs'}>
        <Box gap={'hsm'} flexDirection={'row'}>
          <Box style={{paddingTop: gsh(8)}}>
            <Icon name="AgentIcon" size={24} />
          </Box>
          <Box>
            <Text variant={'regular16'}>{item?.agent}</Text>
            <Text variant={'regular12'}>{item?.address}</Text>
          </Box>
        </Box>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <SafeAreaContainer flex={1}>
      <BackHeadingX title="Locate agent" />
      <AgentMap handleSnapPress={handleSnapPress} />
      <PullTray
        handleSheetChanges={handleSheetChanges}
        trayRef={bottomSheetRef}>
        <BottomSheetFlatList
          data={agentData}
          keyExtractor={(i, index) => `${i.agent}-${index}`}
          renderItem={renderItem}
          contentContainerStyle={{}}
        />
      </PullTray>
    </SafeAreaContainer>
  );
}
