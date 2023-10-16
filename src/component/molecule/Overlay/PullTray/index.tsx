import {Box, Icon} from '@atom';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet} from 'react-native';

type PullTrayType = {
  trayRef: any;
  children: any;
  handleSheetChanges: any;
  closeOnDragDown?: boolean;
};

const PullTray = ({trayRef, children, handleSheetChanges}: PullTrayType) => {
  const snapPoints = useMemo(() => ['50%', '88%'], []);
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.7}
      />
    ),
    [],
  );
  return (
    <BottomSheet
      ref={trayRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      handleComponent={() => (
        <Box pt={'vm'} pb={'vsm'} alignItems={'center'}>
          <Icon name="UpIcon" size={16} />
        </Box>
      )}>
      {children}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default PullTray;
