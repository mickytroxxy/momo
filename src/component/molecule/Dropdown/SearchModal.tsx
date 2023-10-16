import {banksData} from '@/fixtures/dummyData';
import {
  globalExtraLightGrey,
  globalMoMoBlue,
} from '@/style-dictionary-dist/momoStyle';
import {
  Theme,
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Box, Text, TouchableOpacity} from '@atom';
import {useTheme} from '@shopify/restyle';
import React, {Fragment, useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  LayoutChangeEvent,
  Animated as NativeAnimated,
  StyleSheet,
} from 'react-native';
import {FlatList, Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Shadow} from 'react-native-shadow-2';
import FLabelInput from '../FloatingLabelInput/FLabelInput';

type SearchModal2Type = {
  data: {}[];
  visible: boolean;
  setVisible: (value: boolean) => void;
  searchValue: string;
  setSearchValue: (searchValue: any) => void;
  label?: string;
};

export const HEIGHT = 1000;
export const OVERDRAG = 0;

export default function SearchModal2({
  visible = false,
  setVisible,
  data,
  searchValue,
  setSearchValue,
  label,
}: SearchModal2Type) {
  const {spacing} = useTheme<Theme>();
  const offset = useSharedValue(0);
  const [filteredData, setfilteredData] = useState(data);
  const [inValue, setInvalue] = useState('');

  //custom scrollbar
  let indicatorSize = null;
  const [completeScrollViewHeight, setCompleteScrollViewHeight] = useState(1);
  const [visibleScrollViewHeight, setVisibleScrollViewHeight] = useState(0);
  const scrollIndicator = useRef(new NativeAnimated.Value(0)).current;
  let indicatorHeight = indicatorSize
    ? gsw(indicatorSize)
    : (visibleScrollViewHeight * visibleScrollViewHeight) /
      completeScrollViewHeight;

  const scrollIndicatorSize =
    completeScrollViewHeight > visibleScrollViewHeight
      ? indicatorHeight
      : visibleScrollViewHeight;

  const difference =
    visibleScrollViewHeight > scrollIndicatorSize
      ? visibleScrollViewHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = NativeAnimated.multiply(
    scrollIndicator,
    visibleScrollViewHeight / completeScrollViewHeight,
  ).interpolate({
    extrapolate: 'clamp',
    inputRange: [0, indicatorSize || difference],
    outputRange: [0, difference],
  });

  const onLayout = ({
    nativeEvent: {
      layout: {height},
    },
  }: LayoutChangeEvent) => {
    setVisibleScrollViewHeight(height);
  };

  const closeDown = () => {
    setVisible(false);
    offset.value = 0;
  };

  const close = (value: string) => {
    setInvalue('');
    setSearchValue(value);
    setVisible(false);
    offset.value = 0;
  };
  const pan = Gesture.Pan()
    .onChange(event => {
      const offsetDelta = event.changeY + offset.value;
      //   offset.value += event.changeY;
      const clamp = Math.max(-OVERDRAG, offsetDelta);
      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(0);
    })
    .onFinalize(() => {
      if (offset.value < HEIGHT / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(HEIGHT, {}, () => {
          runOnJS(closeDown)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  const renderItem = ({item, onItemPress, selected}: any) => {
    const active = selected == item.value;
    return (
      <TouchableOpacity
        justifyContent={'center'}
        px={'hm'}
        minHeight={gsh(44)}
        maxHeight={gsh(68)}
        py={'vsm'}
        borderBottomColor={'extraLightGrey'}
        borderBottomWidth={1}
        onPress={onItemPress}
        key={item.label}>
        <Text variant={'regular16'}  >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const _renderItem = (item: any) => {
    return (
      <Fragment key={`${item.label}-key`}>
        {renderItem({
          item,
          onItemPress: () => close(item.value),
          selected: searchValue,
        })}
      </Fragment>
    );
  };

  const _renderModalContent = () => {
    return (
      <>
        <Shadow
          distance={gsh(10)}
          startColor={'#ececec'}
          sides={{
            top: true,
            end: false,
            bottom: true,
            start: false,
          }}
          style={{
            width: '100%',
          }}
          containerStyle={{
            width: '100%',
            backgroundColor: 'white',
          }}>
          <Box px={'hm'} py={'vm'}>
            <FLabelInput
              label={label || 'Search'}
              rightComponent={'SearchIcon'}
              value={inValue}
              onChangeText={text => setInvalue(text)}
            />
          </Box>
        </Shadow>
        <KeyboardAvoidingView
          behavior="height"
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            marginBottom: 100,
            flexGrow: 1,
          }}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 40,
              marginTop: spacing.vsm,
            }}
            style={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={32}
            data={filteredData}
            ListEmptyComponent={() => (
              <Box marginTop={'vxl'} flex={1} alignItems={'center'}>
                <Text color={'lightGrey'}>No Results Found</Text>
              </Box>
            )}
            renderItem={({item}) => _renderItem(item)}
            onContentSizeChange={(_, contentHeight) => {
              console.log(contentHeight);
              setCompleteScrollViewHeight(contentHeight);
            }}
            onLayout={onLayout}
            onScroll={NativeAnimated.event(
              [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
              {useNativeDriver: false},
            )}
          />
          {/* Custom Scrollbar */}
          {completeScrollViewHeight > visibleScrollViewHeight && (
            <Box style={styles.customScrollBarBackground}>
              <NativeAnimated.View
                style={[
                  styles.customScrollBar,
                  {
                    height: scrollIndicatorSize,
                    transform: [{translateY: scrollIndicatorPosition || 0}],
                  },
                ]}
              />
            </Box>
          )}
        </KeyboardAvoidingView>
      </>
    );
  };

  const onSearch = (searchText: string) => {
    const filteredArray = banksData.filter(item => {
      return item.value.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilteredData(filteredArray);
  };

  useEffect(() => {
    onSearch(inValue);
  }, [inValue]);

  return (
    <>
      {visible && (
        <GestureDetector gesture={pan}>
          <Animated.View
            //   layout={Layout.duration(200).delay(200)}
            entering={SlideInDown}
            exiting={SlideOutDown}
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                width: '100%',
                backgroundColor: 'white',
              },
              translateY,
            ]}>
            {_renderModalContent()}
          </Animated.View>
        </GestureDetector>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  searchItemText: {
    fontFamily: 'MTNBrighterSans-Regular',
    fontSize: gsw(16),
    fontWeight: '400',
    lineHeight: 24,
    color: '#000',
  },
  activeSearchItem: {
    backgroundColor: globalExtraLightGrey,
  },
  customScrollBar: {
    backgroundColor: globalMoMoBlue,
    borderRadius: 10,
    width: 5,
  },
  customScrollBarBackground: {
    width: 6,
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: gsw(5),
  },
});
